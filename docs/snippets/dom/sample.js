function animateElementsOnShow ($elements)
{
  $elements.css({ opacity: 0 });
  //$elements.each( function() {
  //    if( checkIfPresent( $(this) ) ) {
  //        $(this).fadeIn(2000);
  //    }
  //});

  $(window).scroll(function () {
    $elements.each( function() {
      var $element = $(this);

      if( checkIfPresent( $(this) ) ) {
        var animations = {
          'animate': {
            opacity: 1
          },

          'move': {
            marginLeft: 2000
          }
        };

        $(this).attr('class').split(/\s+/).forEach(function (className) {
          $element.animate(animations[className], 2000);
        });
      }
    });
  });
}