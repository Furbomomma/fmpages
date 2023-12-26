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