/**
 * @param {counter Increment  | Decreament}
 */

let counterText = document.getElementById("counter-text")
let increment = document.getElementById("inc")
let decrement = document.getElementById("dec")

let counter = 0;

//increment function
increment.addEventListener("click", () => {
    counterText.innerText = `Counter : ${++counter}`;
    evenOdd()
})

// decrement function
decrement.addEventListener("click", () => {
    counterText.innerText = `Counter : ${--counter}`;
    evenOdd()
})

function evenOdd() {
    if (counter % 2 == 0) {
        counterText.style.color = "green";
    }
    else {
        counterText.style.color = "blue";
    }
}

// percentage Calculations

let percentage = + prompt("Please Enter a percentage");
function percentageDisplay() {
    if (percentage >= 90 && percentage <= 100) {
        console.log("Grade A+");
        document.querySelector("body").style.backgroundColor = "#EFE5C1"
    } else if (percentage >= 70 && percentage <= 90) {
        console.log("Grade B");
        document.querySelector("body").style.backgroundColor = "#99927B"
    } else if (percentage >= 50 && percentage <= 70) {
        console.log("Grade C");
        document.querySelector("body").style.backgroundColor = "#625E4E"
    } else {
        console.log("Fail");
        document.querySelector("body").style.backgroundColor = "#5663CA"
    }
}
percentageDisplay()
