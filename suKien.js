var move = document.getElementById("chako");

function moveTop() {
    move.style.top = parseInt(move.style.top) - 10 + 'px';
}

function moveBottom() {
    move.style.top = parseInt(move.style.top) + 10 + 'px';
}

function moveRight() {
    move.style.left = parseInt(move.style.left) - 10 + 'px';
}

function moveLeft() {
    move.style.left = parseInt(move.style.left) + 10 + 'px';
}

function eventClick(event) {
    switch (event.keyCode){
        case 38:
            moveTop();
            break;
        case 40:
            moveBottom();
            break;
        case 37:
            moveRight();
            break;
        case 39:
            moveLeft();
            break;
    }
}

function ready() {
    window.addEventListener("keydown", eventClick);
}