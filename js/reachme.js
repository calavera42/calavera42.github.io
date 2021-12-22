$(function()
{
    $("body").keypress(function(event){
        if(String.fromCharCode(event.which).toLowerCase() == 'h')
            window.location.href = "https://en.wikipedia.org/wiki/Buy_Me_a_Coffee";
    });
})