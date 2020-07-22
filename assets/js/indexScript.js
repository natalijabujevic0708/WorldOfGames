$(document).ready(function() {
    //click event for the nav dots on Home page
    function navDotsChange(buttonId) {
        let otherButton
        if (buttonId==='#dotGuess') {
            $("#section").text("1/2");
            $(".background h2").text("Guess the number");
            $("#description").text("Get into the head of the computer and guess what number it is thinking of!");
            $("#buttonPlay").attr("href", "GuessNumber.html");
            otherButton = '#dotMemory';
        }else{
            $("#section").text("2/2");
            $(".background h2").text("Memory game");
            $("#description").text("Test your memory with this fun game!");
            $("#buttonPlay").attr("href", "Memory.html");
            otherButton = '#dotGuess';
        }
        $(otherButton).removeClass('activeDot');
        $(buttonId).addClass('activeDot');
    }
    $('#dotGuess').click(function(){
           navDotsChange('#dotGuess')
      });
    $('#dotMemory').click(function(){
           navDotsChange('#dotMemory')
      });
});
