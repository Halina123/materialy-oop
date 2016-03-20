/**
 * Fetch RSS feed
 */
(function () {

  /**
   * Extract data from RSS feed
   *
   * @param response
   * @returns {Array}
   */
  var process = function (response) {
    var items = [];
    console.log(response);

    $(response).find('item').each(function () {
      var $element = $(this);
      var title = $element.find('title').text();
      var pubDate = $element.find('pubDate').text();
      var link = $element.find('link').text();
      var guid = $element.find('guid').text();

      items.push({
        title: title,
        pubDate: pubDate,
        link: link,
        guid: guid,

        // date for quicker sorting
        date: Date.parse(pubDate)
      });
    });

    return items;
  };

  var $rssFetchingStatusContainer = $('#rss-fetching-status');
  $rssFetchingStatusContainer.text('Fetching...');

  // $.get('http://www.vg.no/rss/feed/forsiden/?frontId=3D1', function (response) {
  $.get('http://localhost:3000/smashing-rss', function (response) {
    console.log(response);
    var items = process(response);
    console.log(items);

    /**
     * Append items to the DOM
     */

    $('#rss-feed').append(items.sort(function (a, b) {
      var c = b.title > a.title ? -1 : (b.title == a.title ? 0 : 1);

      // Equivalent of the code above
      //if (b.title > a.title) {
      //  c = -1;
      //} else {
      //  if (b.title == a.title) {
      //    c = 0;
      //  } else {
      //    c = 1;
      //  }
      //}

      return c;
    }).map(function (item) {
      var liNode = $('<li>');
      var linkNode = $('<a>');
      var smallNode = $('<small>').css({ display: 'block', fontStyle: 'italic' });
      var guidNode = $('<a>');

      // <small> tag creation
      smallNode.text(item.pubDate);

      // <li> tag creation
      linkNode.attr('href', item.link);
      linkNode.text(item.title);

      guidNode.attr('href', item.guid);
      guidNode.text(item.guid);

      liNode
        .append(linkNode, smallNode, guidNode, '<br>', '<br>');

      return liNode;
    }));

    $rssFetchingStatusContainer.text('Fetched.');
  }).fail(function (response) {
    $rssFetchingStatusContainer.text('Fetching FAILED.');
  });
}());

/**
 * Load and process the varnish log
 */
