// Building the DOM

// Main variables that will contain the program
const timeClock = document.querySelector(".countdown"); // Timer 
const quiz = document.getElementById('quiz'); // Quiz Card
const submit = document.getElementById('submit'); // Submit Card
const results = document.getElementById('results'); // Results Card

// Main Content
const h1Title = document.createElement("h1");
h1Title.setAttribute("class", "title ask-question")
h1Title.textContent = `JavaScript Quiz`;

const para = document.createElement("p");
para.setAttribute("class", "rules seek-answer");
para.textContent = `Welcome to the JS Coding Quiz! 
Click 'Start Quiz' to get started. This timed quiz will provide 
ten questions each with a score of ten points. Take heed, for every 
wrong answer, 10 seconds will be subtracted from the clock. Good Luck!`

const btn = document.createElement("button");
btn.setAttribute("id", "btn answer-buttons")
btn.textContent = `START QUIZ`;

quiz.appendChild(h1Title);
quiz.appendChild(para);
quiz.appendChild(btn);


// Quiz Items
let quizItems = [
    {
        // See README for cited sources
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "How do you create an expressive function?",
        choices: ["var varName = function myFunc()", "function = myFunc()", "function:myFunc()", "function myFunc()"],
        answer: "var varName = function myFunc()"
    },
    {
        question: "Which of these statements are truthy?",
        choices: ["if (varName === true) {return true;}", "if (!varName == false) {return false;}", "if (varName == true) {return false;}", "if (varName) {return true;}"],
        answer: "if (varName) {return true;}"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = 'red', 'green', 'blue'", "var colors('red', 'green', 'blue')", "var colors = ['red', 'green', 'blue']", "var colors = rgb()"],
        answer: "var colors = ['red', 'green', 'blue']"    
    },
    {
        question: "Which one of thses is more than just a mathmatic operator?",
        choices: ["+", "=", "%", "*"],
        answer: "="
    },
];

// Tracking Variables
let score = 0;
let seconds = 20;
let timer = 0;
let qIndex = 0;


// Start Timer countdown.
function startTimer() {
    if (timer === 0) {
        timer = setInterval(function() {
            seconds--;
            timeClock.textContent = `Timer: ${seconds}`;

            if (seconds <= 0) {
                clearInterval(timer);
                // gameOver();
                timeClock.textContent = "GAME OVER";
            }
        }, 1000);
    }
    startQuiz();
}

function startQuiz() {

}


// Executable Functions





