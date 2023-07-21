// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("count");

// for decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(count.innerText);
  if (value > 0) {
    count.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
incrementBtn.addEventListener("click", () => {
  const value = Number(count.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    count.innerText = value + 1;
  }
});

// for reset button click
resetBtn.addEventListener("click", () => {
    count.innerText = 0;
});