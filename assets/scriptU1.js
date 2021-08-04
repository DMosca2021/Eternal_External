
const user1Input = document.querySelector("#userinput1");
const numberBg = document.getElementById("#main")
const feelingInputForm = document.getElementById("#feelingInput");
const feelingBtn = document.getElementById("#feelingBtn")



form.addEventListener('submit', function(event) {
    event.preventDefault();
    var user1Input = document.querySelector('#userinput1').value;
    console.log("user1Input " + user1Input)
    
        localStorage.setItem("name",JSON.stringify(user1Input));
        document.querySelector('#userinput1').value = "";
    }
);




// "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for."

function getFeeling () {

	if (feelingInputForm !== null) {
		feelingInput = feelingInputForm.value 
	}

fetch("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=" + feelingInput, {
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

getFeeling()


form.addEventListener('submit', function(event) {
    event.preventDefault();
    getFeeling()
    
    }
);

//write a function to pull emotion 
//make a chart of emotional scores??? 
