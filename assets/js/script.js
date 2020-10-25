// establish variables
var startButton = document.getElementById("start-quiz");
var index = 0;
var timeLeft = 10;
var countdown;
var timer = document.getElementById("timer");
var intro = document.querySelector(".intro");
var questionContainer = document.getElementById("question-container");
var answerContainer = document.getElementById("answers");
var submitScore = document.getElementById("submit-score");
var quizQuestions = [
    {
        question: "Which of the following is used in the script tag to link a JavaScript file to an HTML file?",
        answers: ["img", "rel", "src", "type"],
        rightAnswer: "two"
    },
    {
        question: "__________ are containers that store values",
        answers: ["objects", "variables", "functions", "for loops"],
        rightAnswer: "one"
    }
];

function quizTimer() {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
};

function startQuiz() {
    intro.setAttribute("class", "hidden");
    countdown = setInterval(quizTimer, 1000);
    timer.textContent = "Time: " + timeLeft;
};

function displayQuestion() {

    questionContainer.removeAttribute("class");

    var currentQuestion = quizQuestions[index];
    var questionDisplay = document.getElementById("question-display");
    questionDisplay.textContent = currentQuestion.question;

    var optionOne = document.getElementById("zero");
    optionOne.textContent = currentQuestion.answers[0];
    optionOne.addEventListener("click", checkAnswer);

    var optionTwo = document.getElementById("one");
    optionTwo.textContent = currentQuestion.answers[1];
    optionTwo.addEventListener("click", checkAnswer);

    var optionThree = document.getElementById("two");
    optionThree.textContent = currentQuestion.answers[2];
    optionThree.addEventListener("click", checkAnswer);

    var optionFour = document.getElementById("three");
    optionFour.textContent = currentQuestion.answers[3];
    optionFour.addEventListener("click", checkAnswer);
}

function endQuiz() {
    // stop timer
    clearInterval(countdown);

    // hide question container
    questionContainer.setAttribute("class", "hidden");

    // un-hide end game container
    var endGame = document.getElementById("end-game")
    endGame.removeAttribute("class", "hidden");

    // create variable to hold score
    var roundScore = document.getElementById("score");
    
    // make roundScore equal to timeLeft
    roundScore.textContent = timeLeft;
}

function checkAnswer(answer) {
    var verification = document.getElementById("verification");
    var answer = this.id
    console.log(answer);
    if (answer === quizQuestions[index].rightAnswer) {
        verification.textContent = "Correct!";
    }
    else {
        verification.textContent = "Incorrect!";
        timeLeft -= 10;
    };
    index++;

    if (index === quizQuestions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
};

function saveScore() {
    var initials = document.getElementById("initials");
    initials = initials.value.trim();
    console.log(initials);

    var roundScore = timeLeft;
    console.log(timeLeft);

    if (initials !== "") {
        scoreObj = {
            score: roundScore,
            initials: initials
        };

        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push(scoreObj);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        console.log(highScores);
    }

    window.location.href = "allhighscores.html";
}

startButton.addEventListener("click", quizTimer);
startButton.addEventListener("click", displayQuestion);
startButton.addEventListener("click", startQuiz);
submitScore.addEventListener("click", saveScore);