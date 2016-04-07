$(document).ready(function() {

  // Hover Header
  $(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
      $('.header').addClass('header--hover');
    } else {
      $('.header').removeClass('header--hover');
    }
  });

  // Nave Navigation
  $('.nav-toggle').click(function() {
    if ($('.header').hasClass('open-nav')) {
      $('.header').removeClass('open-nav');
    } else {
      $('.header').addClass('open-nav');
    }
  });

  $('.navigation__link').click(function() {
    if ($('.header').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.header').removeClass('open-nav');
    }
  });


  $('.nav--jump').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
      scrollTop: target
    }, 500);
    event.preventDefault();
  });
});
