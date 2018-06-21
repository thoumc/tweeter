$(document).ready(function() {
  $('textarea').on( {
    keyup: function() {
      var counter = 140 - ($(this).val().length);
      $(this).siblings('span').text(counter);
      if (counter < 0) {
        $(this).siblings('span').css("color", 'red');
      } else {
        $(this).siblings('span').css("color", 'black');
      }
    }
  })
});

// add class and remove class of visuals so that,
// from css we can add it

