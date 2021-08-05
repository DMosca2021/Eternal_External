// pseudo-code and experiments 

// console.log("-----------")
// console.log("Advice slip API")

// fetch("https://api.adviceslip.com/advice/search/advice")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })


// for the quiz start off with 5 questions/scenarioes relating to the advice slips. 
// Ex: Someone you love is about to quit something that brings them joy. What would you tell them?
// Check one box that represents the answer, answers will be listed from adivce slip query.
    // use a form for the answers and have a sumbit/next button to save choice & move to next Q
// Ex: of advice slip as option to choose. {search fail}: Ex. id#184 "You can fail at what you don't want. So you might as well take a chance on doing what you love."
// Have minimum 4 choices for each question.
    // quiz html will need a container for the quiz to display in, 2 divs- 1 for the question, 1 for answer. 
        // at the end of quiz display all chosen answers and give option to restart quiz to change answers.
        // display message alerting user that their loved ones will now have access to their advice.

// const question = ["Someone you love is about to quit something that brings them joy. What would you tell them?", "Q2", "Q3", "Q4", "Q5"];
let questionDisplay1 = document.querySelector(".question-display1");
let questionDisplay2 = document.querySelector(".question-display2");
let questionDisplay3 = document.querySelector(".question-display3");
let questionDisplay4 = document.querySelector(".question-display4");
let questionDisplay5 = document.querySelector(".question-display5");
let shownQuestion = document.querySelector(".question")
let advice1 = document.querySelector("#choice1");
let advice2 = document.querySelector("#choice2");
let advice3 = document.querySelector("#choice3");
let advice4 = document.querySelector("#choice4");
let startBtn = document.querySelector(".start-quiz")


// questionDisplay1.setAttribute("style", "visibility: hidden");
// questionDisplay2.setAttribute("style", "visibility: hidden");
// questionDisplay3.setAttribute("style", "visibility: hidden");
// questionDisplay4.setAttribute("style", "visibility: hidden");
// questionDisplay5.setAttribute("style", "visibility: hidden");

startBtn.addEventListener("click", function(){
    startQuiz();
})

function startQuiz() {
    // questionDisplay.setAttribute("style", "visibility: visible");
    renderQuestion()
}


function renderQuestion() {


    fetch("https://api.adviceslip.com/advice/search/a")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // console logs to get the advice slips from API, advice to be used as answers for the questions 
        console.log(data);
        console.log(data.slips[166].advice);
        console.log(data.slips[161].advice);
        console.log(data.slips[42].advice);
        console.log(data.slips[48].advice);
        console.log("-------------")
        console.log(data.slips[65].advice)
        console.log(data.slips[77].advice)
        console.log(data.slips[82].advice)
        console.log(data.slips[52].advice)
        console.log("-------------")
        console.log(data.slips[90].advice)
        console.log(data.slips[98].advice)
        console.log(data.slips[100].advice)
        console.log(data.slips[110].advice)
        console.log("-------------")
        console.log(data.slips[124].advice)
        console.log(data.slips[143].advice)
        console.log(data.slips[39].advice)
        console.log(data.slips[101].advice)
        console.log("-------------")
        console.log(data.slips[112].advice)
        console.log(data.slips[114].advice)
        console.log(data.slips[128].advice)
        console.log(data.slips[59].advice)

        advice1.innerHTML = data.slips[166].advice
        advice2.innerHTML = data.slips[161].advice
        advice3.innerHTML = data.slips[42].advice
        advice4.innerHTML = data.slips[48].advice
    })

}