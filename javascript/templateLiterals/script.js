const fullName = "Furkan Oğur";
const city = "Antalya";
const yersOfBirth = 2001;

let val;

//ternary operator
val = `My name is ${fullName} I'm ${(2022-yersOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;

console.log(val);