function averageOfArray(arr) {
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log(total)
    // return total / arr.length;
    return Math.round(total / arr.length);
}

let array = [10, 20, 30, 40,11]

console.log(averageOfArray(array))
