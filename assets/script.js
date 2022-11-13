// initial variables declared.
const btn = document.getElementById('startbutton');
const quizHeading = document.getElementById('quiz-heading');
const startscreen = document.getElementById('startscreen');
const timer = document.getElementById('timer');

btn.addEventListener('click',() => {
// hide button and initial screen when clicking start button.
btn.style.display = 'none';
quizHeading.style.display = 'none';
startscreen.style.display = 'none';


var count = 75;

var interval = setInterval(function(){
document.getElementById('timer').innerHTML='Time: ' + count;
count--;
if (count === -1){
clearInterval(interval);
document.getElementById('timer').innerHTML="Game over, you're out of time!";
document.getElementById('quiz').innerHTML ='';
// or...
alert("You're out of time!");
// showResults(questions, quizContainer, resultsContainer);
                }
                    }, 1000);
                    submitButton.onclick = function() {
                        document.getElementById('timer').innerHTML='';
                        clearInterval(interval);
                        document.getElementById('startscreen').innerHTML='All done! answers correct:' + numCorrect;
                        document.getElementById('quiz').innerHTML ='';
                    }       
                    }

);





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