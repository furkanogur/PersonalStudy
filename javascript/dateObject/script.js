let d = new Date();
let birthday = new Date(2001, 10, 27)

//set Methods
d.setFullYear(2077);
d.setMonth(3);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);
d.getSeconds(20);
//get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());
console.log(d.getMinutes());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);