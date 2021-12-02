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

    //console =========================================================================
    $("#console").hide();
    $("#console").resizable();
    $("#console").draggable();
    if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

    console.log = function(message) {
        console.olog(message);
        $('#debugDiv').append('<p>' + message + '</p>');
    };
    console.error = console.debug = console.info =  console.log
    //=================================================================================

    //transição de texto ==============================================================
    function transition(text, element, progress, cycles){
        if(cycles >= 50 / text.length){
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

        while(currentIndex == nextIndex)
            nextIndex = Math.floor(Math.random() * (welcomes.length - 1 + 1));

        document.getElementById("bemvindo").textContent = welcomes[nextIndex];
    }, () => { })
    //=================================================================================

    $("body").keypress(function(event){
        if(event.which == 47){
            $("#console").show();
        }
    });
})