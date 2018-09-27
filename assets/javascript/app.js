console.log("The js file is linked!");

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
    }
    
    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };

    //when a radio button is clicked then add the button into an array


    $("#submit").click(function(){
        console.log("Submit button is clicked");
        //write a check answers function      
    });

//     //once you click submit the total score shows
//     var totalScore = 0;
//     $("#score").text(totalScore);
// //check answers after submit 

//     if ($("radio1").lickc){
//             console.log("radio1 clicked");
//     } else {
//         console.log("...");
//     }



    // var form = document.getElementById("questions");

    // document.getElementById("questions").addEventListener("click", function () {
    //     form.submit();
    // });


    });
