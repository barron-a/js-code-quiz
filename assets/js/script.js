// establish variables
var startButton = document.getElementById('start-quiz');

function quizTimer() {
    var timeLeft = 5;
    var interval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }
    },
    1000);
}

startButton.addEventListener("click", quizTimer);