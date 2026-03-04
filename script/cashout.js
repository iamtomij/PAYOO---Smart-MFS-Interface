document.getElementById("cashoout-btn").addEventListener("click", function(){
   // 1. get the agent number & validate
   const cashoutNumber = getValueFromInput("cashout-number");


   // 2 get the amount
   const cashoutAmount = getValueFromInput("cashout-amount")
   if(cashoutNumber.length !=11){
      alert("Invalid Number")
   }

   const currentBalance = getBalance()
   

   // 4. calculate new balance
   const newBalance=currentBalance-Number(cashoutAmount)
   console.log(newBalance)
   if(newBalance < 0){
      alert("Invalid Amount")
      return 
   }
   const pin =getValueFromInput("cashout-pin");
   if(pin === "1234"){
      alert("Cashout Successful")
   setBalance(newBalance)
   } else {
      alert("Invalid Pin")
      return;
   }

})








// document.getElementById("cashoout-btn").addEventListener("click", function () {
//    // 1. get the agent number & validate

//    const cashoutNumberInput = document.getElementById("cashout-number");
//    const cashoutNumber = cashoutNumberInput.value;
//    console.log(cashoutNumber)
//    if(cashoutNumber.length !=11){
//       alert("Invalid Agent Number")
//       return;
//    }

//    // 2. get the amount, validate, convert to number

//    const cashoutAmountInput = document.getElementById("cashout-amount");
//    const cashoutAmount = cashoutAmountInput.value;
//    console.log(cashoutAmount)

//    // 3. get the current balance, validate, convert to number

//    const balanceElement = document.getElementById("balance")
//    const balance = balanceElement.innerText;
//    console.log(balance)

//    // 4. calculate new balance

//    const newBalance = Number(balance) - Number(cashoutAmount)

//    if (newBalance < 0) {
//       alert("Invalid Amount")
//       return;
//    }
//    console.log(newBalance)

//    // 5. get the pin and verify

//    const cashoutPinInput = document.getElementById("cashout-pin")
//    const pin = cashoutPinInput.value;
//    if (pin === "1234") {
//       // 5.1. true::>> show and alert
//       alert("Cashout Successful")
//       balanceElement.innerText=newBalance;
//    } else {
//       // 5.2. false::>> show and alert
//       alert("Invalid Pin")
//       return;
//    }

// })