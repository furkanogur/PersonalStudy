const firstName = 'Furkan';
const lastName = "Ogur";
const age = 21;
let val;

//string concatenation

val = firstName + " " + lastName;
val = "Furkan"
val += " Ogur"
let hobbies = "sinema,spor,kitap,yazılım";

val = "Benim adım " + firstName + " " + lastName + " ve yaşım " + age + " Antalya'da yaşıyorum.";

//string concat
val = firstName.concat(' ', lastName)

//string length
// val = val.length;

//string uppercase - lovercase

val = val.toUpperCase();
val = val.toLowerCase();

//substring
// val = val.substring(3, 5);

//slice
// val = val.slice(5);

// val = val.indexOf('ogur')

// val=val[1];

//string replace

val = val.replace("furkan", "fogr")

//trim
val = val.trim()



val = hobbies.split(",")

console.log(val);
console.log(typeof val);