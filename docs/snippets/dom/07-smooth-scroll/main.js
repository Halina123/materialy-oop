// Cache selectors
var lastId,
  $topMenu = $("#top-menu"),
  topMenuHeight = $topMenu.outerHeight() + 150,

  // All list items
  $menuItems = $topMenu.find("a"),

  // Anchors corresponding to menu items
  $scrollItems = $menuItems.map(function () {
    var $item = $($(this).attr("href"));
    if ($item.length) {
      return $item;
    }
  });

// console.log($scrollItems);

// Bind click handler to menu items
// so we can get a fancy scroll animation
$menuItems.click(function (e) {
  var href = $(this).attr("href")
    , offsetTop = (href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1);

  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 500);

  e.preventDefault();
});

// Bind to scroll
$(window).on('scroll load', function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = $scrollItems.map(function () {
    if ($(this).offset().top < fromTop) {
      return this;
    }
  });
  // console.log(cur);

  // Get the id of the current element
  console.log(cur);
  cur = cur[cur.length - 1];
  console.log(cur);
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    $menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
  }
});
