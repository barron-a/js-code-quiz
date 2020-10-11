// establish variables
var startButton = document.getElementById('start-quiz');
var quizQuestions = [
    { 
        question: "Which of the following examples would properly link a JavaScript document to an HTML document?", 
        answers: {
            1: "<link rel=\"stylesheet\" href=\"style.css\">",
            2: "<script> src=\"./assets/js/script.js\"</script>",
            3: "<script src=\"./assets/js/script.js\"></script>",
            4: "<link rel=\"script\" href=\"script.js\">",
        },
        rightAnswer: "3" 
    },
    { 
        question: "__________ are containers that store values", 
        answers: {
            1: "objects",
            2: "variables",
            3: "functions",
            4: "for loops",
        },
        rightAnswer: "2" 
    }
]

function quizTimer() {
    var timeLeft = 90;
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

function quiz() {
    for (var i = 0; i < quizQuestions.length; i++) {

    }
}

startButton.addEventListener("click", quizTimer);
startButton.addEventListener("click", quiz);