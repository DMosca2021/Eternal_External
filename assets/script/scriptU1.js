
const user1Input = document.querySelector("#userinput1");
const submitBtnU1 = document.getElementById("submitBtnU1");
const numberBg = document.getElementById("#main");
const feelingInputForm = document.getElementById("feelingInput");
const feelingBtn = document.querySelector("#feelingBtn");
let emotionsDetected = ""
const modal1 = document.getElementById("modal1");
const advice1 = document.getElementById("advice1");
let getUserChoice = JSON.parse(localStorage.getItem("userChoice"))|| [];
let userNameDisplay =document.querySelector("#user-name-display");

// Making modal variables to get advice from local storage. 
let chosenAdvice1 = document.querySelector("#advice-choice1");
let chosenAdvice2 = document.querySelector("#advice-choice2");
let chosenAdvice3 = document.querySelector("#advice-choice3");
let chosenAdvice4 = document.querySelector("#advice-choice4");
let chosenAdvice5 = document.querySelector("#advice-choice5");



// Function to show the stored advice. We do not need the getStoredAdvice function, put that there for checking if the stored answers are correct.
function getStoredAdvice() {
	console.log(getUserChoice);
	console.log(getUserChoice[0]);
	console.log(getUserChoice[1]);
	console.log(getUserChoice[2]);
	console.log(getUserChoice[3]);
	console.log(getUserChoice[4]);
	function showAdvice() {
		//do these in a for loop instead will check length of the array 
		chosenAdvice1.textContent = getUserChoice[0];
		chosenAdvice2.textContent = getUserChoice[1];
		chosenAdvice3.textContent = getUserChoice[2];
		chosenAdvice4.textContent = getUserChoice[3];
		chosenAdvice5.textContent = getUserChoice[4];
	}
	showAdvice();
}
getStoredAdvice();



function getFeeling () {
console.log(feelingInputForm.value)
	if (feelingInputForm !== null) {
		feelingInput = feelingInputForm.value 
	}
let newFeelingInput = feelingInput.replaceAll(" ", "%20");
console.log(newFeelingInput);
let feelingAPI = "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=" + newFeelingInput
return fetch(feelingAPI, {

	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5b7389e2b1msha3f2a9a2397902ep15e923jsnca14c8f04f77",
		"x-rapidapi-host": "twinword-emotion-analysis-v1.p.rapidapi.com"
	}
})
.then(function(response) {
	return response.json()

})

.then(function(data) {
	console.log(data)
	
return data
	
}

)
//get data out of response
.catch(err => {
	console.error(err);
});

}
	


function feelingFeedback(emotionalData) {
		

		// creates a button for the emotional data from the API 
		emotionalData.emotions_detected.forEach(element => {
			let feelingBtnDiv = document.getElementById("emotional-response-btn");
			let feelingBtnEl = document.createElement("button");
			console.log(element);
			console.log(emotionalData.emotions_detected)

			feelingBtnEl.textContent = element
			
			feelingBtnDiv.append(feelingBtnEl)
			feelingBtnEl.setAttribute("style", "background-color: teal; border-radius:5px; text-transform:uppercase;font-size:3vw;font-weight:bold;")

			feelingBtnEl.addEventListener("click", function name(event) {
				event.preventDefault();
				
				localStorage.setItem("emotion-scores",JSON.stringify(emotionalData.emotion_scores));
				let emotionalDataReturn = localStorage.setItem("emotion-detect",JSON.stringify(emotionalData.emotions_detected));
				console.log(emotionalDataReturn)
				location.href = "graph.html"

		
				
			}) 
			//open page to chart 
		
			
		});  
	
		}

function emotionScores(data) {

	data.emotion_scores.forEach(element => {
		localStorage.setItem("name",JSON.stringify(element));	
	});

	
}

//adding another .then to pull data into this function 
feelingBtn.addEventListener('click', function(event) {
	event.preventDefault()
	
	getFeeling() 
	.then(function(data) {
		console.log(data)
		feelingFeedback(data)
			
} )} )

//materialize modal 
$(document).ready(function(){
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();
 });



 $(document).ready(function(){
    $('.modal').modal();
  });


//stores username into local storage 
submitBtnU1.addEventListener('click', function(event) {
	event.preventDefault()
    let user1Input = document.querySelector('#userinput1').value;
    localStorage.setItem("name",JSON.stringify(user1Input));
    document.querySelector('#userinput1').value = "";
	userNameDisplay.innerHTML = user1Input
});

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  // sidenav