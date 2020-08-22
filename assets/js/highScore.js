//putting the placeholder high scores in case the local storage is empty
if (localStorage.length === 0) {
    localStorage.setItem("scoreboardGuessNumber", JSON.stringify([["1", "Gry"], ["7", "Wesly"], ["8", "Bori"], ["10", "Rifan"], ["15","Zio"]]));
    localStorage.setItem("scoreboardMemory", JSON.stringify([["13", "Kyro"], ["16", "Yoko"], ["17", "Edith"], ["20", "Chris"], ["20","Aver"]]));
}
function addScore(game) {
    let data = (game==="guessNumber") ? localStorage.getItem("scoreboardGuessNumber") : localStorage.getItem("scoreboardMemory");
    let arrayData = data ? JSON.parse(data) : [];
    let userName = prompt("Please enter your user name:");
    // Add the new score to end of 'data'
    if (game==="guessNumber") {
        countTries = localStorage.getItem("countTries");
        arrayData.push([countTries, userName]);
    }else {
        countAttempts = localStorage.getItem('countAttempts');
        arrayData.push([countAttempts, userName]);
    }
    arrayData.sort((a,b) => a[0] - b[0]);
    if (arrayData.length > 5){
        arrayData = arrayData.slice(0,5);
    }
    (game==="guessNumber") ? localStorage.setItem('scoreboardGuessNumber', JSON.stringify(arrayData)) : localStorage.setItem('scoreboardMemory', JSON.stringify(arrayData));
    }

function makeHighScoreTable(game) {
        let arrayofScores = (game==="guessNumber") ? JSON.parse(localStorage.getItem("scoreboardGuessNumber")) : JSON.parse(localStorage.getItem("scoreboardMemory"));
        var content = "<table class='tableHighScores'><tr><td> Place </td><td> Count of Guesses</td><td>Username</td></tr>";
        for(let i=0; i<arrayofScores.length; i++){
            content += '<tr><td>' + (i+1) + '</td><td>' + arrayofScores[i][0] + '</td><td>' + arrayofScores[i][1] +'</td></tr>';
        }
        content += "</table>";
        (game==="guessNumber") ? $('#highScoreGuess').html(content) : $('#highScoreMemory').html(content);
    }
