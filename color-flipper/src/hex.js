const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const HEX_LENGTH = 6;

function iterateColor() {
  let color = getHexColor();

  var bg = document.querySelector("body");
  bg.style.backgroundColor = color;

  var name = document.querySelector("#color");
  name.textContent = color;
  name.style.color = color;
}

function getHexColor() {
  let hex_number = "#";

  for (let i = 0; i < HEX_LENGTH; i++) {
    let number = getRandomNumber();
    hex_number += hex[number];
  }
  return hex_number;
}

function getRandomNumber() {
  return Math.floor(Math.random() * HEX_LENGTH);
}
