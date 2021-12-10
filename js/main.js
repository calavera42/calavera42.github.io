$(function() {
    var prev;
    var canScroll = false;
    var finishedScrolling = true;
    var canAlterElements = false;
    var logs = 0;
    var lines = 0;
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
    var cd = $("#console");
    cd.hide();
    if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

    console.log = function(message) {
        if(logs >= 10){
            $('#console p').first().remove();
            logs--;
        }
        lines++;
        console.olog(message);
        cd.append('<p><span style="color: red">[console]</span> ' + message + '</p>');
        cd.scrollTop(cd.prop("scrollHeight"));
        logs++;
    };
    console.error = console.debug = console.info =  console.log
    //=================================================================================

    //pegar usuário do discord ========================================================
    const token = 'YOUR_TOKEN' //n vale nem a pena correr atrás, é um bot privado q n tá em nenhum servidor e não tem nada de interessante.

    function GetUser(id)
    {
        var response = fetch(`https://discord.com/api/v9/users/${id}`, {
            headers: {
            Authorization: `Bot ${token}`
            }
        })
        if (!response.ok) throw new Error(`Error status code: ${response.status}`)
        return JSON.parse(response.json())
    }

    var user = GetUser("473226092988203039");
    document.getElementById("discord").innerText = `${user.username}#${user.discriminator}`;
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
            console.log("tx = "+text+"; cs = " + canScroll + "; fs = " + finishedScrolling);
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
            console.log("o usuário solicitou a abertura do console de testes.");
        }
    });
})