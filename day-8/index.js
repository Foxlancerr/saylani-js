/**
 * @param { function in JS | TS}
 */
// function
function greet() {
    console.log("Welcome!");
}
greet();

function add(num1, num2) {
    return num1 + num2;
}


var result = add(5, 5);
console.log(result);
function square(num1) {
    return Math.pow(num1, 2);
}
var number = Number(prompt("Enter a number: "));
var resultSquare = square(number);
console.log(resultSquare);

let h1 = document.getElementById("h1");

btn.addEventListener("click", () => {
    h1.innerText = add(5, 5)
});
