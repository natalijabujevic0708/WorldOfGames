$(document).ready(function() {
    //click event for the nav dots on Home page
    $('#dotGuess').click(function(){
        $('#dotMemory').removeClass('activeDot');
        $(this).addClass('activeDot');
        $("#section").text("1/2");
        $(".background h2").text("Guess the number");
        $("#description").text("Get into the head of the computer and guess what number he is thinking of!");
    });
    $('#dotMemory').click(function(){
        $('#dotGuess').removeClass('activeDot');
        $(this).addClass('activeDot');
        $("#section").text("2/2");
        $(".background h2").text("Memory game");
        $("#description").text("Test your memory with this fun game!");
    });
    // guess the number game
    function guessNumber() {
        let computerGuess = Math.floor(Math.random()*501);
        let  userGuess = $("input:number").val(); 
        if (userGuess.isFinite==="false") {
            return $("#instructions").text("Please enter a valid number");
        }else if (userGuess<1 && userGuess>500) {
            return $("#instructions").text("Please enter a number between 1 and 500");
        }else if (userGuess<computerGuess) {
            return $("#instructions").text("You aimed too low, try again!");
        }else if (userGuess>computerGuess) {
            return $("#instructions").text("You aimed too high, try again!");
        }else if (userGuess===computerGuess) {
            return $("#instructions").text(`Congratulations,${userGuess} is correct! You can read the computers mind.`);
        }
    }
    $('#guessButton').click(function(){
        guessNumber();
    });

});