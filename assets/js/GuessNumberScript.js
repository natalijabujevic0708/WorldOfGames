let data = [];
$(document).ready(function() {
    // guess the number game
    function radomNumber() {
        return computerGuess = Math.floor(Math.random()*501); // create a random number
    };
    $(document).ready(function(){
        radomNumber();
        return countTries=0;
    });
    function addScore() {
        data = JSON.parse(localStorage.getItem("scoreboard"));
        let userName = prompt("Please enter your user name:");
        // Add the new score to end of 'data'
        data.push([countTries, userName]);
    
        // Sort data by all of the scores
        data.sort((a,b) => a[0] - b[0]);
        
        if (data.length > 5){
            data = data.slice(0,5)
        }
        localStorage.setItem('scoreboard', JSON.stringify(data));
        };

    function guessNumber() {
        let userGuess = document.getElementById("userGuess").value;  // get the users guess
        document.getElementById('userGuess').value = ""; // make the input field empty
        if (userGuess<1 || userGuess>500) {
            $("#instructions").text("Please enter a number between 1 and 500");
        }else if (userGuess<computerGuess) {
            $("#instructions").html(`${userGuess} is incorrect <br> You aimed TOO LOW <br> Try again!`);
        }else if (userGuess>computerGuess) {
            $("#instructions").html(`${userGuess} is incorrect <br> You aimed TOO HIGH <br> Try again!`);
        } else {
            addScore();
            $("#guessPage").html(`
                <div class="congratulations">
                    <h2>Congratulations!!</h2>
                    <p>${userGuess} is correct! You can read the computer's mind. It took you ${countTries} tries.</p>
                    <h2> TOP 5 PLAYERS </h2>
                    <div id="highScore"></div>
                    <button type="button" class="btn btn-secondary buttons"><a id="buttonPlay" href="GuessNumber.html">Play Again!</a></button>
                </div> 
            `);
            makeHighScoreTable();
             
        };                                           
    }; 

    function makeHighScoreTable() {
        let arrayofScores = JSON.parse(localStorage.getItem("scoreboard"))
        console.log(arrayofScores)
        var content = "<table class='tableHighScores'><tr><td> Place </td><td> Count of Guesses</td><td>Username</td></tr>"
        for(let i=0; i<5; i++){
            content += '<tr><td>' + (i+1) + '</td><td>' + arrayofScores[i][0] + '</td><td>' + arrayofScores[i][1] +'</td></tr>';
        };
        content += "</table>"
        $('#highScore').html(content);
    }

    function NewUserGuess(){
        guessNumber();
        countTries++;
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
