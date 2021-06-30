//Your code goes here!

const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");
const inputTime = document.querySelector("#time");
const timer = document.querySelector("#timer");

const plusBtn = document.getElementById("btn-plus");
const minusBtn = document.getElementById("btn-minus");
const startBtn = document.querySelector("#btn-start");
const resetBtn = document.querySelector("#btn-reset");
const pauseBtn = document.querySelector("#btn-pause");
const continueBtn = document.querySelector("#btn-continue");



let countdown;

function startPomodoro() {
    
    if (inputTime.value != 0) {
     //.innerText = `${time.value}`;
     minutes.innerText = `${Math.floor(inputTime.value)}`;     
     seconds.innerText = (`${inputTime.value}` * 60 % 60);
     }
    let timeLeft = Number(minutes.innerText) * 60 + Number(seconds.innerText);
    countdown = setInterval(() => {
      timeLeft--;
      minutes.innerText = `${Math.floor(timeLeft / 60)}`;
      seconds.innerText = `${timeLeft % 60}`;
      if (timeLeft <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
    
};

 

 function resetPomodoro() {
     clearInterval(countdown);
     minutes.innerText = `0`;
     seconds.innerText = `0`;
 }


plusBtn.addEventListener("click", () => {
    inputTime.value++;
    minutes.innerText = `${Math.floor(inputTime.value)}`;
    seconds.innerText = (inputTime.value * 60 % 60);
});
minusBtn.addEventListener("click", () => {
    inputTime.value--;
    minutes.innerText = `${Math.floor(inputTime.value)}`;
    seconds.innerText = (inputTime.value * 60 % 60);
});

startBtn.addEventListener("click", () => startPomodoro(countdown));
resetBtn.addEventListener("click", () => resetPomodoro(countdown));
pauseBtn.addEventListener("click", () =>  clearInterval(countdown));
continueBtn.addEventListener("click", () => startPomodoro(countdown));


