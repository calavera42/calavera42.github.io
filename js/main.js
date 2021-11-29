$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var titleTimeout;
    var canScroll = false;
    var finishedScrolling = true;
    var lastWelcome = 0;
    var welcomes = [
        "bem vindo!",
        "welcome!",
        "¡bienvenido!",
        "benvenuto!",
        "bienvenue!",
        "willkommen!",
    ];

    $("a").hover(function()
    {
        prev = $(this).text();
        $(this).text(`[${prev}]`);
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
        if(!finishedScrolling) return;
        canScroll = true;
        finishedScrolling = false;
        (function titleScroller(text) {
            document.getElementById("title").textContent = text;
            if(text == "calavera" && !canScroll){
                finishedScrolling = true;
                return;
            }
            titleTimeout = setTimeout(function () {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 300);
        }("calavera"));
    },  function() {
        canScroll = false;
    })

    setInterval(function(){
        if(lastWelcome + 1 > welcomes.length - 1)
            lastWelcome = -1;
        document.getElementById("bemvindo").textContent = welcomes[lastWelcome + 1];
        lastWelcome++;
    }, 400);
})