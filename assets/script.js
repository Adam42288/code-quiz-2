const btn = document.getElementById('startbutton');
// initial variables declared.
const quizHeading = document.getElementById('quiz-heading');
const startscreen = document.getElementById('startscreen');


btn.addEventListener('click',() => {
// hide button and initial screen when clicking start button.
btn.style.display = 'none';
quizHeading.style.display = 'none';
startscreen.style.display = 'none';
});


var myQuestions = [
    {
        question: "Commonly used data types DO Not Include: ",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: "The condition in an if / else statement is enclosed with: ",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'
        },
        correctAnswer: 'c'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'for loops',
            d: 'console.log'
        },
        correctAnswer: 'd'
    }
];