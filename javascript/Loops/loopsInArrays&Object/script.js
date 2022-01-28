let cars = ['Bmw', 'Mercedes', 'Volvo'];
let people = [{
    firstName: 'Furkan',
    LastName: 'Ogur'
}, {
    firstName: 'Yaşar',
    LastName: 'Ogur'
}, {
    firstName: 'Fogr',
    LastName: 'Ogur'
}];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);

// }




//for-in
//Arrays
// for (let i in cars) {
//     console.log(`index : ${i} value : ${cars[i]}`)
// }





//Objects
// for (let i in people) {
//     console.log(`index : ${i} value : ${people[i].firstName}`)

// }


//foreach

// cars.forEach(function(item) {
//     console.log(item);

// });

// people.forEach(function(item) {
//     console.log(item.firstName);
// })



//map : returns an array


// let val = people.map(function(item) {
//     return item.firstName + ' ' + item.LastName
// });

// console.log(val);

let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function(n) {
    return n * n;
});

console.log(num);