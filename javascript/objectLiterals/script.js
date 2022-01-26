let val;

let person = {
    fistName: 'Furkan',
    lastName: 'Ogur',
    age: 21,
    hobbies: ['music', 'software'],
    address: {
        city: 'Antalya',
        country: 'Turkey',
    },

    getBirthYear: function() {
        return 2022 - this.age;
    }

};



val = person;
val = person.fistName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
console.log(typeof person);


let people = [{
    firstName: 'Furkan',
    lastName: 'Ogur',
}, {
    firstName: 'Yaşar',
    lastName: 'Ogur',
}, {
    firstName: 'Fogr',
    lastName: 'Ogur',
}];

val = people[2];
val = people[2].firstName;


for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);

}


// console.log(val);
// console.log(typeof people);