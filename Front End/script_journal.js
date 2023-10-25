//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button");
console.log(backButton)
// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}

// Event listeners
backButton.addEventListener("click", changeToHomePage);
