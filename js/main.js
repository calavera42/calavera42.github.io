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

$(document).ready(function() {
    $('body').css('background-size', $(window).width()/3 + 'px ' + $(window).height()/2 + 'px');
})