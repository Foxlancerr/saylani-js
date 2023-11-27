/**
 * @param {arithemic operator}
 */
// presendancy value of division,Multiplication,reminder is 12
// presendancy value of addition,subtraction is 11
// () this enclosed brackets operator have precedence value is 18 and it have high value then all arthematics operators

// it will excuted from left to right and then check its presendancy value
// higher precedence value, first it will be excuted.
// lower precedence value, last it will be excuted.

// console.log(4 + 4 * 3);
// 4+4*3
// 8*3
// 24
// console.log(4 + 4 * 3 / 3 + 2);
// 8*3/3+2
// 24/3+2
// 8+2
// 10

/**
 * @param {if we want that it will adding values first and then do dividend operations}
 */
// console.log((2 + 2) / 3);
// (3 + 6) / 3  the enclosed brackets have higher precedence values
// 9 / 3
// 3

/**
 * @param {unary operators}
 */
// postfix operators
// a++ b++ c-- d--
let a = 3; //4 //5 //4 
let b = 2; //3 //4
let result = a++ + a++ + b++ - a-- + b++;
3 + 4 + 2 - 5 + 3

// console.log(result);

// prefix operators
// ++a ++b --c --d
let c = 3; //4 // 5 //4
let d = 2; //3 //4
let result1 = ++c + ++c + ++d - --c + ++d;
// 4+5+3-4+4
// console.log(result1);

/**
 * @param {if your country population split in half, and each half contain half values, how many people would live in each half?}
 */
let myCountryPopulation = 250000000;
let halfPopulation = myCountryPopulation / 2;
console.log(halfPopulation);

/**
 * @param {add one to its half population}
 */

let increasePopulationByOne = ++halfPopulation;
console.log(increasePopulationByOne);

let a1 = 10; //11 //12
let b1 = 10; //9 //10
console.log(a1++ + a1++ * --b1 + b1++ + a1);
// 10 + 11 * 9 + 9 + 12
// 10 + 99 + 9 +12
// 109 + 9 + 12
// 118 + 12
// 130

let number1 = 10 // 11
console.log(number1++);
// console.log(number1);
let number2 = 10
++number2
console.log(number2);


