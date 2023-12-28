var timeLimitInMinutes = 12;
var timeLimitInSecond = timeLimitInMinutes * 60;

var timerElement = document.getElementById("timer");
var tstartbtn = document.getElementById("tstartbtn");
var tstopbtn = document.getElementById("tstopbtn");

var countdown;

tstartbtn.addEventListener("click", startTimer, false);

tstopbtn.addEventListener("click", stopTimer, false);

Notification.requestPermission((result) => {
  console.log(result);
});
function startTimer(){
  countdown = setInterval(function() {
    timeLimitInSecond--;

    var minutes = Math.floor(timeLimitInSecond / 60);
    var seconds = Math.floor(timeLimitInSecond % 60);

    timerElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    if(timeLimitInSecond <= 0){
      clearInterval(countdown);
      navigator.vibrate(200);
      alert("Time's up.");
    }

}, 1000);
}


function stopTimer(){
  clearInterval(countdown);
}
