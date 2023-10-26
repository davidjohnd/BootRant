//import { getDate } from "../Back_End/scripts/entry.js";

//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button")[0];
const bragButton = document.getElementById("bragButton");
const rantButton = document.getElementById("rantButton");

// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}
function changeToAddBrag() {
  window.location.href = "./brag.html";
}
function changeToAddRant() {
  window.location.href = "./rant.html";
}
// Event listeners
backButton.addEventListener("click", changeToHomePage);
//bragButton.addEventListener("click", changeToAddBrag);
//rantButton.addEventListener("click", changeToAddRant);

//call journal with api
//insert enteries
async function retrieveJournal() {
  const response = await fetch("/journal/", {});
  // Check if the response failed, and if so log an error and halt the app

  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // return the parsed JSON from the response
  const data = await response.json();
  console.log(data);
  return data;
}

// On Load populate page with all existing database entries
//On load part
window.onload = popDom;


async function popDom() {

// GET request and stores the values
const payloadObject = await retrieveJournal();
console.log('PayloadObject recieved')
console.log(`PayloadObject is type of ${typeof(payloadObject)}`)
console.log(payloadObject)
const payload = payloadObject.data
console.log('Payload recieved')
console.log(`Payload is an Array ${Array.isArray(payload)}`)
console.log(payload)
console.log(`Payload has ${payload.length} entries`)

// loop thru payload
for (let i = 0; i < payload.length; i++) {
  // check if the enty is brag or rant
  // if Rant create a Rant card
  if (payload[journalEntryNum].entry_type == 'rant') {
    console.log(`Entry num: ${journalEntryNum} is type rant `)
    //createRantCard(payload[journalEntryNum].post, payload[journalEntryNum].date)
  } else { // if Brag create a brag card
    console.log(`Entry num: ${journalEntryNum} is type brag`)
    //createBragCard(payload[journalEntryNum].post, payload[journalEntryNum].date)
  }
  }
}

//GET request
// async function populateDom() {
//   console.log("Page load starting request");
//   const payload = await getDate();
// Parse the JSON

// Loop thru payload
// Check if entry is Brag or Rant

// If brag make brag card in DOM - Function

// If rant make rant card in DOM - Function

// exit
//}
// Brag card function

// Rant card function
