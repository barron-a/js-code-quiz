var clearLocalStorage = document.getElementById("clear-scores");

function showScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    for (i = 0; i < highScores.length; i++) {
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = highScores[i].initials + ": " + highScores[i].score;
        console.log(highScores[i].initials);
        var scoreList = document.getElementById("high-scores");
        scoreList.appendChild(scoreListItem);
    };
}

function clearScores() {
    localStorage.clear();
    location.reload();
}

showScores();

clearLocalStorage.addEventListener("click", clearScores);