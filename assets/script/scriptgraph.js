const emotionSpan = document.getElementById('emotion-span')
const emotionText = document.getElementById('emotion-span-text')
const userNameSpan = document.getElementById('userNameSpan')
var getEmotionNumbers = JSON.parse(localStorage.getItem("emotion-scores"))|| [];
var getEmotion = JSON.parse(localStorage.getItem("emotion-detect"))|| [];
var getUserName = JSON.parse(localStorage.getItem("name",JSON.stringify('user1Input')))|| [];
emotionSpan.textContent = getEmotion

console.log(getEmotionNumbers);
console.log(Object.values(getEmotionNumbers));
console.log(getUserName);
var username = document.createElement('h4')
var userNameStored = username.textContent = getUserName
console.log(userNameStored);
userNameSpan.append(userNameStored +", ")



//
//gets only numeric values of emotions for the graph 
var emotionValues = Object.values(getEmotionNumbers);


function user2response() {

   let tempResponseObject = {
       joy: "It's sure nice over here on the other side too!",
       sadness: "the sun will come out tomorrow",
       fear: "there are two wolves inside of all of us... one feeds of fear, the other feeds of hope. Which one will you let go hungry?",
       disgust: "Oh no that does not sound good at all",
       surprise: "Wow! Surprises can be good or bad... I hope this was a good one!",
       anger: "try to do something that makes you happy instead"
   }
  const savedEmotions = Object.keys(tempResponseObject)
  console.log(savedEmotions);
  emotionText.textContent = tempResponseObject[getEmotion[0]]
  //always 0 will pull the first emotional response in the index

    }
        

user2response()
 
    
 
const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        xlabels: xlabels,
        datasets: [{
            label: 'Emotional Trends',

            data: Object.values(getEmotionNumbers),

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

