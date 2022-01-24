var num = 15.123456789;

console.log(num.toPrecision(3));

console.log(num.toFixed(3));

console.log(Math.round(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

console.log(Math.min(1, 2, 3, 10, 56, 20));

console.log(Math.max(1, 2, 3, 10, 56, 20));

var min = 50;
var max = 50;

console.log(Math.floor(min + Math.random() * (max - min)));




var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiSuresi * mesaiUcreti);

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * .25;

console.log(toplamNetMaas.toFixed(2));



console.log(toplamBrutMaas);