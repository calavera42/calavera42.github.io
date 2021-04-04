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

//title scroll//
////////////////
$(function(){
    var text = document.title + " - ";
    setTimeout(function () {
        text = text.substr(1) + text.substr(0, 1);
        document.title = text;
    }, 500);
})