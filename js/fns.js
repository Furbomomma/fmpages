if("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("./sw.js")
        .then(res => console.log("Service Worker registered"))
        .catch(err => console.log("SW not registered", err))
    })
}

//
//local
//

lpoints = document.getElementById("lpoints");
lmpoints = document.getElementById("lmpoints");
llepoints = document.getElementById("llepoints");

lfouls = document.getElementById("lfouls");
lmfouls = document.getElementById("lmfouls");
llefouls = document.getElementById("llefouls");

lmpoints.addEventListener("click", function(){
    add(lpoints.value, lpoints);
});

llepoints.addEventListener("click", function(){
    remove(lpoints.value, lpoints);
})

lmfouls.addEventListener("click", function(){
    add(lfouls.value, lfouls);
})

llefouls.addEventListener("click", function(){
    remove(lfouls.value, lfouls);
})

//
//guest
//

gpoints = document.getElementById("gpoints");
gmpoints = document.getElementById("gmpoints");
glepoints = document.getElementById("glepoints");

gfouls = document.getElementById("gfouls");
gmfouls = document.getElementById("gmfouls");
glefouls = document.getElementById("glefouls");

gmpoints.addEventListener("click", function(){
    add(gpoints.value, gpoints);
});

glepoints.addEventListener("click", function(){
    remove(gpoints.value, gpoints);
})

gmfouls.addEventListener("click", function(){
    add(gfouls.value, gfouls);
})

glefouls.addEventListener("click", function(){
    remove(gfouls.value, gfouls);
})

function add(points, input) {
    points = parseInt(points);
    points++;
    input.value = points;
}

function remove(points, input) {
    points = parseInt(points);
    if(points == 0) return;
    else{
        points--;
        input.value = points;
    }
    
function timeinp(time, id){

    time = document.getElementById(id).value;
    time = toString(time);
    let newtime =  time.replace(":", "");
    console.log(newtime);
}
}