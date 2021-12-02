var secondClick = false;
var clicks = 0;

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

$("#calavera").click(() => {
    secondClick = true;
})