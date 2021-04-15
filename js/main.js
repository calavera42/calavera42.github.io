$(function()
{
    var prev;
    var click = 0;

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
            click++;
            if(click == 50)
            {
                click = 60;
                var audio = new Audio('../audio/theme.mp3');
                audio.volume = 0.2;
                audio.play();
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