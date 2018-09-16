console.log("The js file is linked!");

$(document).ready(function(){
    console.log("Page is ready");
    var timer = 60;
    displayTime = document.getElementById("time");
    $("#time").text(timer);
    timerStart();

    function timerStart () {
        for (i = 0; i < 60; i--){
            timer -= 1;
            console.log(timer);
        }
    }

});
