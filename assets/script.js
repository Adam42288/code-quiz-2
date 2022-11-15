// initial variables declared.
const btn = document.getElementById('startbutton');
const quizHeading = document.getElementById('quiz-heading');
const startscreen = document.getElementById('startscreen');
var answerStatus = document.getElementById('answerStatus');
const gameover = document.getElementById('gameover');
const gameoverscreen = document.getElementById('gameoverscreen');
var result = document.getElementById("result");
var timer = document.getElementById('timer');
var score = 0;
var count = 75;
var id = 0;
// Getting the question
const question = document.getElementById("question");

// Getting the answers
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');




btn.addEventListener('click',() => {
// hide button and initial screen when clicking start button.
btn.style.display = 'none';
quizHeading.style.display = 'none';
startscreen.style.display = 'none';
document.getElementById("panel").style.display = "flex";
iterate();
var interval = setInterval(function(){
    document.getElementById('timer').innerHTML='Time: ' + count;
    count--;
    if (count <= 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML="All done! Your final score is " + score;
    document.getElementById('panel').style.display = "none";
    // or...
    // alert("You're out of time!");
                    }

                        }, 1000);
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
    a: [{ text: "quotes", isCorrect: false },
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
},
{
    id:5
}

]

// Function to show the results screen once all questions have been asked.
function gameoverman() {
    if (id === 5){ 
    timer.style.display = "none";
    document.getElementById('panel').style.display = "none";
    gameoverscreen.style.display = "flex";
    console.log('you made it to ID 5');
    gameover.innerHTML="All done! Your final score is " + score + "."; 
}
}
// Iterate
function iterate() {

// Getting the result display section



// Setting the question text
question.innerText = Questions[id].q;


// Providing answer text
if (id <= 4) {
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the answers
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
}
var selected = "";
console.log(op1, op2, op3, op4);
}

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
    if (op1.value === "true") {
        result.innerHTML = "True";
        result.style.color = "green";
        console.log('correct');
        score = score +10;
    } else {
        result.innerHTML = "Incorrect, 10 seconds off the clock!";
        result.style.color = "red";
        console.log('incorrect');
        count = count - 10;
    }

if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
    gameoverman();
} else {
        timer.style.display = "none";
        document.getElementById('panel').style.display = "none";
        gameoverscreen.style.display = "flex";
        console.log('you made it to ID 5');
        gameover.innerHTML="All done! Your final score is " + score + "."; 
}
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
    if (op2.value === "true") {
        result.innerHTML = "True";
        result.style.color = "green";
        console.log('correct');
        score = score +10;
    } else {
        result.innerHTML = "Incorrect, 10 seconds off the clock!";
        result.style.color = "red";
        console.log('incorrect');
        count = count - 10;
    }
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}
else {
    timer.style.display = "none";
    document.getElementById('panel').style.display = "none";
    gameoverscreen.style.display = "flex";
    console.log('you made it to ID 5');
    gameover.innerHTML="All done! Your final score is " + score + "."; 
}
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
    console.log(op3.value);
    if (op3.value === "true") {
        result.innerHTML = "True";
        result.style.color = "green";
        console.log('correct');
        score = score +10;
    } else {
        result.innerHTML = "Incorrect, 10 seconds off the clock!";
        result.style.color = "red";
        console.log('incorrect');
        count = count - 10;
    }

if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}
else {
    timer.style.display = "none";
    document.getElementById('panel').style.display = "none";
    gameoverscreen.style.display = "flex";
    console.log('you made it to ID 5');
    gameover.innerHTML="All done! Your final score is " + score + "."; 
}
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
    if (op4.value === "true") {
        result.innerHTML = "True";
        result.style.color = "green";
        console.log('correct');
        score = score +10;
    } else {
        result.innerHTML = "Incorrect, 10 seconds off the clock!";
        result.style.color = "red";
        console.log('incorrect');
        count = count - 10;
    }
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);

}
else {
    timer.style.display = "none";
    document.getElementById('panel').style.display = "none";
    console.log()
    gameoverscreen.style.display = "flex";
    console.log('you made it to ID 5');
    gameover.innerHTML="All done! Your final score is " + score + "."; 
}
})

