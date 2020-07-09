$(document).ready(function() {
    $('#dotGuess').click(function(){
        $('#dotMemory').removeClass('activeDot');
        $(this).addClass('activeDot');
        $(".text h2").text("Guess the number")
        $(".text p").text("Get into the head of the computer and guess what number he is thinking of!")
    });
    $('#dotMemory').click(function(){
        $('#dotGuess').removeClass('activeDot');
        $(this).addClass('activeDot');
        $(".text h2").text("Memory game")
        $(".text p").text("Test your memory with this fun game!")
    });
});