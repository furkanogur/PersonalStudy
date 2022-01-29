// function sum(a, b) {
//     var c = a + b;
//     return c;
// }

// console.log(sum(10, 20));

//old system for Default parameters
// const sum = function(a, b) {
//     if (typeof a === 'undefined') { a = 0; }
//     if (typeof b === 'undefined') { b = 0; }

//     var c = a + b;
//     return c;
// }


//New ES6 Default parameters
const sum = function(a = 0, b = 0) {
    var c = a + b;
    return c;
}

function sumAll() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]

    }
    return total;
}

console.log(sum(10, 30));
console.log(sum(10)); //NaN

console.log(sumAll(10, 30, 80, 70, 90, 254));