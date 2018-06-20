$(document).ready(function(){
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var $textNumber = $(this).find("textarea").val().length;
    if ( $textNumber === 0){
      alert("You need to enter something to submit!");
    } else if ($textNumber > 140) {
      alert("The maximum character is 140!!")
    } else {
      let tweetData = $(this).find("textarea").serialize();
      ajaxSubmitPost(tweetData);
    }
  })
});



function ajaxSubmitPost (data){
  $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      });
}


