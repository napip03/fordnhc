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
  });
});
$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
});
$(window).scroll(function(){
  if($(this).scrollTop() > 400){
    $('.scroll-header').css({'display': 'none'});
  }
  if($(this).scrollTop() < 400){
    $('.scroll-header').css({'display': 'inline'});
  }
});