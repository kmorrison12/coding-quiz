var questionsEl = document.getElementsByClassName("questions"),
    answersEl = document.getElementsByClassName("answer"),
    resultEl = document.getElementsByClassName("results"),
    timerEl = document.getElementsByID("countdown"),
    startBtnEl = document.getElementsByClassName("start"),
    current = 0,


//Add timer that starts on click of Start Quiz button
function timerCountdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + "second remaining";
            timeLeft--;
        } else {
            //Clear timer and notify user time is up
            timerEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage("Time's up!");
        //Reduce timer by 5 secs if user answers question wrong
        }
    }, 1000);
}

startBtnEl.addEventListener("click", timerCountdown);


//object with all questions and answer choices
// set as array and add a for loop through the questions?
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
        text: "<h6>"
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
        text: "/"
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
        text: "row"
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
        text: "with the doc type"
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
        text: "body:color=black"
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
        text: "#test"
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
        text: "var colors = 0('red'), 1('green'), 2('blue')"
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
        text: "="
        isCorrect: true,
    },
],
},

]

function getQuestions() {
//display question results
if (isCorrect=== true) {
    resultEl.textContent = "Correct!"
} else {
    resultEl.textContent = "Wrong"
}
}


// WHEN the game is over
// THEN I can save my initials and score

