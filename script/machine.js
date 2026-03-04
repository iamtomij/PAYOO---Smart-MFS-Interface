console.log("machine added")

// machine ID--> input value

function getValueFromInput(id) {
   const input = document.getElementById(id)
   const value = input.value
   console.log(id, value)
   return value;
}

//  machine -> balance
function getBalance(balance) {
   const balanceElement = document.getElementById("balance");
   const balance = balanceElement.innerText;
   console.log("Current Balance:", Number(balance))
   return Number(balance);

}

// machine value-> set balance

function setBalance(value) {
   balanceElement = document.getElementById("balance")
   balanceElement.innerText = value;
}