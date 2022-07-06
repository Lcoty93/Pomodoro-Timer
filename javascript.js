const startingMinutes = 0;
let time = startingMinutes * 60;
let counting;
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
    startCounter();
})

stopBtn.addEventListener('click', () => {
    clearInterval(counting);
})

resetBtn.addEventListener('click', () => {
    resetTime();
})

pomodoroBtn.addEventListener('click', () => {
    resetTime();
    startCounter();
    
    pomodoroBtn.classList.remove('btn-secondary');
    pomodoroBtn.classList.add('btn-primary');
    shortBreakBtn.classList.remove('btn-primary');
    shortBreakBtn.classList.add('btn-secondary');
    longBreakBtn.classList.remove('btn-primary');
    longBreakBtn.classList.add('btn-secondary');

    pomodoroBtnClicked = true;
    shortBreakBtnClicked = false;
    longBreakBtnClicked = false;
})

shortBreakBtn.addEventListener('click', () => {
    resetTime();
    startCounter();

    pomodoroBtn.classList.remove('btn-primary');
    pomodoroBtn.classList.add('btn-secondary');
    shortBreakBtn.classList.remove('btn-secondary');
    shortBreakBtn.classList.add('btn-primary');
    longBreakBtn.classList.remove('btn-primary');
    longBreakBtn.classList.add('btn-secondary');

    pomodoroBtnClicked = false;
    shortBreakBtnClicked = true;
    longBreakBtnClicked = false;
})

longBreakBtn.addEventListener('click', () => {
    resetTime();
    startCounter();
    
    pomodoroBtn.classList.remove('btn-primary');
    pomodoroBtn.classList.add('btn-secondary');
    shortBreakBtn.classList.remove('btn-primary');
    shortBreakBtn.classList.add('btn-secondary');
    longBreakBtn.classList.remove('btn-secondary');
    longBreakBtn.classList.add('btn-primary');

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
    if(time == 301 & shortBreakBtnClicked == true) { //301 short break 
        breakMsg();
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    } else if(time == 601 & longBreakBtnClicked == true) { //601 long break
        breakMsg();
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    } else if(time == 1501 & pomodoroBtnClicked == true) { //1501 Pomodoro 
        breakMsg();
        disableBtns();
        clearInterval(counting);
        muteBtnPressed();
    }
    
}

function breakMsg() {
    output.innerHTML = "TAKE A BREAK!";
    output.classList.add('alert', 'alert-warning', 'text-center', 'h1');
}

function resetTime() {
    clearInterval(counting);
    countdown.innerHTML = `00:00`;
    time = 0;
    output.innerHTML = "";
    enableBtns();
    audio.pause();
    audio.load();
    output.classList.remove('alert', 'alert-warning');
}

function startCounter() {
    counting = setInterval(updateCountUp, 1000);
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