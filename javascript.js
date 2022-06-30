const startingMinutes = 0;
let time = startingMinutes * 60;
let counting;


const countdown = document.getElementById('countUp');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
    counting = setInterval(updateCountUp, 1000);
})

stopBtn.addEventListener('click', () => {
    clearInterval(counting);
})

resetBtn.addEventListener('click', () => {
    clearInterval(counting);
    countdown.innerHTML = `00:00`;
    time = 0;
})



function updateCountUp() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time++;
}