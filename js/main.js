$(function()
{
    var prev;
    var click = 0;
    var played = false;

    $("a").hover(
        function()
        {
            prev = $(this).text();
            $(this).text(`[ ${prev} ]`);
        },
        function(){
            $(this).text(`${prev}`);
    })
    $("#title").click(
        function()
        {
            setInterval(function()
            {
                if(!played)
                {
                    click--;
                }
            }, 12000);
            click++;
            if(click == 50)
            {
                setTimeout(function()
                {
                    click = 60;
                    played = true;

                    var audio = new Audio('../audio/theme.mp3');
                    audio.volume = 0.2;
                    audio.play();
                }, 15000);
            }
        }
    )
    document.addEventListener("contextmenu", function(e)
    {
        e.preventDefault();
    }, false)
    
    document.addEventListener("keydown", function(e)
    {
        if(e.ctrlKey || e.key == 123)
        {
            e.stopPropagation();
            e.preventDefault();
        }
    })
})