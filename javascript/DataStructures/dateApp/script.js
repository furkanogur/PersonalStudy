// var date = new Date();

// console.log(date.getDate(), date.getMonth() + 1, date.getUTCFullYear());




// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2013, 7, 24, 14, 50, 10);

// console.log(dtA);
// console.log(dtB);


// var dtC = new Date('1/1/1990');
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth - 1);

// console.log(dtC)


// var start = new Date('1/1/1990');
// var end = new Date('2/10/1992');

// var ms = end - start;
// var sn = ms / 1000;
// var dk = sn / 60;
// var saat = dk / 60;
// var day = saat / 24;

// console.log('Milisecond :' + ms);
// console.log('Second :' + sn);
// console.log('minute :' + dk);
// console.log('hour :' + saat);
// console.log('day :' + day);



var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);


// console.log(birthday.getTime());
// console.log(Date.now());

var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1)
};
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);