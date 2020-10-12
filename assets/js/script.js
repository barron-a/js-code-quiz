// establish variables
var startButton = document.getElementById('start-quiz');
var quizQuestions = [
    { 
        question: "Which of the following is used in the script tag to link a JavaScript file to an HTML file?", 
        answers: ["img", "rel", "src", "type"],
        rightAnswer: "1" 
    },
    { 
        question: "__________ are containers that store values", 
        answers: ["objects", "variables", "functions", "for loops"],
        rightAnswer: "2" 
    }
];

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
};

function removeintro() {
    var removeTitle = document.getElementById("title");
    var removeIntroText = document.getElementById("intro-text");
    var removeStartBtn = document.getElementById("start-quiz");
    removeTitle.remove();
    removeIntroText.remove();
    removeStartBtn.remove();
};

function quiz() {
    for (var i = 0; i < quizQuestions.length; i++) {
        var currentQuestion = document.createElement("h2");
        var optionOne = document.createElement("button");
        var optionTwo = document.createElement("button");
        var optionThree = document.createElement("button");
        var optionFour = document.createElement("button");
        var question = quizQuestions[i].question;
        var answers = quizQuestions[i].answers;
        var rightAnswer = quizQuestions[i].rightAnswer;

        //display current question from array on page
        currentQuestion.innerHTML = question;
        document.getElementById("main").appendChild(currentQuestion);

        //display current possible answers from array on page
        optionOne.innerHTML = answers[0];
        document.getElementById("main").appendChild(optionOne);

        optionTwo.innerHTML = answers[1];
        document.getElementById("main").appendChild(optionTwo);

        optionThree.innerHTML = answers[2];
        document.getElementById("main").appendChild(optionThree);

        optionFour.innerHTML = answers[3];
        document.getElementById("main").appendChild(optionFour);
    }
};

startButton.addEventListener("click", quizTimer);
startButton.addEventListener("click", quiz);
startButton.addEventListener("click", removeintro);