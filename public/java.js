/* Deposit button event handler
const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("amount");

  updateSpanTest("balance", depositStringToInt);
  updateSpanTest("balance", depositStringToInt);
}); */

// Accessing the balance element
const newamount = document.getElementById("balance");

// initial balance to number
let balance = 0;
//  adding references to buttons
const depositButton = document.getElementById("depositBtn");
const withdrawlbutton = document.getElementById("withdrawBtn");

// adding event listeners to the button
depositButton.addEventListener("click", depositMoney);
withdrawlbutton.addEventListener("click", withdrawMoney);

// writing a function to get the input number
function getInputNumber() {
  const input = document.getElementById("amount").value;
  return parseFloat(input);
}

// function for depositing money to handle the deposit action
function depositMoney() {
  const depositAmount = getInputNumber();
  if (isNaN(depositAmount) || depositAmount <= 0) {
    console.error("Invalid deposit amount");
    return;
  }
  balance += depositAmount; // incrementing the value
  console.log(`New Balance: ${balance}`);
  newamount.textContent = `Balance: $${balance.toFixed(2)}`;
}

//function to withdraw money to handle the withdraw action
function withdrawMoney() {
  const withdrawAmount = getInputNumber();
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    console.error("error");
    return;
  }
  balance -= withdrawAmount;
  console.log(`New Balance: ${balance}`);
  newamount.textContent = `Balance: $${balance.toFixed(2)}`;
}
//function to update the balance on the screen to update the balance on the screen

//Table
//Select elements from the DOM using its ID and assigning them to variables
const withdraw = document.querySelector("#withdrawBtn");
const deposit = document.querySelector("#depositBtn");
const amount = document.querySelector("#amount");
const remainder = document.querySelector("#balance");

//Adding eventlisteners to handle the withdraw and deposit actions

deposit.addEventListener("click", depositCash);
withdraw.addEventListener("click", withdrawCash);

//function to deposit cash
