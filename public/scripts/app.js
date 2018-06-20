/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement (tweet){

  var $tweet = `
        <article class= "tweet-article">
          <header class= "tweet-header">
            <img class="avatar" src="${tweet.user.avatars.regular}"">
            <h2 class="tweet-name">${tweet.user.name}</h2>
            <span class="tweet-userid">${tweet.user.handle}</span>
          </header>
          <div class="tweet-block">
            <p class="the-tweet-body">${tweet.content.text}</p>
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
  let $tweets = $('#tweets-container')

  tweets.forEach(function(post){
    var $newPost = createTweetElement(post);
    $tweets.prepend($newPost);

  });

}

function loadTweets(){
  $.ajax({
    url: '/tweets',
    type: 'GET'
  }).then(function(jsonContent){
    renderTweets(jsonContent);
    });
}





$(document).ready(function(){

 loadTweets()

})


