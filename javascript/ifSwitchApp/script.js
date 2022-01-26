// var trafigeCikis = new Date('04/20/2019');
// trafigeCikis.setHours(0, 0, 0, 0);
// var trafikteMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafikteMs / (1000 * 60 * 60 * 24));

// if (trafiktekiGun <= 365) {
//     console.log('1.servis bakım süreniz geldi!');
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
//     console.log('2.servis bakım süreniz gelid!');
// } else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
//     console.log('3.servis bakım süreniz gelid!');
// } else {
//     console.log('Bilinmeyen bir süre!');

// }

// console.log(trafiktekiGun);

var result = prompt("Who's there ?");
console.log(result);

if (result == 'cancel') {
    console.log('cancelled');
} else if (result == 'admin') {
    var password = prompt('enter your password :')
    if (password == 'cancel') {
        console.log("Cancelled");
    } else if (password == "123456") {
        console.log('Welcome Admin');
    } else {
        console.log('wrong password');
    }

} else {
    console.log('I dont know you');
}