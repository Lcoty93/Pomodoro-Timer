const startingMinutes = 0;
let time = startingMinutes * 60;
let counting;
let timer = 25;
let pomodoroBtnClicked = true;
let shortBreakBtnClicked = false;
let longBreakBtnClicked = false;
const audio = new Audio('soft-alarm-ringtone.mp3');


const countdown = document.getElementById('countUp');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const pomodoroBtn = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('shortBreak');
const longBreakBtn = document.getElementById('longBreak');
const output = document.getElementById('output');
const muteBtn = document.getElementById('mute');

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
    output.innerHTML = "";
    enableBtns();
    audio.pause();
    audio.load();
})

pomodoroBtn.addEventListener('click', () => {
    pomodoroBtn.style.backgroundColor = 'red';
    shortBreakBtn.style.backgroundColor = 'grey';
    longBreakBtn.style.backgroundColor = 'grey';

    pomodoroBtnClicked = true;
    shortBreakBtnClicked = false;
    longBreakBtnClicked = false;
})

shortBreakBtn.addEventListener('click', () => {
    shortBreakBtn.style.backgroundColor = 'red';
    pomodoroBtn.style.backgroundColor = 'grey';
    longBreakBtn.style.backgroundColor = 'grey';

    pomodoroBtnClicked = false;
    shortBreakBtnClicked = true;
    longBreakBtnClicked = false;
})

longBreakBtn.addEventListener('click', () => {
    longBreakBtn.style.backgroundColor = 'red';
    pomodoroBtn.style.backgroundColor = 'grey';
    shortBreakBtn.style.backgroundColor = 'grey';

    pomodoroBtnClicked = false;
    shortBreakBtnClicked = false;
    longBreakBtnClicked = true;
})



function updateCountUp() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time++;

    timesUp();
}

function timesUp() {
      //301 short break 
    if(time == 6 & shortBreakBtnClicked == true) {
        output.innerHTML = "TAKE A BREAK!";
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    } else if(time == 11 & longBreakBtnClicked == true) { // 601 long break
        output.innerHTML = "TAKE A BREAK!";
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    } else if(time == 26 & pomodoroBtnClicked == true) { // Pomodoro 1501
        output.innerHTML = "TAKE A BREAK!";
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    }
    
}

function disableBtns() {
    startBtn.disabled = true;
    stopBtn.disabled = true;
}

function enableBtns() {
    startBtn.disabled = false;
    stopBtn.disabled = false;
}

function muteBtnPressed() {
    if(muteBtn.checked) {
        // doesn't play audio
    } else {
        audio.play();
    }
}