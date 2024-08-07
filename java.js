// Accessing the balance element
const newamount = document.getElementById("balance");

// initial balance  to number
let balance = 0;
//  adding references to buttons
const depositButton = document.getElementById("depositBtn");
const withdrawlbutton = document.getElementById("withdrawBtn");

// adding event listeners to the button
depositButton.addEventListener("click", depositMoney);
withdrawlbutton.addEventListener("click", withdrawMoney);
// writing a function to get the input number

// function for depositing money to handle the deposit action

//function to withdraw money to handle the withdraw action

//function to update the balance on the screen to update the balance on the screen

/* Deposit button event handler
const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("amount");

  updateSpanTest("balance", depositStringToInt);
  updateSpanTest("balance", depositStringToInt);
}); */
