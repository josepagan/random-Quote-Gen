var cita;
var twitLink
$(function() {
  // jQuery goes here...

$.ajaxSetup({
  headers : {
    "X-Mashape-Key": "VCEFjjDSvCmshrETndUi8NVoj2Snp1Z225wjsnQf4B0CQhl8zb",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  }
});

$(document).ready(function(){

  $("#btn-click").click(function(){

$.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", function(data) {
  //  console.log(data);
cita = data;

   $("#author").text(data.author);
   $("#quoteText").text(data.quote);


twitLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + data.quote;


// learn about web-intent:
// https://dev.twitter.com/web/tweet-button/web-intent
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

console.log(twitLink);




});
});
});
});
