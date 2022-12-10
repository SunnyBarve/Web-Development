score = 0;
cross = true;

var audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
 audio.play();
// setTimeout(() => {
//     audio.play()
// }, 1000);

// document.addEventListener('keydown' ,(e) =>{
//     if(e.key === "ArrowUp"){
//         console.log(e.key);
//     }
// })

document.onkeydown = function (Event) {
    console.log("Key code is: ", Event.key)
    if (Event.key == 'ArrowUp') {
        ball = document.querySelector('.ball');
        ball.classList.add('animateBall');
        setTimeout(() => {
            ball.classList.remove('animateBall')
        }, 700);
    }
}
if (Event.key == 'ArrowRight') {
    ball = document.querySelector('.ball');
    ballX = parseInt(window.getComputedStyle(ball, null).getPropertyValue('left'));
    ball.style.left = ballX + 112 + "px";
}
if (Event.key == 'ArrowLeft') {
    ball = document.querySelector('.ball');
    ballX = parseInt(window.getComputedStyle(ball, null).getPropertyValue('left'));
    ball.style.left = (ballX - 112) + "px";
}


setInterval(() => {
ball = document.querySelector('.ball');
GameOver = document.querySelector('.GameOver');
obstacle = document.querySelector('.obstacle');

dx = parseInt(window.getComputedStyle(ball, null).getPropertyValue('left'));
dy = parseInt(window.getComputedStyle(ball, null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

offsetX = Math.abs(dx - ox);
offsetY = Math.abs(dy - oy);
// console.log(offsetX, offsetY)
if (offsetX < 73 && offsetY < 52) {
    GameOver.innerHTML = "Game Over - Reload to Play Again"
    obstacle.classList.remove('obstacleAni')
    // audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);
}
else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 500);

}

}, 10);

function updateScore(score) {
scoreCont.innerHTML = "Your Score: " + score
}