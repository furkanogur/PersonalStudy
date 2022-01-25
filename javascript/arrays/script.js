let names = ["furkan", "ogur", "fogr", "yaşar"];

let years = [2001, 1920, 1915, 2012]

let mix = ["furkan", "ogur", 2001, null, undefined, ["sinema", "kitap", ]]




// //get array item
// console.log(names[0]);
// console.log(names[3]);

// //set array item
// names[names.length] = "emine";

// //add item

// // years.push(1900);
// years.unshift(1900);

// // remove item
// years.pop();
// years.shift();

// //indexof metodu
// let index = names.indexOf("furkan")
// console.log("index :" + index)

// //reverse
// names.reverse();

// //sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val)

//splice
// names.splice(0, 1);

//find

function over18(year) {
    let age = 2022 - year
    return age >= 18;
}

// let val = years.find(over18);


//filter


let val = years.filter(over18);

console.log(val);


console.log(names);
console.log(names.length);
console.log(typeof names);


// console.log(years);
// console.log(mix);