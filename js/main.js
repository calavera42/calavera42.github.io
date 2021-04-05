//menu hover//
//////////////
$(function(){
    var prev;
    $("a").hover(
        function(){
            prev = $(this).text();
            $(this).text(`[ ${prev} ]`);
        },
        function(){
            $(this).text(`${prev}`);
    })
})

//$(document).ready(function() {
//    $('body').css('background-size', $(window).width()/5 + 'px ' + $(window).height()/5 + 'px');
//})

$(document).ready(function()
{
    $(".asd").css('position', 'absolute');
    $(".asd").css(`top`, `${rnd($(document).height(), 0)}`);
    $(".asd").css(`left`, `${rnd($(document).width(), 0)}`);
})

function rnd(max, min)
{
    return Math.random() * (max - min) + min;
}