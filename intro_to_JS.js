// DOM

// Event Listeners

// Click Event
// element.addEventListener('event', function)
const btn2 = document.querySelector(".btn-2");
// 1
// btn2.addEventListener("click", function () {
//   alert("Button 2 clicked!");
// });

function showAlert() {
  alert("Button 2 clicked!");
}

btn2.addEventListener("click", showAlert);

//Mouseover Event
const newBackgroundColor = document.querySelector(".btn-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

// 1. Select the reset button
const resetBtn = document.querySelector(".reset-btn");

// 2. Define the reset function
function resetStyles() {
  // This removes the inline 'blue' and reverts to CSS defaults
  newBackgroundColor.style.backgroundColor = "";
}

// 3. Add the event listener
resetBtn.addEventListener("click", resetStyles);
