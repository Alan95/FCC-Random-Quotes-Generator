$(document).ready(function() {
    randomQuote();
});
$('#button').click(function() {
    randomQuote();
});




function randomQuote() {
    $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(response) {
            var item = response.shift();
            $('#quote').html(item.content);

            var slice0 = item.content;
            var slice1 = slice0.slice(3, slice0.length - 5);
            twitter(slice1);


        },
        cache: false

    });
};


function twitter(values) {

    var tweet = "https://twitter.com/intent/tweet?text=";

    tweet += values;
    $('#tweet-quote').attr('href', tweet);
};