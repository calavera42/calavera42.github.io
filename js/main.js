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
    function Scroller(text) {
        document.title = text;
        setTimeout(function () {
            Scroller(text.substr(1) + text.substr(0, 1));
        }, 500);
    };
    Scroller(document.title+" - ");
})