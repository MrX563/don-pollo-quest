let timer = 0.1
let ammounttime = timer * 36000
function calculateTime (){
    const countdown = document.querySelector("#countdown");

    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10){
    seconds = "0" + seconds;
    }

    if (minutes < 10){
    minutes = "0" + minutes;
    }

    countdown.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if (amountTime < 0) {
    stopTimer();
    amountTime = 0;
    }

    function stopTimer(){
    clearInterval();
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', startTimer);

function startTimer () {
    setInterval(calculateTime,1000);
}