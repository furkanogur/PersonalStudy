let num1 = '5';
console.log(typeof num1);

let num2 = '10';
console.log(num1 + num2);

num1 = Number('5');
num2 = Number('10');

let total = num1 + num2;


console.log(num1 + num2);

console.log(typeof total);
console.log(total);

let val;

val = String(10)

console.log(val);
console.log(typeof val);
console.log(val.length);


val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);


val = new Date();

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(val.getFullYear());


console.log(val);
console.log(typeof val);
console.log(val.length);


val = (10).toString();

val = (false).toString();

val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');


val = parseInt('10');
console.log(val);
val = parseInt('10.5');
console.log(val);

val = parseFloat('10.55');
console.log(val);