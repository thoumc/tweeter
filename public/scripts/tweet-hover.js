$(document).ready(function() {
  $(".tweet-block").hover(
    function(){
      $(this).children("tweet-icons").css('opacity', 1.0);
    }, function(){
      $(this).children("tweet-icons").css('opacity', 0.0);
    })

});

