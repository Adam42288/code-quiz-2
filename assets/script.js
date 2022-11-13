// initial variables declared.
const btn = document.getElementById('startbutton');
const quizHeading = document.getElementById('quiz-heading');
const startscreen = document.getElementById('startscreen');
const timer = document.getElementById('timer');
var score = 0;

btn.addEventListener('click',() => {
// hide button and initial screen when clicking start button.
btn.style.display = 'none';
quizHeading.style.display = 'none';
startscreen.style.display = 'none';
document.getElementById("panel").style.display = "flex";
var count = 3;
var interval = setInterval(function(){
    document.getElementById('timer').innerHTML='Time: ' + count;
    count--;
    if (count === -1){
    clearInterval(interval);
    document.getElementById('timer').innerHTML="All done! Your final score is " + score;
    document.getElementById('panel').style.display = "none";
    // or...
    alert("You're out of time!");
                    }
                        }, 1000);
                        submitButton.onclick = function() {
                            document.getElementById('timer').innerHTML='';
                            clearInterval(interval);
                            document.getElementById('startscreen').innerHTML='All done! answers correct:' + numCorrect;
                            document.getElementById('quiz').innerHTML ='';
                        } 
}
)



// Questions will be asked

const Questions = [{
    id: 0,
    q: "Commonly used data types DO Not Include: ",
    a: [{ text: "strings", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "alerts", isCorrect: true },
        { text: "numbers", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The condition in an if / else statement is enclosed with: ",
    a: [{ text: "quotes", isCorrect: false, isSelected: false },
        { text: "curly brackets", isCorrect: false },
        { text: "parenthesis", isCorrect: true },
        { text: "square brackets", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Arrays in JavaScript can be used to store: ",
    a: [{ text: "numbers and strings", isCorrect: false },
        { text: "other arrays", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "all of the above", isCorrect: true }
    ]
},
{
    id: 3,
    q: "String values must be enclosed within ____ when being assigned to variables.",
    a: [{ text: "commas", isCorrect: false },
        { text: "curly brackets", isCorrect: false },
        { text: "quotes", isCorrect: true },
        { text: "parenthesis", isCorrect: false }
    ]
},
{
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a: [{ text: "JavaScript", isCorrect: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for loops", isCorrect: false },
        { text: "console.log", isCorrect: true }
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the answers
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing answer text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the answers
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
        score = score +10;
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})
