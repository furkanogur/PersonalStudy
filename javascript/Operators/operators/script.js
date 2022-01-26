let val;
const a = 10;
const b = 5;
const c = 5;
let d = 4;

//Arithmetic Operators
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b; //kalan
val = d++; //artrırma
val = ++d; //artrırma
val = d--; //artrırma
val = --d; //artrırma

//assignment operators

val = a;
val += a; // val = val + a
val -= a; // val = val - a
val *= a; // val = val * a
val /= a; // val = val / a
val %= a; // val = val % a

//comparison operators
val = a == b;
val = b == c;
val = b === c; //değer kontrolü & type 
val = 5 === '5'; //değer aynı ama tip farklı false döner
val = a != b;
val = a !== b;
val = a > b;
val = a < b;
val = a >= b; //büyük veya küçük eşit mi

//logical operators

// && (and)
// true && true => true
// true && false => false
// false && false => false
// false && true => false

val = (a > b) && (a > c);

// || (or)
// true || true => true
// true || false => true
// false || false => false
// false || true => true
val = (a > b) || (a > c);


// ! (not)

val = !(a > b);
//!ture => false
//!false => true

console.log(val);
console.log(typeof val);