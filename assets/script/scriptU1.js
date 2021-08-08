
const user1Input = document.querySelector("#userinput1");
const numberBg = document.getElementById("#main")
const feelingInputForm = document.getElementById("feelingInput");
const feelingBtn = document.querySelector("#feelingBtn")
var emotionsDetected = ""



form.addEventListener('submit', function(event) {
    event.preventDefault();
    var user1Input = document.querySelector('#userinput1').value;
    console.log("user1Input " + user1Input)
    
        localStorage.setItem("name",JSON.stringify(user1Input));
        document.querySelector('#userinput1').value = "";
    }
);

// "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for."

//instead of spaces need %20 
//.replace(" ") %20  feeling input 
function getFeeling () {
console.log(feelingInputForm.value)
	if (feelingInputForm !== null) {
		feelingInput = feelingInputForm.value 
	}
let newFeelingInput = feelingInput.replaceAll(" ", "%20");
console.log(newFeelingInput);
var feelingAPI = "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=" + newFeelingInput
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
//  function getPopUp() {
// 		var popUpBox = document.getElementById('feeling-modal');
// 		console.log(popUpBox);
// 		console.log('feeling-modal');
// 		popUpBox.setAttribute("style", "visibility: visible;");
// 		console.log(getPopUp);
		
//  		}
	


function feelingFeedback(emotionalData) {
		

		
		emotionalData.emotions_detected.forEach(element => {
			var feelingBtnDiv = document.getElementById("emotional-response-btn");
			let feelingBtnEl = document.createElement("button");
			console.log(element);
			console.log(emotionalData.emotions_detected)

			feelingBtnEl.textContent = element
			
			feelingBtnDiv.append(feelingBtnEl)
			feelingBtnEl.addEventListener("click", function name() {

				
				localStorage.setItem("emotion-scores",JSON.stringify(emotionalData.emotion_scores));
				var emotionalDataReturn = localStorage.setItem("emotion-detect",JSON.stringify(emotionalData.emotions_detected));
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

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	getFeeling() 
	.then(function(data) {
		console.log(data)
		feelingFeedback(data)
		


	
	
} )} )




$(document).ready(function(){
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();
 });



//onbutton click a response shows up with a "Oh I see you are feeling + emotions detected + "thats so good to hear!"
//if emotions detected = sad then respond "That's too bad you are sad"



//how to apply data to btn
//pull it out of the object 
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// ;
//   });

 

//write a function to pull emotion 

