$(document).ready(function() {
    // guess the number game
    function radomNumber() {
        return computerGuess = Math.floor(Math.random()*501); // create a random number
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
            $("#guessPage").html(`   
                <div class="congratulations">
                    <h2>Congratulations!!</h2>
                    <p>${userGuess} is correct! You can read the computer's mind. It took you ${i} tries.</p>
                    <button type="button" class="btn btn-info buttons"><a href="index.html">Home</button>   
                </div>
            `);
        };                                           
    }; 

    function NewUserGuess(){
        guessNumber();
        i++;
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
        radomNumber();
        return i=0;
    });
});