// Building the DOM

// Main variables that will contain the program
const intro = document.getElementById("intro") // Card One
const quiz = document.getElementById('quiz'); // Card Two
const submit = document.getElementById('submit'); // Card Three
const results = document.getElementById('results'); //Card Four

// Intro Card
const header = document.createElement("h1");
header.textContent = `JavaScript Quiz`;

const introPara = document.createElement("p");
introPara.setAttribute("class", "rules");
introPara.textContent = `Welcome to the JS Coding Quiz! 
Click 'Start Quiz' to get started. This timed quiz will provide 
ten questions each with a score of ten points. Take heed, for every 
wrong answer, 10 seconds will be subtracted from the clock. Good Luck!`

const startBtn = document.createElement("button");
startBtn.setAttribute("id", "startBtn")
startBtn.textContent = `START QUIZ`;

intro.appendChild(header);
intro.appendChild(introPara);
intro.appendChild(startBtn);


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


// Declared Global Variables



// Functions



// Executable Functions





