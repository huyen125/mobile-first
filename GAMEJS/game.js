var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var radius = 20;
var x=20, y=20;
var dx = 5, dy = 3;
var timeOut = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


document.addEventListener("keydown", keyHandler, false);
//xu ly su kien tu ban phim
function keyHandler(e) {
    var kCode = e.keyCode;
    switch (kCode) {

        case 38: {
            timeOut -= 5;
            if (timeOut < 0) {
                timeOut = 0;
            }
            break;
        }

        case 40: {
            timeOut += 5;
            if (timeOut > 20) {
                timeOut = 20;
            }
            break;
        }
        default:
    }
}
//xu ly va cham
function handleBallCollideBounds() {
    if (y + dy < radius || y + dy > canvas.height - radius) {
        dy = -dy;
    }

    else if (x + dx < radius || x + dx > canvas.width - radius) {
        dx = -dx;
    }
}
//cap nhat toa do
function updateBallPosition() {
    x += dx;
    y += dy;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    handleBallCollideBounds();
    updateBallPosition();
    timeout = setTimeout(draw, timeOut);
    console.log(timeOut);

}
var timeout = setTimeout(draw, timeOut);