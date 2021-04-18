$(function() {
    var prev;
    var clicks;
    var secondClick = false;

    $("a").hover(function()
    {
        prev = $(this).text();
        $(this).text(`[ ${prev} ]`);
    }, function()
    {
        $(this).text(prev);
    })

    $("#title").click(function(){
        alert("ta-da"+clicks);
        clicks++;
        if(clicks == 60 && secondClick)
        {
            clicks = 120;
            var audio = new Audio("../audio/theme.mp3");
            audio.volume = 0.1;
            audio.play();
        }
    })

    $("#calavera").click(function(){
        secondClick = true;
    })
})