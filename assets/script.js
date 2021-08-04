// pseudo-code and experiments 

console.log("RapidAPI response")
fetch("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fdc0490feemsh389b14fa8c6f367p1ee3e8jsn45913dafe114",
		"x-rapidapi-host": "twinword-emotion-analysis-v1.p.rapidapi.com"
	}
})
.then(function(response) {
	return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(err => {
	console.error(err);
});

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
    
function renderQuiz() {
    
}
