let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelector('[data-time]');

function time(seconds) {
  // to clear any existing timers
  clearInterval(countdown);

  const now = Data.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // need to check if we need to stop it
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    } 
    // else display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}