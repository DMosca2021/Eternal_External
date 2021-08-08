$.ajax({
    url:"https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.",
    data:data,
    type:"POST",
    success:OnSuccess_
});

function OnSuccess_(response) {
  var aData = response.d;
  var data = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: []
    }]
  };

  $.each(aData, function (inx, val) {
    data.labels.push(val.name);
    data.datasets[0].data.push(val.turnover);
    data.datasets[0].backgroundColor.push(val.color);
  });

  var ctx = $("#pele").get(0).getContext("2d");
  var Chart = new Chart(ctx, {
    type: 'pie',
    data: data
  });
}

function OnErrorCall_(response) {
  console.log(error);
}