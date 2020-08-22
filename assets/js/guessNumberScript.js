$(document).ready(function() {
    // guess the number game
    function radomNumber() {
      let computerGuess;
      computerGuess = Math.floor(Math.random()*501);
      return computerGuess; // create a random number
    }
    $(document).ready(function(){
      	let countTries;
        radomNumber();
      	countTries=0;
        return countTries;
    });
    function guessNumber() {
        let userGuess = document.getElementById("userGuess").value;  // get the users guess
        $( "#introductionGuess" ).remove();
        document.getElementById('userGuess').value = ""; // make the input field empty
        if (userGuess<1 || userGuess>500) {
            $("#instructions").text("Please enter a number between 1 and 500");
        }else if (userGuess<computerGuess) {
            $("#instructions").html(`${userGuess} is incorrect <br> You aimed TOO LOW <br> Try again!`);
            countTries++;
        }else if (userGuess>computerGuess) {
            $("#instructions").html(`${userGuess} is incorrect <br> You aimed TOO HIGH <br> Try again!`);
            countTries++;
        } else {
            countTries++;
            localStorage.setItem('countTries', countTries);
            addScore("guessNumber");
            $("#guessPage").html(`
                <div class="congratulations">
                    <h2>Congratulations!!</h2>
                    <p>${userGuess} is correct! You can read the computer's mind. It took you ${countTries} tries.</p>
                    <h2> TOP 5 PLAYERS </h2>
                    <div id="highScoreGuess"></div>
                    <button type="button" class="button style2 fit"><a id="buttonPlay" href="guessNumber.html">Play Again!</a></button>
                </div> 
            `);
            makeHighScoreTable("guessNumber"); 
        }                                           
    } 

    function NewUserGuess(){
        guessNumber();
    }
    window.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
        NewUserGuess();
        }
    });

    $('#clickMe').click(function(){
        NewUserGuess();
    });
});