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
    function radomNumber() {
        return computerGuess = Math.floor(Math.random()*501);
    };

    function guessNumber() {
        let userGuess = document.getElementById("userGuess").value; 
        document.getElementById('userGuess').value = "";
        if (userGuess<1 || userGuess>500) {
            return $("#instructions").text("Please enter a number between 1 and 500");
        }else if (userGuess<computerGuess) {
            return $("#instructions").text(`${userGuess} is incorrect, you aimed too low, try again!`);
        }else if (userGuess>computerGuess) {
            return $("#instructions").text(`${userGuess} is incorrect, you aimed too high, try again!`);
        } else {
            return $("#instructions").text(`Congratulations, ${userGuess} is correct! You can read the computer's mind. It took you ${i} tries.`);
        };                                           
        };
    $(document).ready(function(){
        radomNumber();
        return i=0;
    });

    $('#newGame').click(function(){
        radomNumber();
        $("#instructions").text("Guess a number from 1 to 500!");
    });
    window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      guessNumber();
      i++;
    }
});
    $('#clickMe').click(function(){
        guessNumber();
        i++;
    });

    //Memory game
    $(".firstMemoryCardBack").click(function() {
    $(this).toggleClass('memoryCardFront');
});
    $('#3, #4').click(function() {
    $(this).toggleClass('secondMemoryCardBack');
    });
    $('#5, #6').click(function() {
    $(this).toggleClass('thirdMemoryCardBack');
    });
    $('#7, #8').click(function() {
    $(this).toggleClass('fourthMemoryCardBack');
    });
    $('#9, #10').click(function() {
    $(this).toggleClass('fifthMemoryCardBack');
    });
    $('#11, #12').click(function() {
    $(this).toggleClass('sixthMemoryCardBack');
    });
    function shuffle() {
        let idNumber = 1;
        let arrayNumbers = [];
        while (idNumber < 13) {
             let randomNumber =  Math.ceil(Math.random() * 12);
             if (arrayNumbers.includes(randomNumber)){
                 continue;
             }else {
                if ((randomNumber==1) || (randomNumber==2)){
                    $(`#${idNumber}`).addClass('firstMemoryCardBack')
                    idNumber++;
                }else if ((randomNumber==3) || (randomNumber==4)){
                    $(`#${idNumber}`).addClass('secondMemoryCardBack');
                    idNumber++;
                }else if ((randomNumber==5) || (randomNumber==6)){
                    $(`#${idNumber}`).addClass('thirdMemoryCardBack');
                    idNumber++;
                }else if ((randomNumber==7) || (randomNumber==8)){
                    $(`#${idNumber}`).addClass('fourthMemoryCardBack');;
                    idNumber++;
                }else if ((randomNumber==9) || (randomNumber==10)){
                    $(`#${idNumber}`).addClass('fifthMemoryCardBack');
                    idNumber++;
                }else if ((randomNumber==11) || (randomNumber==12)){
                    $(`#${idNumber}`).addClass('sixthMemoryCardBack');
                    idNumber++;
                };
            }

        };
    };
    $('.memoryButton').click(function(){
        shuffle();
    });
});



