$(function() {
    var prev;
    var clicks = 0;
    var secondClick = false;
    var objDate = new Date();
    var hours = objDate.getHours();

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

    $("#secret").click(function(){
        if(hours >= 18 && hours <= 00){ 
            var audio = new Audio("../audio/heartaches.wav");
            audio.volume = 0.2;
            audio.play();

            var countDownDate = new Date("Oct 10, 2021 15:37:25").getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("title").innerHTML = `${days < 10 ? "0" : ""}${days}d ${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
                if (distance < 0) {
                    clearInterval(x);
                    audio.pause();
                    document.getElementById("title").innerHTML = "its all over";

                    $(".main-body").empty();
                    $(".main-body").append('<center><video width="720" height="480" autoplay><source src="../video/nggyu.mp4" type="video/mp4"></video></center>');
                }
            }, 1000);
        }
    })
})