console.log("machine added")

// machine ID--> input value

function getValueFromInput(id) {
   const input = document.getElementById(id)
   const value = input.value
   console.log(id, value)
   return value;
}

//  machine -> balance
function getBalance() {
   const balanceElement = document.getElementById("balance");
   const balance = balanceElement.innerText;
   console.log("Current Balance:", Number(balance))
   return Number(balance);

}

// machine value-> set balance

function setBalance(value) {
   const balanceElement = document.getElementById("balance")
   balanceElement.innerText = value;
}

// machine id -> hide all> show id
function showOnly(id) {
   const addMoney = document.getElementById("add-money")
   const cashout = document.getElementById("cashout")
   // console.log(`add Money- ${addMoney} , Cashout - ${cashout}`)

   // sobaike hide kore deo
   addMoney.classList.add("hidden")
   cashout.classList.add("hidden")


   // id wala element ke show koro
   const selected=document.getElementById(id);
   selected.classList.remove("hidden")

}