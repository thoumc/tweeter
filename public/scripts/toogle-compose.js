$(document).ready(function() {

  $("#compose-button").click(function() {
    $(".new-tweet").slideToggle("medium", function() {
      $("textarea").focus();
    });
  });

});