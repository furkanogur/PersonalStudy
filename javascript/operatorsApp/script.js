let IndexFogr;
let IndexAda;



const kgFogr = 60;
const kgAda = 40;

const heightFogr = 1.76;
const heightAda = 1.50;


IndexAda = (kgAda) / (heightAda * heightAda);
IndexFogr = (kgFogr) / (heightFogr * heightFogr);


console.log(IndexAda.toFixed(2), IndexFogr.toFixed(3));


let adaHigerIndex = IndexAda > IndexFogr;
let fogrHigerIndex = IndexAda < IndexFogr;

console.log("Ada'nın kilo indeksi Fogr'ın kilo indexinden daha büyük: " + adaHigerIndex);

console.log("Fogr'ın kilo indeksi Ada'nın kilo indexinden daha büyük: " + fogrHigerIndex);


let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30.0) && (IndexAda <= 34.9);

console.log("Ada zayıf : " + AdaZayif);
console.log("Ada normal : " + AdaNormal);
console.log("Ada kilolu : " + AdaKilolu);
console.log("Ada sisman : " + AdaSisman);