
var canvas = document.getElementById("myCanvas");
var modal = document.getElementById("modal");
canvas.style.zIndex = 1000;
var ctx = canvas.getContext("2d");
var ballRadius = 7;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -5;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 6;
var brickColumnCount = 4;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 45;
var score = 0;
var lives = 10;
var audioBall = new Audio('kra.mp3');
var audioWin = new Audio('win.mp3');
var audioTouch = new Audio('touch.mp3');
var audioLoze = new Audio('loze.mp3');

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.code  == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.code == 'ArrowRight') {
        rightPressed = false;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = false;
    }
}




function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}



function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    audioTouch.play();
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("Поздравляем вы выиграли!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
ctx.fillStyle = "white";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Счет: "+score, 100, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Попытки: "+lives, canvas.width-200, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        
    }
    if(y + dy < ballRadius) {
        dy = -dy;
       
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            audioBall.play();
        }
        else {
            lives--;
            if(!lives) {
                audioWin.play();
                alert("ПОТРАЧЕНО");
                document.location.reload();
            }
            else {
                audioLoze.play();
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 1;
                dy = -4;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
};


function levels() {
       var buttons = document.querySelectorAll("button");
       var button;
       function myFunc(e) {
        if (e.target.id === "Novichek") {
            modal.style.display = "none";
            brickColumnCount = 1;
            lives = 15;
            draw();

        }else if (e.target.id === "Master") {
            modal.style.display = "none";
            brickColumnCount = 2;
            lives = 10;
            draw();
        }
        else if (e.target.id === "Profi") {
            modal.style.display = "none";
            brickColumnCount = 4;
            lives = 5;
            draw();
        }
    };
       for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].addEventListener("click", myFunc);
        } 
    };
    
levels();