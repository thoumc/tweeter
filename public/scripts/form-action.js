$(document).ready(function(){
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(this).find("textarea").serialize()
    })
    //$( this ).find("textarea").serialize();
    console.log(  $( this ).find("textarea").serialize());

  });

});

