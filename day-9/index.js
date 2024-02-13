// function averageOfArray(arr) {
//     let total = 0;
//     for (var i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     console.log(total)
//     // return total / arr.length;
//     return Math.round(total / arr.length);
// }

// let array = [10, 20, 30, 40,11]

// console.log(averageOfArray(array))


let marks = Number(prompt("Enter your marks"));

switch (true) {
    case (marks >= 75 && marks <= 100):
        console.log("A+");
        break;
    case (marks >= 50 && marks < 75):
        console.log("B+");
        break;
    case (marks >= 35 && marks < 50):
        console.log("C+");
        break;
    default:
        console.log("Fail");
}



let a = 2;
(a > 1) ? console.log("true") : console.log("false")