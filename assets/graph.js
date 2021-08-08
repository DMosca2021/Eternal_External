
const user1Input = document.querySelector("#userinput1");
const numberBg = document.getElementById("#main")
let feelingInputForm = document.getElementById("feelingInput");
const feelingBtn = document.querySelector("#feelingBtn")



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
console.log(feelingAPI)
fetch(feelingAPI, {

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


form.addEventListener('submit', function(event) {
    event.preventDefault();
    getFeeling()
    
	var emotionResponse = ""
	var feelingFeedback = document.createElement("button")
	

	feelingFeedback.textContent = emotionResponse

    }
);

let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['anger', 'disgust', 'fear', 'joy', 'sadness', 'surprise']
let colorMex = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)']
 
//let myChart = new Chart(ctx, {
  //  type: 'pie',
    //data: {


        const config = {
            type: 'pie',
            data: data,
          };
        labels: labels
        // //datasets: [{
        //     data: [],
        //     backgroundColor: colorMex
        // },       
   // },
    options: {
        responsive: true,
    //}
//})

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    // Map JSON labels  back to values array
    var labels = json.map(function (e) {
      return e.name;
    });
    // Map JSON values back to values array
    var values = json.map(function (e) {
      return (e.realTimeWorth / 1000); // Divide to billions in units of ten
    });
    BuildChart(labels, values, "Real Time Net Worth"); // Pass in data and call the chart
  }
};
xhttp.open("GET", "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.");
xhttp.send();
function BuildChart(labels, values, chartTitle) {
    var data = {
      labels: labels,
      datasets: [{
        label: chartTitle, // Name the series
        data: values,
        backgroundColor: ['rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
        ],
      }],
    };
  
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Produced Count'
            }
          }]
        },
      }
    });
  
    return myChart;
  }