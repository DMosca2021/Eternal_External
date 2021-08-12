// Items left to complete:
    // Change alerts to modals.
        //At end of quiz display modal alerting user that their loved ones will now have access to their advice.
    
// Bonus Items(future development):
    // After quiz ends and hides, show a list of the chosen answers 
    // Possibly add a next button instead of using the save button to change questions. 
    // Create a text input to display on graph page for user2 to "respond" to user1's input.

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
let modal1 = document.querySelector("#modal1")
let modal2 = document.querySelector("#modal2")
let startBtn = document.querySelector(".start-quiz");
let submitBtn = document.querySelector("#submit-choice");
let user2Btn = document.querySelector("#user2Btn");
let user2NameDisplay =document.querySelector("#user2-name-display");
let questionIndex = 0;
let choiceHist = JSON.parse(localStorage.getItem("userChoice")) || [];

questionDisplay.setAttribute("style", "visibility: hidden");

// Starts quiz, shows questions, start quiz button disabled to prevent clicking during quiz.
function startQuiz() {
    questionDisplay.setAttribute("style", "visibility: visible");
    startBtn.disabled = true;
    submitBtn.disabled = false;
    renderQuiz();
};
// Ends quiz, hides questions, sends an alert(modal), disables the submit button/enables start quiz button
function endQuiz(){
    questionDisplay.setAttribute("style", "visibility: hidden");
    // alert("Quiz complete!"); // <----- CHANGE TO A MODAL!!!!
    startBtn.disabled = false;
    submitBtn.disabled = true;
}

// Fetches data from advice slip API, creates questions with associated answers. 
function renderQuiz() {
    function fetchData () {
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
            let availableQuestions = [...questionsArray];

            // Shows the current question and its associated answers
            function renderQuestions() {
                let currentQuestion = availableQuestions[questionIndex];
                if (questionIndex >= availableQuestions.length - 1) {
                    return;
                }
                shownQuestion.innerHTML = currentQuestion.question;
                currentQuestion.choices.forEach(element => {
                    let answerIndex = currentQuestion.choices;
                    advice1.innerHTML = answerIndex[0]
                    advice2.innerHTML = answerIndex[1]
                    advice3.innerHTML = answerIndex[2]
                    advice4.innerHTML = answerIndex[3]
                });
            }
            renderQuestions();
        
            // Submit button to save user choices to local storage, changes question and renders next question.
            submitBtn.addEventListener("click", function(event){
                event.preventDefault();
                isChecked();
                storeChoice();
                nextQuestion();
                renderQuestions();
            })
        });
    };
    fetchData();
};
// Function to display the next question, once end of question array is reached quiz is ended.
function nextQuestion() {
    if (checkBox1.checked == true || checkBox2.checked == true || checkBox3.checked == true || checkBox4.checked == true) {
        questionIndex++;
        if (questionIndex >= 5){
            endQuiz();
        }
        checkBox1.checked = false;
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
        checkBox1.disabled = false;
        checkBox2.disabled = false;
        checkBox3.disabled = false;
        checkBox4.disabled = false;
    }
};

// Function to check if checkboxes are checked, disables non chosen boxes to prevent multiple choices. Alerts to choose a box if none chosen.
function isChecked() {
     if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false) {
        // alert("Choose an advice slip"); // <----- CHANGE TO A MODAL!!!!
        // $(document).ready(function(){
        //     $('.modal').modal();
        //   });
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
};
// Function to store chosen check box's advice slip. All are added to the choiceHist array for future use. 
function storeChoice() {
    let userChoice = advice1;
    let userChoice2 = advice2;
    let userChoice3 = advice3;
    let userChoice4 = advice4;
    if (checkBox1.checked == true) {
        choiceHist.push(userChoice.innerHTML);  
        localStorage.setItem("userChoice", JSON.stringify(choiceHist));
    } else if (checkBox2.checked == true) { 
        choiceHist.push(userChoice2.innerHTML);
        localStorage.setItem("userChoice", JSON.stringify(choiceHist));
    } else if (checkBox3.checked == true) {
        choiceHist.push(userChoice3.innerHTML);
        localStorage.setItem("userChoice", JSON.stringify(choiceHist));
    } else if (checkBox4.checked == true) {
        choiceHist.push(userChoice4.innerHTML);
        localStorage.setItem("userChoice", JSON.stringify(choiceHist));
    };
};

// Start button
startBtn.addEventListener("click", function(event){
    event.preventDefault();
    startQuiz();
});

// Submit name button, displays input 
user2Btn.addEventListener('click', function(event) {
    event.preventDefault();
    var user2Input = document.querySelector('#userinput2').value;
    localStorage.setItem("name",JSON.stringify(user2Input));
    document.querySelector('#userinput2').value = "";
    user2NameDisplay.innerHTML = user2Input
});

// Hamburger menu
$(document).ready(function(){
    $('.sidenav').sidenav();
});
