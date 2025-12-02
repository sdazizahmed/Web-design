const input = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const counterEl = document.getElementById("counter");

let intervalId = null;
let inactivityTimeoutId = null;

function startTimer() {
  const targetSeconds = Number(input.value);

  if (!targetSeconds || targetSeconds <= 0) {
    alert("Please enter a positive number");
    return;
  }

  clearInterval(intervalId);
  let current = 0;
  counterEl.textContent = current;

  intervalId = setInterval(() => {
    current++;
    counterEl.textContent = current;

    if (current >= targetSeconds) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimeoutId);
  inactivityTimeoutId = setTimeout(() => {
    alert("Timeout is reached");
  }, 10000); // 10 seconds
}

startBtn.addEventListener("click", () => {
  startTimer();
  resetInactivityTimer();
});

// track any click on the page
document.addEventListener("click", resetInactivityTimer);

// start inactivity tracking immediately
resetInactivityTimer();
