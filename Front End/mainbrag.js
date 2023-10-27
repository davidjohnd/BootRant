// Get the reference to the "Scream It" button
const screamItButton = document.querySelector(".footerScreamItButton");

// Get the reference to the countdown overlay
const countdownEl = document.getElementById("countdown");

// Get the reference to the countdown text element, where we'll display the countdown numbers and the "Off My Chest!" message
const countdownTextEl = document.getElementById("countdown-text");

// Get the reference to the textarea where users input their message
const textareaEl = document.querySelector("textarea");

// Add a click event listener to the "Scream It" button
screamItButton.addEventListener("click", function () {
  // Add the 'shake' class to the button for the shake animation effect
  screamItButton.classList.add("shake");

  // Set a timer to remove the shake effect after 2 seconds
  setTimeout(function () {
    screamItButton.classList.remove("shake");
  }, 2000);

  // Set the initial countdown value to 3
  let count = 2;

  // Make the countdown overlay visible
  countdownEl.style.display = "flex";

  // Display the initial countdown number
  countdownTextEl.textContent = count;

  // Initiate an interval to decrease the countdown every second
  const interval = setInterval(function () {
    count--; // Decrease the countdown number

    // If countdown reaches below 1, we stop the countdown and show "Off My Chest!"
    if (count < 1) {
      clearInterval(interval); // Stop the countdown interval
      countdownTextEl.textContent = "Off My Chest!";

      // Set a delay of 2 seconds before executing the animation to make the text spin and fly out
      setTimeout(function () {
        countdownTextEl.style.animation = "spinAndFlyOut 1s forwards";

        // After the animation completes, reset the page state
        setTimeout(function () {
          countdownTextEl.style.animation = ""; // Clear the animation property
          countdownTextEl.textContent = ""; // Remove the "Off My Chest!" message
          countdownEl.style.display = "none"; // Hide the countdown overlay
          textareaEl.value = ""; // Clear the content of the textarea
        }, 1000); // This delay ensures the animation finishes before resetting
      }, 1000); // This delay lets "Off My Chest!" be visible for 2 seconds

      // If countdown hasn't reached 0, continue displaying the countdown number
    } else {
      countdownTextEl.textContent = count;
    }
  }, 1000); // Repeat the countdown function every 1 second
});
