var secondClick = false;
var clicks = 0;
var typed = "";

$("#title").click(() => {
    clicks++;
    if(clicks == 60 && secondClick)
    {
        clicks = 120;
        var audio = new Audio("../audio/serenata.wav");
        audio.volume = 0.2;
        audio.play();
    }
})

$("body").keypress(function(event){
    typed += String.fromCharCode(event.which);
    if(typed.includes("hesawme"))
        window.location = "https://calavera.xyz/html/secret";
});

$("#calavera").click(() => {
    secondClick = true;
})

$(function(){
    if(window.location == "https://calavera.xyz/periquito"){
        if(confirm("Executar código K.R.E.P.S.K.I.? (OK = Sim, CANCEL = Não)\nLembrando que a responsabilidade de tal ato não é da pessoa que clicar \"OK\".")){
            $("#periquito").html("<video src=\"https://calavera.xyz/video/cheiademarra.mp4\"></video>");
        }
    }

})