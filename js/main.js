$(function(){
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
            if(click == 10)
            {
                click = 0;
                var audio = new Audio('../audio/theme.mp3');
                audio.play();
            }
        }
    )
})