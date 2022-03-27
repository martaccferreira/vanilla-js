let counter = 0;

const colorArray = [
  "red",
  "#3B3C36",
  "#F3A505",
  "rgb(157,145,1)",
  "blueviolet",
  "#89AC76"
];

function iterateColor() {
  let color = colorArray[counter % 6];

  var bg = document.querySelector("body");
  bg.style.backgroundColor = color;

  var name = document.querySelector("#color");
  name.textContent = color;
  name.style.color = color;

  counter++;
}
