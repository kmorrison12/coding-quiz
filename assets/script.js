var questionBox = document.querySelector(".questions")
var answersEl = document.querySelector(".answers")
var resultEl = document.querySelector(".result")
var timerEl = document.getElementById("countdown")
var startBtnEl = document.querySelector(".start")
var quizDetails = document.querySelector(".quiz-details")
var mainEl = document.querySelector(".container")
var quizTitle = document.querySelector(".quiz-title")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

// var to keep track of state of quiz
var questionIndex = 0
var choicesIndex = 0
var reduceTimer = 5

console.log(quizDetails)

function startQuiz() {
    quizDetails.innerHTML = "";
    quizTitle.innerHTML = "";
    startBtnEl.setAttribute("style", "display: none")
    answer1.setAttribute("style", "display: block")
    answer2.setAttribute("style", "display: block")
    answer3.setAttribute("style", "display: block")
    answer4.setAttribute("style", "display: block")
    timerCountdown();
    getQuestions();
}

startBtnEl.addEventListener("click", startQuiz);

//Add timer that starts on click of Start Quiz button
function timerCountdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timerEl.textContent = timeLeft + " seconds remaining";
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
        //Reduce timer by 5 secs if user answers question wrong
        }
    }, 1000);
}


//object with all questions and answer choices
var questions = [ 
{
question: "Which of the following is the correct HTML element for the largest heading?",
choices: [
    {
        text: "<head>",
        isCorrect: false,
    },

    {
        text: "<heading>",
        isCorrect: false,
    },

    {
        text: "<h1>",
        isCorrect: true,
    },

    {
        text: "<h6>",
        isCorrect: false,
    },
],
},

{
question: "which character indicates an end tag?",
choices: [
    {
        text: "<",
        isCorrect: false,
    },

    {
        text: "*",
        isCorrect: false,
    },

    {
        text: ";",
        isCorrect: false,
    },

    {
        text: "/",
        isCorrect: true,
    },
],
},

{
question: "__________ elements are normally displayed without starting a new line?",
choices: [
    {
        text: "inline",
        isCorrect: true,
    },

    {
        text: "block",
        isCorrect: false,
    },

    {
        text: "wrap",
        isCorrect: false,
    },

    {
        text: "row",
        isCorrect: false,
    },
],
},

{
question: "Where in the HTMl document is the correct place to refer to an external style sheet?",
choices: [
    {
        text: "At the end of the document",
        isCorrect: false,
    },

    {
        text: "In the <body>",
        isCorrect: false,
    },

    {
        text: "In the <head>",
        isCorrect: true,
    },

    {
        text: "with the doc type",
        isCorrect: false,
    },
],
},

{
question: "Which is correct CSS syntax?",
choices: [
    {
        text: "body {color: black};",
        isCorrect: true,
    },

    {
        text: "{body;color:black}",
        isCorrect: false,
    },

    {
        text: "{body-color: black};",
        isCorrect: true,
    },

    {
        text: "body:color=black",
        isCorrect: false,
    },
],
},

{
question: "How do you select elements with the id name 'test'?",
choices: [
    {
        text: ".test",
        isCorrect: true,
    },

    {
        text: ":test",
        isCorrect: false,
    },

    {
        text: "/test",
        isCorrect: false,
    },

    {
        text: "#test",
        isCorrect: false,
    },
],
},

{
question: "What is the correct way to write an array in JavaScript?",
choices: [
    {
        text: "var colors = 'red', 'green', 'blue'",
        isCorrect: false,
    },

    {
        text: "var colors = ['red', 'green', 'blue']",
        isCorrect: true,
    },

    {
        text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        isCorrect: false,
    },

    {
        text: "var colors = 0('red'), 1('green'), 2('blue')",
        isCorrect: false,
    },
],
},

{
question: "What operator is used to assign value to a variable?",
choices: [
    {
        text: "-",
        isCorrect: false,
    },

    {
        text: ":",
        isCorrect: false,
    },

    {
        text: "/",
        isCorrect: false,
    },

    {
        text: "=",
        isCorrect: true,
    },
],
},

]

function getQuestions() {
    //display question in container
    console.log(questions[questionIndex]);
    console.log(questions[questionIndex].question);

    // elements for each question
    var questionEl = document.createElement("h2");

    // values from object to put in each element
    var questionText = questions[questionIndex].question

    // inject value from object into element
    questionEl.innerText = questionText 
    console.log(questionEl)

    // inject element into DOM
    questionBox.appendChild(questionEl)

    console.log(questions[choicesIndex].choices)

    var answersText = ""

    for (var i = 0; i < 4; i++) {   
        answersEl.innerText = answersText
        questionBox.appendChild(answersEl)

        answer1.textContent = questions[choicesIndex].choices[0].text
        answer2.textContent = questions[choicesIndex].choices[1].text
        answer3.textContent = questions[choicesIndex].choices[2].text
        answer4.textContent = questions[choicesIndex].choices[3].text

        console.log("question text", questions[choicesIndex].choices[i].text)
    }
}

function results() {
    if (questions[choicesIndex].choices.isCorrect === true) {
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = "Wrong";
    }
    questionBox.appendChild(answersEl)
}
