$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var titleTimeout;
    var titleOffest;

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
            document.getElementById("title").textContent = text;
            titleTimeout = setTimeout(function () {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 300);
        }("calavera"));
    }, function()
    {
        clearTimeout(titleTimeout);
        titleOffest = document.getElementById("title").textContent.indexOf("c");
        function retTitle()
        {
            if(titleOffest == 0)
                return;
            var text = document.getElementById("title").textContent;
            document.getElementById("title").textContent = text.substr(1) + text.substr(0, 1)
            titleOffest--;
            console.log("to: "+titleOffest+" t: "+text);
            setTimeout(retTitle(), 300);
        }
        retTitle();
    })
})