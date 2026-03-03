document.getElementById("btn-login").addEventListener("click", function () {
    // console.log("login button clicked ")

    // 1. get the number input
    const inputNumber = document.getElementById("input-number");
    const number = inputNumber.value
    console.log(number)

    // 2. get the pin input
    const inputPin = document.getElementById("input-password");
    const pin = inputPin.value
    console.log(pin)

    // 3. match number and pin input
    if (number === "01719213787" && pin === "1234") {
        // 3.1 true::> alert homepage
        alert("Login Success");
        window.location.replace("./homepage.html")
        // 3.2 false::>> alert return
    } else {
        alert("Login Failed")
        return;
    }

})