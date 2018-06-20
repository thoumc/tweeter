/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
 createTweetElement(tweetData);

})

const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }


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

  $('#tweets-container').prepend($tweet);
   console.log($tweet);

 }





