var name;
var surname;
var id;
var totalpay;
var gender;
var address = {
    city: 'antalya',
    district: 'Konyaaltı',
    body: 'Belediye binası karşısı :D'
}
var hobbies = ['Kitap', 'Sinema', 'Spor']



var order1 = '100';
var order2 = '150';
totalpay = Number(order1) + Number(order2);
console.log('siparişlerin toplamı =' + ' ' + totalpay);



var order3 = '100.2';
var order4 = '150.2';
totalpay = parseFloat(order3) + parseFloat(order4);
console.log('siparişlerin toplamı =' + ' ' + totalpay);



var order5 = '100.2';
var order6 = '150.2';
totalpay = parseInt(order5) + parseInt(order6);
console.log('siparişlerin toplamı =' + ' ' + totalpay);

var date = new Date()
const yearOfBirth = 2001
console.log(date.getFullYear() - yearOfBirth);

var course = 'Fogr Studios Company'

console.log(course.length);