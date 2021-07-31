
const user1Input = document.querySelector("#userinput1");




form.addEventListener('submit', function(event) {
    event.preventDefault();
    var user1Input = document.querySelector('#userinput1').value;
    console.log("user1Input " + user1Input)
        var tempObject = {
            user1: user1Input, 
            
        }

        nameStored.push(tempObject)
        localStorage.setItem("scores",JSON.stringify(nameStored));
        document.querySelector('#userinput1').value = "";
    displayHS()
    }
);