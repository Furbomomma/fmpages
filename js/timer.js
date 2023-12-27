var countDownDate = new Date().getTime() + 12 * 60 * 1000;
var running = true;

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timerinput").innerHTML = minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerinput").getAttribute("value") = "EXPIRED";
  }
}, 1000);
