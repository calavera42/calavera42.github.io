//menu hover//
//////////////
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
    /*$("#title").click(
        function()
        {
            click++;
            if(click == 10)
            {
                click = 0;
                alert("gay");
            }
        }
    )*/
})