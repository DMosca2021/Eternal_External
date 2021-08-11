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
        // console logs to get the advice slips from API, advice to be used as answers for the questions 
        // console.log(data);
        // console.log(data.slips[166].advice);
        // console.log(data.slips[161].advice);
        // console.log(data.slips[42].advice);
        // console.log(data.slips[48].advice);
        // console.log("-------------")
        // console.log(data.slips[65].advice)
        // console.log(data.slips[77].advice)
        // console.log(data.slips[82].advice)
        // console.log(data.slips[52].advice)
        // console.log("-------------")
        // console.log(data.slips[90].advice)
        // console.log(data.slips[98].advice)
        // console.log(data.slips[100].advice)
        // console.log(data.slips[110].advice)
        // console.log("-------------")
        // console.log(data.slips[124].advice)
        // console.log(data.slips[143].advice)
        // console.log(data.slips[39].advice)
        // console.log(data.slips[101].advice)
        // console.log("-------------")
        // console.log(data.slips[112].advice)
        // console.log(data.slips[114].advice)
        // console.log(data.slips[128].advice)
        // console.log(data.slips[59].advice)


// Ex: Someone you love is about to quit something that brings them joy. What would you tell them?
// Check one box that represents the answer, answers will be listed from adivce slip query.
    // use a form for the answers and have a sumbit/next button to save choice & move to next Q
// Ex: of advice slip as option to choose. {search fail}: Ex. id#184 "You can fail at what you don't want. So you might as well take a chance on doing what you love."
// Have minimum 4 choices for each question.
    // quiz html will need a container for the quiz to display in, 2 divs- 1 for the question, 1 for answer. 
        // at the end of quiz display all chosen answers and give option to restart quiz to change answers.
        // display message alerting user that their loved ones will now have access to their advice.

let questionDisplay = document.querySelector(".question-display");
let shownQuestion = document.querySelector(".question");
let checkBox = document.querySelector("choice-check");
let advice1 = document.querySelector("#choice1");
let advice2 = document.querySelector("#choice2");
let advice3 = document.querySelector("#choice3");
let advice4 = document.querySelector("#choice4");
let startBtn = document.querySelector(".start-quiz");

let choiceHist = JSON.parse(localStorage.getItem("choice")) || [];

questionDisplay.setAttribute("style", "visibility: hidden");


// console.log(checkBox.checked)


function startQuiz() {
    questionDisplay.setAttribute("style", "visibility: visible");
    renderQuiz()
};


function renderQuiz() {

    function renderQuestion () {
        fetch("https://api.adviceslip.com/advice/search/a")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let questionsArray = ["Someone you love is about to quit something that brings them joy. What would you tell them?", "Your loved one is having a hard time at their job and they do not want to continue working at their current job.", "A person close to you is having trouble in their relationship, they asked: How do i ask for what i want?", "Your loved one is in need of a boost of confidence, tell them something to pick them up", "Your loved one has asked, What would you tell me if you were still here today, what is your response?"]
            let quitAdviceArray = [data.slips[166].advice, data.slips[161].advice, data.slips[42].advice, data.slips[48].advice]
            let workAdviceArray = [data.slips[65].advice, data.slips[77].advice, data.slips[82].advice, data.slips[52].advice]
            let loveAdviceArray = [data.slips[90].advice, data.slips[98].advice, data.slips[100].advice, data.slips[110].advice]
            let confidenceAdviceArray = [data.slips[124].advice, data.slips[143].advice, data.slips[39].advice, data.slips[101].advice]
            let randomAdviceArray = [data.slips[112].advice, data.slips[114].advice, data.slips[128].advice, data.slips[59].advice]

            for (let i = 0; i < questionsArray.length; i++) {
                const element = questionsArray[i];
                let currentQuestion = questionsArray[0]
                shownQuestion.innerHTML = currentQuestion
            }

            // advice1.innerHTML = quitAdviceArray[0]
            // advice2.innerHTML = quitAdviceArray[1]
            // advice3.innerHTML = quitAdviceArray[2]
            // advice4.innerHTML = quitAdviceArray[3]
        })

        // function checkAnswer () {
        //     if (checkBox.checked === true) {
        //         event.preventDefaul
        //         // choiceHist.push()
        //         // localStorage.setItem
        //         console.log(checkBox.value)
        //     }
        // }
        // checkAnswer();
    }
    renderQuestion();
    



}

startBtn.addEventListener("click", function(){
    startQuiz();
})

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  //sidenav