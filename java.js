// // balance accessing
// const newamount = document.getElementById ('balance');

// // initial balance  to number
// var balance = number.(document.getElementById('amount'));
// //  reference to buttons
// const Depositbutton = document.getElementById('depositBtn');
// const withdrawlbutton = document.getElementById('withdrawBtn');
// // Event listener for deposit button
// Depositbutton.addEventListener('click',depositmoney);

// // function for depositing money
// function depositmoney(){
//  balance += newamount;
//  document.getElementById('balance').value =balance;
// }

// Deposit button event handler
const Depositbutton = document.getElementById("depositBtn");
Depositbutton.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("amount");

  updateSpanTest("balance", depositStringToInt);
  updateSpanTest("balance", depositStringToInt);
});
