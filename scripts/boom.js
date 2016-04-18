$(document).ready(function() {

  // Hover Banner
  $(window).scroll(function() {

    if ($(window).scrollTop() > 10) {
      $('.header').removeClass('header--hover');
    } else {
      $('.header').addClass('header--hover');
    }
  });

});
