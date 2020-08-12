$("#scrollButtonIndex").click(function() {
    $('html, body').animate({
        scrollTop: $("#navigation").offset().top
    }, 1000);
});
$("#scrollButtonMemory").click(function() {
    $('html, body').animate({
        scrollTop: $("#memoryPage").offset().top
    }, 1000);
});