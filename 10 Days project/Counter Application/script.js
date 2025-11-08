// JavaScript code for the counter application
document.addEventListener("DOMContentLoaded", () => {
  let count = 0;

  const countDisplay = document.getElementById("counter-display");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");
  const resetBtn = document.getElementById("reset-btn");

  if (!countDisplay || !incrementBtn || !decrementBtn || !resetBtn) {
    console.error(
      "One or more required elements not found. Verify element IDs in your HTML."
    );
    return;
  }

  countDisplay.textContent = count;

  incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
  });
});
