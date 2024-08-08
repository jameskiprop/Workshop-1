// Accessing the balance element
const newAmount = document.getElementById("balance");

// Initial balance of the account
let balance = 0;

// accessing the deposit and withdraw buttons
const depositButton = document.getElementById("depositBtn");
const withdrawButton = document.getElementById("withdrawBtn");

// Adding event listeners to the buttons
depositButton.addEventListener("click", depositMoney);
withdrawButton.addEventListener("click", withdrawMoney);

// Writing a function to get the input number
function getInputNumber() {
  const input = document.getElementById("amount").value;
  return parseFloat(input);
}

// Function for depositing money to handle the deposit action
function depositMoney() {
  const depositAmount = getInputNumber();
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Invalid deposit amount");
    return;
  }
  balance += depositAmount; // Updating the balance
  console.log(`New Balance: ${balance}`);
  newAmount.textContent = `${balance.toFixed(2)}`;

  // Creating and adding the transaction entry
  const transaction = createTransactionEntry("Deposit", depositAmount);
  updateTransactionTable(transaction);
}

// withdraw money function to handle the withdraw action
function withdrawMoney() {
  const withdrawAmount = getInputNumber();
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Invalid withdrawal amount");
    return;
  }
  if (withdrawAmount > balance) {
    alert("Insufficient balance");
    return;
  }
  balance -= withdrawAmount; // Updating the balance
  console.log(`New Balance: ${balance}`);
  newAmount.textContent = `${balance.toFixed(2)}`;

  // Creating and adding the transaction entry
  const transaction = createTransactionEntry("Withdraw", withdrawAmount);
  updateTransactionTable(transaction);
}

// Function for validating the input
function validateInput(depositAmount, withdrawAmount) {
  if (isNaN(depositAmount) || depositAmount > 10000000) {
    alert("Invalid deposit amount");
    return;
  }
  if (isNaN(withdrawAmount) || withdrawAmount < 20) {
    alert("Invalid withdrawal amount");
    return false;
  }
}

// Function for creating the transaction entry
function createTransactionEntry(type, amount) {
  const date =
    new Date().toLocaleString(); /*new Date()=>creates a new Date object that represents the current date and time*/
  /*toLocaleString => converts the Date object into a string that represents the date and time*/
  return { type, amount, date };
}

// Function for updating the transaction table
function updateTransactionTable(transaction) {
  const tableBody = document.getElementById("transactionTable");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="px-4 py-2 border">${transaction.type}</td>
    <td class="px-4 py-2 border">${transaction.amount.toFixed(2)}</td>
    <td class="px-4 py-2 border">${transaction.date}</td>
  `;
  tableBody.appendChild(row);
}

/**Table
//Select elements from the DOM using its ID and assigning them to variables

const deposit = document.querySelector("#depositBtn");
const amount = document.querySelector("#amount");
const remainder = document.querySelector("#balance");

//Adding eventlisteners to handle the withdraw and deposit actions

deposit.addEventListener("click", depositCash);
withdraw.addEventListener("click", withdrawCash);
//function to deposit cash */

/* Deposit button event handler
const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("amount");

  updateSpanTest("balance", depositStringToInt);
  updateSpanTest("balance", depositStringToInt);
}); */
