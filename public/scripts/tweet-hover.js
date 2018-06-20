$(document).ready(function() {
  $(".tweet-article").hover(
    function(){
      $(this).find(".tweet-icons").css('opacity', 1.0);
    }, function(){
      $(this).find(".tweet-icons").css('opacity', 0.0);
    })

});

