console.log("The js file is linked!");

<<<<<<< HEAD
//once you click submit the total score shows
var totalScore = 0;


window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


console.log("Page is ready");
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(document).ready(function(){

=======
$(document).ready(function(){

    console.log("Page is ready");
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
>>>>>>> parent of 897c733... instructions
    }
    

    //when a radio button is clicked then add the button into an array


    $("#submit").click(function(){
        console.log("Submit button is clicked");
        console.log(userAnswer);
        $("#score").text(totalScore);
        //write a check answers function 

    });

    //once you click submit the total score shows
    var totalScore = 0;
    $("#score").text(totalScore);
//check answers after submit 
$(function() {
   console.log(sessionStorage.getItem('option'));
    $('[type=radio]').click(function() {
             console.log(this.value);           sessionStorage.setItem('option',this.value);
        userAnswer.push(this.value);
        if (this.value === "correct"){
            totalScore +=1;
        } 
        });    

});


    });
