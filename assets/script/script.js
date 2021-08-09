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

        // let questionsArray = ["Someone you love is about to quit something that brings them joy. What would you tell them?", "Your loved one is having a hard time at their job and they do not want to continue working at their current job.", "A person close to you is having trouble in their relationship, they asked: How do i ask for what i want?", "Your loved one is in need of a boost of confidence, tell them something to pick them up", "Your loved one has asked, What would you tell me if you were still here today, what is your response?"]
        // let quitAdviceArray = [data.slips[166].advice, data.slips[161].advice, data.slips[42].advice, data.slips[48].advice]
        // let workAdviceArray = [data.slips[65].advice, data.slips[77].advice, data.slips[82].advice, data.slips[52].advice]
        // let loveAdviceArray = [data.slips[90].advice, data.slips[98].advice, data.slips[100].advice, data.slips[110].advice]
        // let confidenceAdviceArray = [data.slips[124].advice, data.slips[143].advice, data.slips[39].advice, data.slips[101].advice]
        // let randomAdviceArray = [data.slips[112].advice, data.slips[114].advice, data.slips[128].advice, data.slips[59].advice]

// Check one box that represents the answer, answers will be listed from adivce slip query.
    // use a form for the answers and have a sumbit/next button to save choice & move to next Q
// Ex: of advice slip as option to choose. {search fail} 
        // at the end of quiz display all chosen answers and give option to restart quiz to change answers.
        // display message alerting user that their loved ones will now have access to their advice.

let questionDisplay = document.querySelector(".question-display");
let shownQuestion = document.querySelector(".question");
let advice1 = document.querySelector("#choice-text1");
let advice2 = document.querySelector("#choice-text2");
let advice3 = document.querySelector("#choice-text3");
let advice4 = document.querySelector("#choice-text4");

let checkBox1 = document.querySelector("#choice1");
let checkBox2 = document.querySelector("#choice2");
let checkBox3 = document.querySelector("#choice3");
let checkBox4 = document.querySelector("#choice4");

let startBtn = document.querySelector(".start-quiz");
let submitBtn = document.querySelector("#submit");
let questionIndex = 0
let choiceHist = JSON.parse(localStorage.getItem("userChoice")) || [];

questionDisplay.setAttribute("style", "visibility: hidden");

function startQuiz() {
    questionDisplay.setAttribute("style", "visibility: visible");
    renderQuiz()
};


function renderQuiz() {
    function obtainData () {
        fetch("https://api.adviceslip.com/advice/search/a")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let questionsArray = [{
                question: "Someone you love is about to quit something that brings them joy. What would you tell them?",
                choices: [data.slips[166].advice, data.slips[161].advice, data.slips[42].advice, data.slips[48].advice],
                },{
                question: "Your loved one is having a hard time at their job and they do not want to continue working at their current job.",
                choices: [data.slips[65].advice, data.slips[77].advice, data.slips[82].advice, data.slips[52].advice],
                },{
                question: "A person close to you is having trouble in their relationship, they asked: How do i ask for what i want?",
                choices: [data.slips[90].advice, data.slips[98].advice, data.slips[100].advice, data.slips[110].advice],
                },{
                question: "Your loved one is in need of a boost of confidence, tell them something to pick them up",
                choices: [data.slips[124].advice, data.slips[143].advice, data.slips[39].advice, data.slips[101].advice],
                },{
                question: "Your loved one has asked, What would you tell me if you were still here today, what is your response?",
                choices: [data.slips[112].advice, data.slips[114].advice, data.slips[128].advice, data.slips[59].advice],
                }
            ]

            let availableQuestions = [...questionsArray]

            console.log("<---Initial Question index followed by all of the available questions put into an array--->")

            console.log(questionIndex)
            console.log(availableQuestions)

            console.log("<-----Start of renderQuestions Function------>")
            function renderQuestions() {
                let currentQuestion = availableQuestions[questionIndex];
                console.log("<---Shows current question--->")
                console.log(currentQuestion.question);

                shownQuestion.innerHTML = currentQuestion.question;

                currentQuestion.choices.forEach(element => {
                    let answerIndex = currentQuestion.choices;
                    console.log("<---Shows each individual answer--->")
                    console.log(answerIndex[0]);
                    console.log(answerIndex[1]);
                    console.log(answerIndex[2]);
                    console.log(answerIndex[3]);


                    advice1.innerHTML = answerIndex[0]
                    advice2.innerHTML = answerIndex[1]
                    advice3.innerHTML = answerIndex[2]
                    advice4.innerHTML = answerIndex[3]

                });
            }
            renderQuestions();
            console.log("<---End of renderQuestions Function--->")

            submitBtn.addEventListener("click", function(event){
                event.preventDefault();
                storeChoice();
                nextQuestion();
                renderQuestions();
            })

        });
        
    };
    obtainData();
};

