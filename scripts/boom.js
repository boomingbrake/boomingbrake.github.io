$(document).ready(function() {
  $("#tabTop").click(function() {
    if ($(this).hasClass("is-opened")) {
      $(this).addClass("is-closed").removeClass("is-opened")
      $("#tabElementTop").css({
        'top': "-250px"
      })
    } else {
      $(this).removeClass("is-closed").addClass("is-opened")
      $("#tabElementTop").css({
        'top': "0px"
      })
    }
  });
  $("#tabRight").click(function() {
    if ($(this).hasClass("is-opened")) {
      $(this).addClass("is-closed").removeClass("is-opened")
      $("#tabElementRight").css({
        'right': "-250px"
      })
    } else {
      $(this).removeClass("is-closed").addClass("is-opened")
      $("#tabElementRight").css({
        'right': "0px"
      })
    }
  });

});
