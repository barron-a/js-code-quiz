// create variable for click listener at bottom of page
var clearLocalStorage = document.getElementById("clear-scores");

// function to add initials and high score to ordered list and then populate those items on page
function showScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.sort(function(a, b) {return b.score -a.score});
    
    for (i = 0; i < highScores.length; i++) {
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = highScores[i].initials + ": " + highScores[i].score;

        var scoreList = document.getElementById("high-scores");
        scoreList.appendChild(scoreListItem);
    };
}

// function to clear high scores and reload the page
function clearScores() {
    localStorage.clear();
    location.reload();
}

showScores();

clearLocalStorage.addEventListener("click", clearScores);