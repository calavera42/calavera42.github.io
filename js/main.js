$(function() {
    var prev;
    var canScroll = false;
    var finishedScrolling = true;
    var canAlterElements = false;
    var welcomes = [
        "bem vindo!",
        "welcome!",
        "¡bienvenido!",
        "benvenuto!",
        "bienvenue!",
        "willkommen!",
    ];
    var glyphs = "abcdefghijklmnopqrstuvwxyz";
    var elements = document.querySelectorAll("a, p, span");

    //transição de texto ==============================================================
    function transition(text, element, progress, cycles){
        if(cycles >= 80 / text.length){
            progress++;
            cycles = 0;
        }

        element.innerText = text.substr(0, progress);
        for(var i = 0; i < text.length - progress; i++){
            if(text[i] == ' ')
                continue;
            element.innerText += glyphs[Math.floor(glyphs.length * Math.random())];
        }
        cycles++;
        if(progress == text.length)
        {
            canAlterElements = true;
            return;
        }
        setTimeout(() => {
            transition(text, element, progress, cycles)
        }, 1);
    }

    elements.forEach(element => {
        transition(element.innerText, element, 0, 0);
    });
    //=================================================================================

    //estilo de href ==================================================================
    $("a").hover(function()
    {
        if(!canAlterElements) return;
        prev = $(this).text();
        $(this).text(`[${prev}]`);
    }, function()
    {
        if(!canAlterElements) return; 
        $(this).text(prev);
    })
    //=================================================================================

    //rolagem do título ===============================================================
    $("#title").hover(() => {
        if(!canAlterElements) return;
        if(!finishedScrolling) return;
        canScroll = true;
        finishedScrolling = false;
        (function titleScroller(text) {
            document.getElementById("title").textContent = text;
            if(text == "calavera" && !canScroll){
                finishedScrolling = true;
                return;
            }
            setTimeout(() => {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 300);
        }("calavera"));
    },  function() {
        if(!canAlterElements) return;
        canScroll = false;
    })
    //=================================================================================

    //bem vindo em outras línguas =====================================================
    $("#bemvindo").hover(() => {
        if(!canAlterElements) return;
        var currentIndex = welcomes.indexOf(document.getElementById("bemvindo").textContent);
        var nextIndex = Math.floor(Math.random() * (welcomes.length - 1 + 1));

        if(nextIndex == currentIndex)
            nextIndex++;

        document.getElementById("bemvindo").textContent = welcomes[nextIndex];
    }, () => { })
    //=================================================================================

    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";

    var font_size = 10;
    var columns = c.width/font_size;
    
    var drops = [];

    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    function draw()
    {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";

        for(var i = 0; i < drops.length; i++)
        {
            var text = matrix[Math.floor(Math.random()*matrix.length)];

            ctx.fillText(text, i*font_size, drops[i]*font_size);

            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(draw, 35); 
})