/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// escape any suspicious text input from users
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement (tweet) {

  var $tweet = `
        <article class= "tweet-article">
          <header class= "tweet-header">
            <img class="avatar" src="${tweet.user.avatars.regular}"">
            <h2 class="tweet-name">${tweet.user.name}</h2>
            <span class="tweet-userid">${tweet.user.handle}</span>
          </header>
          <div class="tweet-block">
            <p class="the-tweet-body">${escape(tweet.content.text)}</p>
            <span class="tweet-day">${tweet.created_at}</span>
            <span class = "tweet-icons">
                <i class="fas fa-heart"></i>
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
            </span>
          </div>
        </article>`;

  return $tweet;

}


function renderTweets(tweets) {

  let $tweets = $('#tweets-container');
  tweets.forEach(function(post) {
    var $newPost = createTweetElement(post);
    $tweets.prepend($newPost);
  });
}

function loadTweets() {

  $.ajax({
    url: '/tweets',
    type: 'GET'
  }).success(function(jsonContent) {
    renderTweets(jsonContent);
    $(".counter").text(140);
  });
}

function clearTweet () {

  $('#tweets-container').empty();
}

function ajaxSubmitPost (data) {

  $.ajax( {
    method: 'POST',
    url: '/tweets',
    data: data
  }).done(function() {
    loadTweets();
    clearTweet();

  });
}


$(document).ready(function() {

  loadTweets();

  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var $textNumber = $(this).find("textarea").val().length;

    if ( $textNumber === 0) {
      alert("You need to enter something to submit!");
  } else if ($textNumber > 140) {
      alert("The maximum character is 140!!")
  } else {
      let tweetData = $(this).find("textarea").serialize();
      ajaxSubmitPost(tweetData);
      $(this).find("textarea").val("")
    }

  });
});


