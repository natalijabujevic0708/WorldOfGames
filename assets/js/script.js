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
        return computerGuess = Math.floor(Math.random()*501); // create a random number
    };

    function guessNumber() {
        let userGuess = document.getElementById("userGuess").value;  // get the users guess
        document.getElementById('userGuess').value = ""; // make the input field empty
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
    $(document).ready(function(){
        radomNumber();
        return i=0;
    });

    //Memory game 

    const cards = document.querySelectorAll('.memory-card');
    let lockBoard = false;
    let hasFlippedCard = false;
    let firstCard, secondCard

    //function to flip the cards
    function flipCard(){ 
        if (lockBoard) return;
        if (this === firstCard) return;
        $(this).children('.front-face').toggleClass('visibility')
        $(this).children('.back-face').toggleClass('visibility')
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }else{
            secondCard = this;
            lockBoard = true;
            checkForMatch();
        }
        
    };

    //check the cards
    function checkForMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            disableCards();
        }else{
            unflipCards();
        }
        
    };

   // if the match was made
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    //if the match was not made
    function unflipCards() {
        setTimeout(() => {
            $(firstCard).children('.front-face').toggleClass('visibility')
            $(firstCard).children('.back-face').toggleClass('visibility')
            $(secondCard).children('.front-face').toggleClass('visibility')
            $(secondCard).children('.back-face').toggleClass('visibility');
            resetBoard();
        }, 1000);
    }
    
    //after the check
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    };

    //function to shuffle cards
    (function shuffle() {
        cards.forEach(card => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        });
    })(); 

    cards.forEach(card => card.addEventListener('click', flipCard));
   
});
    
