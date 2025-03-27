let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let timer = document.getElementById("timer");
let time = 0;
let interval;

let days = document.getElementById("days-text");
let hours = document.getElementById("hours-text");
let minutes = document.getElementById("minutes-text");
let seconds = document.getElementById("seconds-text");

start.addEventListener("click", () => {
  let audio = new Audio("./assets/start.mp3");
  audio.play();

  clearInterval(interval);
  interval = setInterval(() => {
    checkMinute(time);
    time++;
    days.innerHTML =
      String(Math.floor(time / 86400)).length == 1
        ? "0" + Math.floor(time / 86400)
        : Math.floor(time / 86400);
    hours.innerHTML =
      String(Math.floor((time % 86400) / 3600)).length == 1
        ? "0" + Math.floor((time % 86400) / 3600)
        : Math.floor((time % 86400) / 3600);
    minutes.innerHTML =
      String(Math.floor((time % 3600) / 60)).length == 1
        ? "0" + Math.floor((time % 3600) / 60)
        : Math.floor((time % 3600) / 60);
    seconds.innerHTML =
      String(time % 60).length == 1 ? "0" + (time % 60) : time % 60;
  }, 1000);
});

reset.addEventListener("click", () => {
  let audio = new Audio("./assets/reset.mp3");
  audio.play();

  clearInterval(interval);
  time = 0;
  days.innerHTML = "00";
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
});

pause.addEventListener("click", () => {
  let audio = new Audio("./assets/pause.mp3");
  audio.play();
  clearInterval(interval);
});

// function that checks if one minute has passed and then plays a transition animation in the background color for 1 second
// and then resets the background color to original one
function checkMinute(time) {
  let currentMinute = Math.floor(time / 60);
  let nextMinute = Math.floor((time + 1) / 60);
  if (currentMinute != nextMinute) {
    if (nextMinute % 60 == 0) {
      checkHour(time);
      return;
    }
    document.body.style.background =
      "linear-gradient(90deg, white 0%, white 35%, white 100%)";
    document.body.style.transition = "background 1s";
    document.body.style.transitionTimingFunction = "ease-in-out";
    document.body.style.transitionDelay = "0s";
    document.body.style.transitionDuration = "1s";
    document.body.style.transitionProperty = "background";
    timer.style.color = "black";
    timer.style.border = "2px solid black";
    timer.style.transform = "scale( 1.2 )";
    timer.style.transition = "color 1s, border 1s, transform 1s";
    timer.style.transitionTimingFunction = "ease-in-out";
    timer.style.transitionDelay = "0s";

    let audio = new Audio("./assets/minutealert.mp3");
    audio.play();

    setTimeout(() => {
      document.body.style.background =
        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 35%,    rgba(0, 212, 255, 1) 100%)";
      timer.style.color = "white";
      timer.style.border = "2px solid white";
      timer.style.transform = "scale( 1 )";
    }, 1000);
  }
}

// checkHour function
// function that checks if one hour has passed and then plays a transition animation in the background color for 1 second
// and then resets the background color to original one
function checkHour(time) {
  let currentHour = Math.floor(time / 3600);
  let nextHour = Math.floor((time + 1) / 3600);
  if (currentHour != nextHour) {
    if (nextHour % 24 == 0) {
      checkDay(time);
      return;
    }
    document.body.style.background =
      "linear-gradient(90deg, white 0%, white 35%, white 100%)";
    document.body.style.transition = "background 1s";
    document.body.style.transitionTimingFunction = "ease-in-out";
    document.body.style.transitionDelay = "0s";
    document.body.style.transitionDuration = "1s";
    document.body.style.transitionProperty = "background";
    timer.style.color = "black";
    timer.style.border = "2px solid black";
    timer.style.transform = "scale( 1.3 )";
    timer.style.transition = "color 1s, border 1s, transform 1s";
    timer.style.transitionTimingFunction = "ease-in-out";
    timer.style.transitionDelay = "0s";

    let audio = new Audio("./assets/houralert.mp3");
    audio.play();

    setTimeout(() => {
      document.body.style.background =
        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
      timer.style.color = "white";
      timer.style.border = "2px solid white";
      timer.style.transform = "scale( 1 )";
    }, 1000);
  }
}

// CheckDay function
// function that checks if one day has passed and then plays a transition animation in the background color for 1 second
// and then resets the background color to original one
function checkDay(time) {
  let currentDay = Math.floor(time / 86400);
  let nextDay = Math.floor((time + 1) / 86400);
  if (currentDay != nextDay) {
    document.body.style.background =
      "linear-gradient(90deg, white 0%, white 35%, white 100%)";
    document.body.style.transition = "background 1s";
    document.body.style.transitionTimingFunction = "ease-in-out";
    document.body.style.transitionDelay = "0s";
    document.body.style.transitionDuration = "1s";
    document.body.style.transitionProperty = "background";
    timer.style.color = "black";
    timer.style.border = "2px solid black";
    timer.style.transform = "scale( 1.4 )";
    timer.style.transition = "color 1s, border 1s, transform 1s";
    timer.style.transitionTimingFunction = "ease-in-out";
    timer.style.transitionDelay = "0s";

    let audio = new Audio("./assets/dayalert.mp3");
    audio.play();

    setTimeout(() => {
      document.body.style.background =
        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 35%,    rgba(0, 212, 255, 1) 100%)";
      timer.style.color = "white";
      timer.style.border = "2px solid white";
      timer.style.transform = "scale( 1 )";
    }, 1000);
  }
}
