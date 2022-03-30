let now = new Date();
const new_year = new Date("Dec 31, " + now.getFullYear() + " 23:59:59");

const yday = document.querySelector("#y-day");
const yhour = document.querySelector("#y-hour");
const ymin = document.querySelector("#y-min");
const ysec = document.querySelector("#y-sec");

const cday = document.querySelector("#c-day");
const chour = document.querySelector("#c-hour");
const cmin = document.querySelector("#c-min");
const csec = document.querySelector("#c-sec");

const submit = document.querySelector(".submit");
var deadline, custom = false;

submit.addEventListener("click", function () {
  deadline = new Date(document.getElementById("deadline").value + "T00:00:00");
  now = new Date();
  custom = true;

});

const x = setInterval(update, 1000);

function update() {
  now = new Date();
  let distance = new_year - now.getTime();
  yday.textContent = getDays(distance);
  yhour.textContent = getHours(distance);
  ymin.textContent = getMinutes(distance);
  ysec.textContent = getSeconds(distance);

  if(custom){
    let distance = deadline - now.getTime();
    cday.textContent = getDays(distance);
    chour.textContent = getHours(distance);
    cmin.textContent = getMinutes(distance);
    csec.textContent = getSeconds(distance);
  }

  if (distance < 0) {
    clearInterval(x);
  }
}

function getDays(distance) {
  return Math.floor(distance / (1000 * 60 * 60 * 24));
}

function getHours(distance) {
  return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getMinutes(distance) {
  return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}

function getSeconds(distance) {
  return Math.floor((distance % (1000 * 60)) / 1000);
}

update();