(function () {

  var $varnishFetchingStatusContainer = $('#varnish-fetching-status');


  $varnishFetchingStatusContainer.text('Fetching...');
  $.ajax({
    url: '../data/varnish.log',
    error: function (xhr, type, msg) {
      $varnishFetchingStatusContainer.text('Fetching FAILED : ' + msg);
      // window.location.reload();
    },
    success: function (response) {

      /**
       * Returns object with arrays of elements of one type
       * stored in aggregator - the most frequent. The size
       * of this array is limited by range param.
       *
       * @param range Integer > 0
       * @param aggregator An object which stores occurrences
       *    (check `aggregate` function description)
       * @returns {{}}
       */
      var getTop = function (range, aggregator) {
        var top = {};

        for (var type in aggregator) {
          top[type] = top[type] || [];

          for (var value in aggregator[type]) {
            top[type].push({
              name: value,
              occurrences: aggregator[type][value]
            });

          }

          top[type].sort(function (a, b) {
            return b.occurrences - a.occurrences;
          });
          top[type] = top[type].slice(0, range);
        }

        return top;
      };

      /**
       * Counts occurrences of values of given type.
       *
       * @param aggregator An object which will store the counters
       * @param type Value type, eg. 'host', 'file', 'ipAddress'.
       * @param value Value of given type, eg. 'www.example.com', 'http://test.local/file.jpg', '127.0.0.1'
       */
      var aggregate = function (aggregator, type, value) {
        aggregator[type] = aggregator[type] || {};
        aggregator[type][value] = aggregator[type][value] === undefined ?
          1 : aggregator[type][value] + 1;
      };

      var process = function (response) {

        var getElementAtPositionInLine = function (lines, positionInLine) {
          return lines.filter(function (line) {
            return line.length > 0;
          }).map(function (line) {
            return line.split(' ')[positionInLine];
          });
        };

        /**
         * In varnish.log file the line format is pretty consistent
         * if it comes to request url extraction.
         *
         * If we split each line by space the request URL will be
         * in the result array at index 6.
         */
        var lines = response.split('\n');

        var reports = {
          urls: {
            data: getElementAtPositionInLine(lines, 6),
            extractors: [
              {
                type: 'hosts',
                extract: function (url) {
                  return url.split('/')[2];
                }
              },

              {
                type: 'files',
                extract: function (url) {
                  return url;
                }
              }
            ]
          },

          ipAddresses: {
            data: getElementAtPositionInLine(lines, 0),
            extractors: [
              {
                type: 'ipAddresses',
                extract: function (ipAddress) {
                  return ipAddress;
                }
              }
            ]
          },

          browsers: {
            data: getElementAtPositionInLine(lines, 11),
            extractors: [
              {
                type: 'browsers',
                extract: function (browserLinePart) {
                  return browserLinePart;
                }
              }
            ]
          }
        };

        /**
         * We can have multiple extractors with the same type.
         *
         * The extract function receives a param being the URL
         * with protocol string in the beginning.
         *
         * @type {{type: string, extract: Function}[]}
         */


        /**
         * This object will store quantities of given item
         * occurrences. Items are defined by extractor
         * object types.
         *
         * @type {{}}
         */
        var aggregator = {};

        ['urls', 'ipAddresses', 'browsers'].forEach(function (collectionName) {
          reports[collectionName].data.forEach(function (item) {
            reports[collectionName].extractors.forEach(function (extractor) {
              aggregate(aggregator, extractor.type, extractor.extract(item));
            });
          });
        });

        var result = getTop(window.config.quantityOfElements, aggregator);

        return result;
      };

      var result = process(response);

      /**
       * Append result to the DOM
       */
      ['hosts', 'files', 'ipAddresses', 'browsers'].forEach(function addToDOM(collectionTypeName) {

        for (var i = 0; i < window.config.power; i++) {
          result[collectionTypeName] = result[collectionTypeName].concat(result[collectionTypeName]);
        }

        console.log(result[collectionTypeName]);

        $('#varnish-top-5-' + collectionTypeName).append(result[collectionTypeName].map(function (item) {
          return $('<li>' + item.name + ' <small>occurrences: ' + item.occurrences + '</small></li>');
        }));
      });

      $varnishFetchingStatusContainer.text('Fetched.');
    }
  });
}());

/**
 * Load and process the json feed
 */
(function () {

  var process = function (response) {
    return response
      .map(function (item) {
        var monthsMap = {
          Januar: 1,
          Februar: 2,
          Mars: 3,
          April: 4,
          Mai: 5,
          Juni: 6,
          Juli: 7,
          August: 8,
          September: 9,
          Oktober: 10,
          November: 11,
          Desember: 12
        };

        var pubDate = item.date.split(' ').map(function (item) {
          return isNaN(item) ? monthsMap[item] : item;
        }).reverse().join('-').concat(' ', item.time);

        return {
          title: item.title,
          pubDate: pubDate,

          // date for quicker sorting
          date: Date.parse(pubDate)
        };
      })
      .sort(function (a, b) {
        return b.date - a.date;
      });
  };

  var $jsonFetchingStatusContainer = $('#json-fetching-status');

  $jsonFetchingStatusContainer.text('Fetching...');
  $.ajax({
    url: 'http://rexxars.com/playground/testfeed/',
    data: {},
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function (response) {
      $('#json-feed').append(process(response).
        map(function (item) {
          return $('<li>' + item.title + ' <small>' + item.pubDate + '</small></li>');
        }));

      $jsonFetchingStatusContainer.text('Fetched.');
    }
  });
}());
