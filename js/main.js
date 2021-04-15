$(function()
{
    var prev;
    var click = 0;
    var secondclick = false;

    $("a").hover(
        function()
        {
            prev = $(this).text();
            $(this).text(`[ ${prev} ]`);
        },
        function()
        {
            $(this).text(`${prev}`);
    })
    $("#title").click(
        function()
        {
            click++;
            if(click == 50 && secondclick)
            {
                setTimeout(function()
                {
                    click = 60;
                    var audio = new Audio('../audio/theme.mp3');
                    audio.volume = 0.2;
                    audio.play();
                }, 20000);
            }
        }
    )

    $("#calavera").click(
        function()
        {
            secondclick = true;
        }
    );

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