$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var titleTimeout;

    $("a").hover(function()
    {
        prev = $(this).text();
        $(this).text(`[ ${prev} ]`);
    }, function()
    {
        $(this).text(prev);
    })

    $("#title").click(function(){
        clicks++;
        if(clicks == 60 && secondClick)
        {
            clicks = 120;
            var audio = new Audio("../audio/serenata.wav");
            audio.volume = 0.2;
            audio.play();
        }
    })

    $("#calavera").click(function(){
        secondClick = true;
    })

    $("#title").hover(function() {
        (function titleScroller(text) {
            $("#title").text(text);
            titleTimeout = setTimeout(function () {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 300);
        }("alavera-c"));
    }, function(){
        clearTimeout(titleTimeout);
        $("#title").text("calavera");
    })
})