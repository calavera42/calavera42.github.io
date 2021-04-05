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

//repeat images//
/////////////////
$(document).ready(function() {
    $('body').css('background-size', $(window).width()/5 + 'px ' + $(window).height()/5 + 'px');
});