$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var titleTimeout;
    var canScroll = false;
    var finishedScrolling = true;
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

    $("#bemvindo").hover(function(){
        var currentIndex = welcomes.indexOf(document.getElementById("bemvindo").textContent);
        var nextIndex = Math.floor(Math.random() * (welcomes.length - 1 + 1));

        if(nextIndex == currentIndex)
            nextIndex++;

        document.getElementById("bemvindo").textContent = welcomes[nextIndex];
    }, function() { })

    
})

//transição do texto
$(function() {
    var glyphs = "abcdefghijklmnopqrstuvwxyz";
    var elements = document.querySelectorAll("a, p, span");

    function transition(text, element, progress, cycles){
        if(cycles >= 100 / text.length){
            progress++;
            cycles = 0;
        }

        element.innerText = text.substr(0, progress);
        for(var i = 0; i < text.length - progress; i++){
            element.innerText += glyphs[Math.floor(glyphs.length * Math.random())];
        }
        cycles++;
        if(progress == text.length)
        {
            element.innerText = text;
            return;
        }
        setTimeout(() => {
            transition(text, element, progress, cycles)
        }, 1);
    }

    elements.forEach(element => {
        transition(element.innerText, element, 0, 0);
    });
})