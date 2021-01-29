// Quiz questions
var questions = [
    {
    question: "Who killed Mufasa? ",
    options: ["Rafiki", "Scar", "Zazu ", "The Hyenas",],
    answer: "Scar"
    },
    {
    question: "Who killed Scar? ",
    options: ["Mufasa", "Simba", "The Hyenas", "Zazu ",],
    answer: "The Hyenas"
    },
    {
    question: "What was Simba's mom's name? ",
    options: ["Sarabi ", "Nala", "Belle ", "Zaire ",],
    answer: "Sarabi"
    },
    {
    question: "What actor/actress voice the lead hyena? ",
    options: ["Jim Carrey ", "Robin Williams ", "Will Smith ", "Whoopi Goldberg ",],
    answer: "Whoopi Goldberg"
    },
    {
    question: "What were Simba's two male sidekicks (of different species)? ",
    options: ["Pumba & Timon ", "Bear & Malone ", "Pumba & Timon ", "Zazu & Rafiki",],
    answer: "Pumba & Timon"
    }
    ]


// var index = 0

// // object variables below
// var score = 0;
// var currentQuestion = -1;
// var timeLeft = 0;
// var timer;


let score = Math.floor(Math.random() * 100);
// start timer
function start() {
    var time = 75;
    let timeLeft = 0;
    console.log(time);

    console.log(timeLeft)
   

    timerClock = setInterval(function() {
       document.querySelector('.time-left').innerHTML = time;
        time--;
         if (time <= -1) {
            clearInterval(timerClock);
            endGame(); 
        }
    }, 1000);
    
}

console.log(start());

// end timer
function endGame() {
    clearInterval(timerClock);
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ${score} /100!</h3>
    <h3>That means you got  + ${score / 100} +   questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>
    `
    document.getElementById("quiz-two").innerHTML = quizContent;
}

// set score
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}
// get score

function getScore() {
    var quizDontent = `
    <h2>  ${localStorage.getItem("highscoreName")}  highscore is:</h2>    
    <h1>  ${localStorage.getItem("highscore")}   </h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    `;
    document.getElementById("quiz-two").innerHTML = quizDontent;
}
// Clear score
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");
    resetGame();
}

// Reset Game

function resetGame() {
    clearInterval(timerClock);
    let score = 0;
    let currentQuestion = -1;
    let timeLeft = 0;
    let timer = null;
    document.querySelector(".time-left").innerHTML = timeLeft;
    var quizContent = `
    <h1>
        Lion King Quiz!
    </h1>
    <h3>
        Play Now!   
    </h3>
    <button onclick="start()">Start!</button>`;
    document.getElementById("quiz-two").innerHTML = quizContent;
}

// 15 sec deduction
function incorrect() {
   let timeLeft = 15; 
    next();
}

// 20 sec increase
function correct() {
    score += 20;
    next();
}

console.log(incorrect());

//  Loop questions
function next() {
    for(let i = 0)
    currentQuestion++;
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }
}