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

