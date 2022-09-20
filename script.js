const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.start')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime;
let seconds = 0
let minutes = 0
let number = 0

const stop = () => {
    clearInterval(startInterval)
}

const showInstruction = () => {
    modalShadow.style.display = 'flex'
}

const hideInstruction = () => {
    modalShadow.style.display ='none'
}

const handleStart = () => {

    clearInterval(countTime)
    countTime = setInterval(() => {
        time.textContent = '';
        seconds++
    if ( seconds <= 9) {
        stopwatch.textContent = `${minutes}:0${seconds}`
    }
    else if ( seconds >=10 && seconds <=59) {
        stopwatch.textContent = `${minutes}:${seconds}`
    }
    else {
        seconds = 0;
        minutes++
        stopwatch.textContent = `${minutes}:0${seconds}`
    }

    },1000);
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {
    number ++
    seconds = 0;
    minutes = 0;
    clearInterval(countTime);
    time.style.visibility = "visible"
    time.textContent = stopwatch.innerHTML;
    timeListItem = document.createElement('li');
    timeListItem.innerHTML = `${number} time: ${stopwatch.innerHTML}`
    timeList.appendChild(timeListItem)
}

const clearArchive = () => {
    stopwatch.textContent = "0:00"
    number =0;
    seconds = 0;
    minutes = 0;
    timeList.innerHTML = '';
}

infoBtn.addEventListener('click',showInstruction)
closeModalBtn.addEventListener('click',hideInstruction)
startBtn.addEventListener('click',handleStart)
pauseBtn.addEventListener('click',handlePause)
stopBtn.addEventListener('click',handleStop)
resetBtn.addEventListener('click',clearArchive)