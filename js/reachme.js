$(function()
{
    $("body").keypress(function(event){
        if(String.fromCharCode(event.which).toLowerCase() == 'h' && $('bmc').is(":hover"))
            window.location.href = "https://en.wikipedia.org/wiki/Buy_Me_a_Coffee";
    });
})