var container = document.querySelector("#container")
var questions = document.querySelector("#questions")
var options = document.querySelector("#options")
var opt1 = document.querySelector("#opt1")
var opt2 = document.querySelector("#opt2")
var opt3 = document.querySelector("#opt3")
var opt4 = document.querySelector("#opt4")
var score = document.querySelector("#score")
var start = document.querySelector("#start")
var next = document.querySelector("#next")

var index = 0
var questionsList = [
    {
        question:"Who killed Mufasa? ",
        opt1: "Rafiki",
        opt2: "Scar",
        opt3: "Zazu ",
        opt4: "The Hyenas",
        answer: "Scar"
    }
    {
        question: "Who killed Scar? "
        opt1: "Mufasa",
        opt2: "Simba",
        opt3: "The Hyenas",
        opt4: "Zazu ",
        answer: "The Hyenas"
    }
    {
        question: "What was Simba's mom's name? "
        opt1: "Sarabi ",
        opt2: "Nala",
        opt3: "Belle ",
        opt4: "Zaire ",
        answer: "Sarabi"
    }
    {
        question: "What actor/actress voice the lead hyena? "
        opt1: "Jim Carrey ",
        opt2: "Robin Williams ",
        opt3: "Will Smith ",
        opt4: "Whoopi Goldberg ",
        answer: "Whoopi Goldberg"
    }
    {
        question: "What were Simba's two male sidekicks (of different species)? "
        opt1:
        opt2: "Bear & Malone ",
        opt3: "Pumba & Timon ",
        opt4: "Zazu & Rafiki",
        answer: "Pumba & Timon"
    }
]