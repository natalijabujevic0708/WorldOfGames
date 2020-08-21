$(document).ready(function() {
    function makeHighScoreTable(game) {
        let arrayofScores = (game==="guessNumber") ? JSON.parse(localStorage.getItem("scoreboardGuessNumber")) : JSON.parse(localStorage.getItem("scoreboardMemory"))  
        var content = "<table class='tableHighScores'><tr><td> Place </td><td> Count of Guesses</td><td>Username</td></tr>"
        for(let i=0; i<arrayofScores.length; i++){
            content += '<tr><td>' + (i+1) + '</td><td>' + arrayofScores[i][0] + '</td><td>' + arrayofScores[i][1] +'</td></tr>';
        };
        content += "</table>";
        (game==="guessNumber") ? $('#highScoreGuess').html(content) : $('#highScoreMemory').html(content)
    }
    makeHighScoreTable("guessNumber");
    makeHighScoreTable("memory")
});