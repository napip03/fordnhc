$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.profile').css({
    opacity: function() {
      var elementHeight = $(this).height()
      return 0 + (elementHeight - scrollTop ) / elementHeight;
    }
  }),
  $('.gradient').css({
    opacity: function() {
        var elementHeight = $(this).height()
        return 1 - (elementHeight - scrollTop ) / elementHeight;
      }
  })
});