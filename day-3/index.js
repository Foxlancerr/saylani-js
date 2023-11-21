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
let a = 3; //4 //5 //4 
let b = 2; //3 //4
let result = a++ + a++ + b++ - a-- + b++;
3 + 4 + 2 - 5 + 3
console.log(result);

// prefix operators
let c = 3; //4 // 5 //4
let d = 2; //3 //4
let result1 = ++c + ++c + ++d - --c + ++d;
// 4+5+3-4+4
console.log(result1);


