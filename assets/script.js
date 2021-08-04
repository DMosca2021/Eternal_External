// pseudo-code and experiments 

console.log("-----------")
console.log("Advice slip API")

fetch("https://api.adviceslip.com/advice/search/advice")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})


// for the quiz start off with 5 questions/scenarioes relating to the advice slips. 
// Ex: Someone you love is about to quit something that brings them joy. What would you tell them?
// Check one box that represents the answer, answers will be listed from adivce slip query.
    // use a form for the answers and have a sumbit/next button to save choice & move to next Q
// Ex: of advice slip as option to choose. {search fail}: Ex. id#184 "You can fail at what you don't want. So you might as well take a chance on doing what you love."
// Have minimum 4 choices for each question.
    // quiz html will need a container for the quiz to display in, 2 divs- 1 for the question, 1 for answer. 
        // at the end of quiz display all chosen answers and give option to restart quiz to change answers.
        // display message alerting user that their loved ones will now have access to their advice.
    
let questionDisplay = document.querySelector(".question-display")
let advice1 = document.querySelector("#choice1")
let advice2 = document.querySelector("#choice2")
let advice3 = document.querySelector("#choice3")
let advice4 = document.querySelector("#choice4")

function renderQuiz() {
    fetch("https://api.adviceslip.com/advice/search/fail")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.slips[1].advice);
        advice1.innerHTML = data.slips[1].advice


        // for (let index = 0; index < adviceChoices.length; index++) {
        //     console.log(data.slips.id);
        //     adviceChoices[index].innerHTML = JSON.stringify(data.slips[1])
        // }
    })

    fetch("https://api.adviceslip.com/advice/search/wonder")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.slips[2].advice);
        advice2.innerHTML = data.slips[2].advice

    })

    fetch("https://api.adviceslip.com/advice/search/wonder")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.slips[0].advice);
        advice3.innerHTML = data.slips[0].advice

    })


    

}

renderQuiz();