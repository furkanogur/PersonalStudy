//Global Scopes

var ad = 'Furkan';
var age = 20


function logName() {
    var age = 19
    var ad = 'Ogur';
    console.log('function scope', ad, age);
}


if (true) {
    var age = 30;
    console.log('block scope', ad, age);
}
console.log(age);

logName();
console.log(ad);


// Fonksiyonlar kendi scope larını oluşturur.
// Block'lar yeni scope oluşturmaz.
//ES6 ile gelen let ve const block scope oluşturur.

console.log('******************************');


if (true) {
    var model = 'Bmw';
    let year = 2022;
    const color = 'Black';
    console.log('block scope', model, year, color);
}
console.log(model);
// console.log(color);
// console.log(year);
//console.log('block scope', model, year, color);

var i = 1;
for (let i = 0; i < 10; i++) {
    console.log('i', i)
}
console.log(i);