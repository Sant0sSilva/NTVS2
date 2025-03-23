let count = 0;
let limit = 35;
let increment = 5;

const counterElement = document.getElementById("numDisplay");
const boomElement = document.getElementById("boomBox");
const limitInput = document.getElementById("limitInput");
const incrementInput = document.getElementById("incrementInput");

// Local storage reload
const onPageLoad = () => {
  if (limit != 35 || count != 5) {
    const savedLimit = localStorage.getItem("savedLimit");
    const savedIncrement = localStorage.getItem("savedIncrement");

    limit = parseInt(savedLimit);
    increment = parseInt(savedIncrement);
  } else {
    limit = 35;
    increment = 5;
  }
};

onPageLoad();

document.getElementById("currentLimit").innerHTML = limit;
document.getElementById("currentIncrement").innerHTML = increment;

// User input logic/////////////////7
// limit input value
document.getElementById("limitButton").addEventListener("click", () => {
  const newLimit = parseInt(limitInput.value);
  limit = newLimit;
  console.log(newLimit);
  document.getElementById("currentLimit").innerHTML = limit;
  limitInput.value = "0";

  localStorage.setItem("savedLimit", limit);
});

// increment input value
document.getElementById("incrementButton").addEventListener("click", () => {
  const newIncrement = parseInt(incrementInput.value);
  increment = newIncrement;
  console.log(newIncrement);
  document.getElementById("currentIncrement").innerHTML = increment;
  incrementInput.value = "0";

  localStorage.setItem("savedIncrement", increment);
});

// Counter logic ////////////////////////////
// increment
const incrementCounter = () => {
  count += increment;
  counterElement.innerHTML = count;
  if (counterElement.innerHTML > limit) {
    count = 0;
    counterElement.innerHTML = 0;
    boomElement.classList.remove("hidden");
  } else {
    boomElement.classList.add("hidden");
  }
};
// decrement
const decrementCounter = () => {
  count -= increment;
  counterElement.innerHTML = count;
  if (counterElement.innerHTML < -limit) {
    count = 0;
    counterElement.innerHTML = 0;
    boomElement.classList.remove("hidden");
  } else {
    boomElement.classList.add("hidden");
  }
};

// Reset button //////////////////////////////
document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("currentIncrement").innerHTML = 5;
  document.getElementById("currentLimit").innerHTML = 35;
  document.getElementById("numDisplay").innerHTML = 0;
  limit = 35;
  increment = 5;
  boomElement.classList.add("hidden");
  localStorage.clear();
});
