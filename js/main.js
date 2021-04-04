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