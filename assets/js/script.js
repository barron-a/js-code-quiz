// establish variables
var startButton = document.getElementById("start-quiz");
var index = 0;
var timeLeft = 60;
var countdown;
var timer = document.getElementById("timer");
var intro = document.querySelector(".intro");
var questionContainer = document.getElementById("question-container");
var answerContainer = document.getElementById("answers");
var submitScore = document.getElementById("submit-score");

// establish quizQuestions array for index to loop through
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

// function to countdown and display time, and end quiz if timer reaches 0
function quizTimer() {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
};

// function to start quiz which hides welcome page and starts timer
function startQuiz() {
    intro.setAttribute("class", "hidden");
    countdown = setInterval(quizTimer, 1000);
    timer.textContent = "Time: " + timeLeft;
};

// function to unhide questions section and display looped questions and answers from array
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

// function to run when quiz ends, either when timer runs out or quiz is finished
function endQuiz() {
    // stop timer
    clearInterval(countdown);

    questionContainer.setAttribute("class", "hidden");
    var endGame = document.getElementById("end-game")
    endGame.removeAttribute("class", "hidden");

    var roundScore = document.getElementById("score");
    roundScore.textContent = timeLeft;
}

// function to check if the selected answer was the right answer
function checkAnswer(answer) {
    var verification = document.getElementById("verification");
    var answer = this.id
    console.log(answer);
    // if statement to verifty if answer is correct
    if (answer === quizQuestions[index].rightAnswer) {
        verification.textContent = "Correct!";
    }
    else {
        verification.textContent = "Incorrect!";
        timeLeft -= 10;
    };
    // move to next question/answer options
    index++;

    // end quiz if user runs out of questions (or continue to next)
    if (index === quizQuestions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
};

// function to save quiz score to local storage
function saveScore() {
    var initials = document.getElementById("initials");
    initials = initials.value.trim();
    console.log(initials);

    var roundScore = timeLeft;
    console.log(timeLeft);

    // if initials are entered, turn the initials and score into an object that can go to local storage
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

    // take user to secondary page
    window.location.href = "allhighscores.html";
}

// click listeners for start button and submit score buttons
startButton.addEventListener("click", quizTimer);
startButton.addEventListener("click", displayQuestion);
startButton.addEventListener("click", startQuiz);
submitScore.addEventListener("click", saveScore);