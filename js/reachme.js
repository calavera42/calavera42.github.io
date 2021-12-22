$(function()
{
    $("bmc").keypress(function(event){
        if(String.fromCharCode(event.which).toLowerCase() == 'h' && $('bmc').is(":hover"))
            window.location = "https://en.wikipedia.org/wiki/Buy_Me_a_Coffee";
    });
})