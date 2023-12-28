var timeLimitInMinutes =0.1;
var timeLimitInSecond = timeLimitInMinutes * 60;

var timerElement = document.getElementById("timer");
var tstartbtn = document.getElementById("tstartbtn");
var tstopbtn = document.getElementById("tstopbtn");

var countdown;

tstartbtn.addEventListener("click", startTimer, false);

tstopbtn.addEventListener("click", stopTimer, false);

function startTimer(){
	askNotificationPermission();
    countdown = setInterval(function() {
        timeLimitInSecond--;

        var minutes = Math.floor(timeLimitInSecond / 60);
        var seconds = Math.floor(timeLimitInSecond % 60);

        timerElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if(timeLimitInSecond <= 0){
            timeended();
        }

}, 1000);
}

function timeended(){

	stopTimer();

	if(perm == "granted"){
		const noti = new Notification("Time's up", {body: "Game has ended."})
		navigator.vibrate(200);
	}else if(perm == "denied"){
		alert("Time's up, game has ended.");
		location.reload(true);
		return;
	}
	location.reload(true);
}

function stopTimer(){
  clearInterval(countdown);
}