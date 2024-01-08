/**
 * @param { Math Library }
 */
// number between 1 - 6
// console.log(Math.trunc(Math.random() * 6 + 1));  // round up
// console.log(Math.floor(Math.random() * 6 + 1)); // round down 2.1 = 2 and  2.7 = 2
// console.log(Math.ceil(Math.random() * 6 + 1)); // round up 2.1 = 3 and  2.7 = 3
// console.log(Math.round(Math.random() * 6 + 1)); // round up and round down 2.3 = 2 and  2.7 = 3

// number between 10 to 20  Formula Math.floor(Math.random() * (max - min + 1) + min)
// console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10)) 

// console.log(Math.sqrt(50)) // sqare root finding 
// console.log(Math.abs(50)) // positive value is called absoulute
// console.log(Math.pow(2,4)) // show the power of 2 to 4 = 16

/**
 * @param { string to number conversion }
 */

let num2 = "45";
let num3 = "45j";
let num1 = "j45";
console.log(+num2)
console.log(parseFloat(num2 + num3))
console.log(parseFloat(num2))
console.log(parseInt(num2))
console.log(Number(num2))