function nextQuestion() {
    console.log("<-----Start of nextQuestion Function----->")
    if (checkBox1.checked == true || checkBox2.checked == true || checkBox3.checked == true || checkBox4.checked == true) {
        questionIndex++
        if (questionIndex >= 5){
            alert("Quiz complete!")
            startBtn.disabled = true
            submitBtn.disabled = true
        }
        console.log("<---Shows increase in question index, displays next question and answers--->")
        console.log(questionIndex);
        checkBox1.checked = false
        checkBox2.checked = false
        checkBox3.checked = false
        checkBox4.checked = false
        checkBox1.disabled = false
        checkBox2.disabled = false
        checkBox3.disabled = false
        checkBox4.disabled = false
    }
    console.log("<---End of nextQuestion Function--->")
};


function isChecked() {
    console.log("<-----Start of isChecked Function----->")
    console.log(checkBox1.checked);
    console.log(checkBox2.checked);
    console.log(checkBox3.checked);
    console.log(checkBox4.checked);
    console.log("<--------->")
     if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false) {
        alert("Choose an advice slip")
     } 
     if (checkBox1.checked == true) {
         checkBox2.disabled = true;
         checkBox3.disabled = true;
         checkBox4.disabled = true;
     }
     else {
        checkBox1.disabled = false;
        checkBox2.disabled = false;
        checkBox3.disabled = false;
        checkBox4.disabled = false;
    }
     if (checkBox2.checked == true) {
        checkBox1.disabled = true;
        checkBox3.disabled = true;
        checkBox4.disabled = true;
    }
    if (checkBox3.checked == true) {
        checkBox1.disabled = true;
        checkBox2.disabled = true;
        checkBox4.disabled = true;
    }
    if (checkBox4.checked == true) {
        checkBox1.disabled = true;
        checkBox2.disabled = true;
        checkBox3.disabled = true;
    }
    console.log("<---End of isChecked Function--->")
};

// -------------- Having issues with getting advice to store correctly ---------------
// This is the function to store the users choices. Works for checkBox1 but the others do not work. 
    // When you click on the check box it should store the user choice and the text associated with it, I am grabbing it through the advice1 variable which is tied to the text display for the checkbox. 
        // What actually happens is when you click on checkBox1 for any of the questions, it will store to the local storage correctly. If any other checkbox is clicked, nothing gets added to local storage, used the same code just with appropriate variables to store the choice as I did for checkBox1.

function storeChoice() {
    console.log("<-----Start of storeChoice Function----->")
    let userChoice = advice1;
    let userChoice2 = advice2;
    let userChoice3 = advice3;
    let userChoice4 = advice4;
    if (checkBox1.checked == true) {
        console.log(userChoice.innerHTML); //Shows the answer as a string
        choiceHist.push(userChoice.innerHTML); // Adds to the choiceHist array 
        localStorage.setItem("userChoice", JSON.stringify(choiceHist)) // Stores it locally in the choiceHist array
    } else if (checkBox2.checked == true) {
        console.log(userChoice2.innerHTML); 
        choiceHist.push(userChoice2);
        localStorage.setItem("userChoice2", JSON.stringify(choiceHist))
    } else if (checkBox3.checked == true) {
        console.log(userChoice3.innerHTML);
        choiceHist.push(userChoice3);
        localStorage.setItem("userChoice3", JSON.stringify(choiceHist))
    } else if (checkBox4.checked == true) {
        console.log(userChoice4.innerHTML);
        choiceHist.push(userChoice4);
        localStorage.setItem("userChoice4", JSON.stringify(choiceHist))
    };
    console.log("<---End of storeChoice Function--->")
};
storeChoice();

startBtn.addEventListener("click", function(){
    startQuiz();
});