var arr = ["Bmw", "Mercedes", "Bentley", "RollsRoyce"];

// var arr2 = new Array("Bmw", "Mercedes", "Bentley", "RollsRoyce");




console.log(arr.length);


console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length - 1]);

// arr[4] = "Tesla";

arr[arr.length] = "Tesla";
arr[arr.length] = "Lamborghini";


arr.push("Ford");

arr.unshift("Volkswagen");

arr.shift("Ford");

arr.pop("Volkswagen");

arr.reverse();

arr.sort();


var numbers = [1, 2, 5, 80, 15];

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(numbers.sort(compare));

console.log(arr);
console.log(arr.indexOf("RollsRoyce"));
console.log(arr.includes("RollsRoyce"));

var str = "Chevrolet,Honda";
var arr2 = str.split(",");
console.log(arr2);

var arr3 = arr.concat(arr2);
console.log(arr3);



// console.log(arr3.pop());
console.log(arr3.splice(6, 2));
console.log(arr3);





console.log(arr3.slice(6, 7));


var studentA = ["Furkan", "Ogur", 2001];
var studentB = ["Elon", "Musk", 1985];
var studentC = ["Steve", "Jobs", 1955];

var students = [studentA, studentB, studentC];

console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students);