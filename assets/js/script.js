// establish variables
var startButton = document.getElementById("start-quiz");
var index = 0;
var timeLeft = 60;
var countdown;
var timer = document.getElementById("timer");
var intro = document.querySelector(".intro");
var questionContainer = document.getElementById("question-container");
var answerContainer = document.getElementById("answers");
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
    // var removeTitle = document.getElementById("title");
    // var removeIntroText = document.getElementById("intro-text");
    // var removeStartBtn = document.getElementById("start-quiz");
    // removeTitle.remove();
    // removeIntroText.remove();
    // removeStartBtn.remove();
};

function displayQuestion() {

    // var currentQuestion = document.createElement("h2");
    // currentQuestion.setAttribute("id", "question");

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

    // var optionOne = document.createElement("button");
    // optionOne.setAttribute("class", "answerButton");
    // optionOne.setAttribute("id", "zero");
    // optionOne.addEventListener("click", checkAnswer);

    // var optionTwo = document.createElement("button");
    // optionTwo.setAttribute("class", "answerButton");
    // optionTwo.setAttribute("id", "one");
    // optionTwo.addEventListener("click", checkAnswer);

    // var optionThree = document.createElement("button");
    // optionThree.setAttribute("class", "answerButton");
    // optionThree.setAttribute("id", "two");
    // optionThree.addEventListener("click", checkAnswer);

    // var optionFour = document.createElement("button");
    // optionFour.setAttribute("class", "answerButton");
    // optionFour.setAttribute("id", "three");
    // optionFour.addEventListener("click", checkAnswer);

    //display current question from array on page
    // currentQuestion.innerHTML = question;
    // document.getElementById("question-container").appendChild(currentQuestion);

    // answerContainer.innerHTML = "";

    //display current possible answers from array
    // optionOne.innerHTML = quizQuestions[index].answers[0];
    // document.getElementById("button-container-one").appendChild(optionOne);

    // optionTwo.innerHTML = quizQuestions[index].answers[1];
    // document.getElementById("button-container-two").appendChild(optionTwo);

    // optionThree.innerHTML = quizQuestions[index].answers[2];
    // document.getElementById("button-container-three").appendChild(optionThree);

    // optionFour.innerHTML = quizQuestions[index].answers[3];
    // document.getElementById("button-container-four").appendChild(optionFour);
}

function endQuiz() {
    clearInterval(countdown);
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

startButton.addEventListener("click", quizTimer);
startButton.addEventListener("click", displayQuestion);
startButton.addEventListener("click", startQuiz);

// function quiz() {
//     for (var i = 0; i < quizQuestions.length; i++) {
//         var currentQuestion = document.createElement("h2");
//         var optionOne = document.createElement("button");
//         var optionTwo = document.createElement("button");
//         var optionThree = document.createElement("button");
//         var optionFour = document.createElement("button");
//         var question = quizQuestions[i].question;
//         var answers = quizQuestions[i].answers;
//         var rightAnswer = quizQuestions[i].rightAnswer;

//         //display current question from array on page
//         currentQuestion.innerHTML = question;
//         document.getElementById("main").appendChild(currentQuestion);

//         //display current possible answers from array on page
//         optionOne.innerHTML = answers[0];
//         document.getElementById("main").appendChild(optionOne);

//         optionTwo.innerHTML = answers[1];
//         document.getElementById("main").appendChild(optionTwo);

//         optionThree.innerHTML = answers[2];
//         document.getElementById("main").appendChild(optionThree);

//         optionFour.innerHTML = answers[3];
//         document.getElementById("main").appendChild(optionFour);
//     }
// };