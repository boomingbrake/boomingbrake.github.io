$(document).ready(function() {

  $("#extraTab").click(function() {
    if ($(this).hasClass("pulled")) {
      $(this).addClass("closed").removeClass("pulled")
      $("#moreStuff").css({
        'right': "-250px"
      })
    } else {
      $(this).removeClass("closed").addClass("pulled")
      $("#moreStuff").css({
        'right': "0px"
      })
    }
  });

  $("#headerTab").click(function() {
    if ($(this).hasClass("header--opened")) {
      $(this).addClass("header--closed").removeClass("header--opened")
      $("#headerImg").css({
        'top': "-250px"
      })
    } else {
      $(this).removeClass("header--closed").addClass("header--opened")
      $("#headerImg").css({
        'top': "0px"
      })
    }
  });

});
