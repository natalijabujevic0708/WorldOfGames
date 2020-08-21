$(document).ready(function() {
    // JavaScript for scroll animation found on http://jsfiddle.net/kevinPHPkevin/8tLdq/1/
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
});