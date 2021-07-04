$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var objDate = new Date();
    var hours = objDate.getHours();

    if(hours >= 00 && hours <= 17){ 
        var audio = new Audio("../audio/heartaches.wav");
        audio.volume = 0.2;
        audio.play();
    }

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
})