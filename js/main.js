$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;

    //$("a").hover(function()
    //{
    //    prev = $(this).text();
    //    $(this).text(`[ ${prev} ]`);
    //}, function()
    //{
    //    $(this).text(prev);
    //})

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

$(function(){
    $("#menu-placeholder").load("https://calavera.xyz/html/navmenu.html");
})