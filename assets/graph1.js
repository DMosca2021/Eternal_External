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
        type: 'pie',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
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


var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json);

// Map json labels  back to values array
var labels = json.feed.entry.map(function (e) {
  return e.gsx$date.$t;
});
      
// Map json values back to values array
var values = json.feed.entry.map(function (e) {
    return e.gsx$productsproduced.$t;
});

BuildChart(labels, values, "Production Data");
    }
  };
  xhttp.open("GET", "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.", false);
  xhttp.send();
