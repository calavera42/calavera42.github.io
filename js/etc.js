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