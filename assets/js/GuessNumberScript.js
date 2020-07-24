$(document).ready(function() {
    // guess the number game
    function radomNumber() {
        return computerGuess = Math.floor(Math.random()*501); // create a random number
    };
    let data = []
    function addScore() {
        // Add the new score to end of 'data'
        data.push([countTries, userName]);
        // Sort data by all of the scores
       data.sort(function(a, b) {
		    return a[0] < b[0];
		});
        // Take just the top 5 elements
        if (data.length > 5) {
            data = data[0, 5];
        };
        return data;
        };

	function saveScores() {
		localStorage.setItem('scoreboard', data);
	}

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
            saveScores();
            $("#guessPage").html(`
                <div class="congratulations">
                    <h2>Congratulations!!</h2>
                    <p>${userGuess} is correct! You can read the computer's mind. It took you ${countTries} tries.</p>
                    <p id="highScore"></p>
                    <button type="button" class="btn btn-secondary buttons"><a id="buttonPlay" href="GuessNumber.html">Play Again!</a></button>
                </div> 
            `);
             $("#highScore").text(localStorage.getItem('scoreboard'));
        };                                           
    }; 

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

    $(document).ready(function(){
        let name, userName
        name = prompt("Please enter your user name:");
        userName = name.value;
        radomNumber();
        return countTries=0, userName;
    });
});