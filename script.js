// google api font  AIzaSyCbrVLRx6QQPSTludd-DKqYCMhDW2cPYVc


var cita;
var twitLink
$(function() {
    // jQuery goes here...

    $.ajaxSetup({
        headers: {
            "X-Mashape-Key": "VCEFjjDSvCmshrETndUi8NVoj2Snp1Z225wjsnQf4B0CQhl8zb",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }
    });

    $(document).ready(function() {

        $("#btn-click").click(function() {
            $("#twitbtn").remove();
            $("#author").fadeTo("slow",0);
            $("#quoteText").fadeTo("slow",0);

            $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", function(data) {


                $("#author").text(data.author).fadeTo("slow",1);

                $("#quoteText").text(data.quote).fadeTo("slow",1);

                var quoteAuthor = data.quote+" ("+ data.author+")"



                twitLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURI(quoteAuthor);

                $(".card-block").append("<a id='twitbtn' class='btn btn-primary' href='" + twitLink + "' role='button'>Tweet Quote</a>");



                // learn about web-intent:
                // https://dev.twitter.com/web/tweet-button/web-intent
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

                console.log(twitLink);




            });
        });
    });
});
