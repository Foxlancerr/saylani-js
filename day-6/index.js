/**
 * @param {falsy values}
 * ""
 * null
 * undefined
 * false
 * document.all()
 * 0
 * -0
 * NaN
 * 0n
 */

/**
 * @param {OR logical operator}
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 */

// let age = 18;
// let time = 300;
// let isLicenced = false;
// if (age >= 18 || isLicenced) {
//     alert("eligible for drive")
// } else {
//     alert("not eligible for drive")
// }
/**
 * @param {AND logical operator}
 * true || true = true
 * true || false = false
 * false || true = false
 * false || false = false
 */

// if (age >= 18 && isLicenced) {
//     alert("eligible for drive")
// } else {
//     alert("not eligible for drive")
// }

/**
 * true && true && true && true   will return the last true value
 * true && true && true && true   will stop at first falsy value and return the first falsy value
 * true || true || true || true   will return the last true value
 */

// console.log("object" && true && true && "54");
// console.log("" && false && false && "kamran" && true);


/**
 * true || true || false || true   will return the first true value
 * true || true || true || false   will stop at first truety value and return the first falsy value
 * false || true || true || false   will stop at first truety value and return the first falsy value
 */

// console.log("object" || true || true || "54");
// console.log("" || false || false || "kamran" || true);

let height = 5.8
let edu = 14

if(height >= 5.8){
    if(edu == 16){
        console.log("you are eligible for commission");
    }else{
        console.log("you are eligible for soldier");
    }
}else{
    console.log("you can't do anything");
}