const mice = document.getElementById('mice');
const trap = document.getElementById('trap');
const score = document.getElementById('score');

function jump() {
    mice.classList.add("jump-animation");
    setTimeout(() => {
        mice.classList.remove("jump-animation");
    }, 500);
}

document.addEventListener('keypress', (event) => {
    if (!mice.classList.contains('jump-animation')) {
        jump();
    }
})

setInterval(() => {
    score.innerText++;
    const miceTop = parseInt(window.getComputedStyle(mice).getPropertyValue('top'));
    const trapLeft = parseInt(window.getComputedStyle(trap).getPropertyValue('left'));

    if (trapLeft < 5) {
        trap.style.display = 'none';
    }else {
        trap.style.display = '';
    }

    if (trapLeft < 65 && trapLeft > 0 && miceTop > 210) {
        alert("Game Over!");
        location.reload();
    }  

}, 50);
