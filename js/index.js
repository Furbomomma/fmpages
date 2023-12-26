if("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("./sw.js")
        .then(res => console.log("Service Worker registered"))
        .catch(err => console.log("SW not registered", err))
    })
}

function add(points, input) {
    points = document.getElementById(points).value;
    points = parseInt(points);
    points++;
    input = document.getElementById(input);
    input.value = points;
}

function remove(points, input) {
    points = document.getElementById(points).value;
    points = parseInt(points);
    input = document.getElementById(input);
    if(points == 0) return;
    else{
        points--;
        input.value = points;
    }
    
    
}