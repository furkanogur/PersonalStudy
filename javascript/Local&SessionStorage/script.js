// //Local Storage
let val;
//set item

const firstName = localStorage.setItem('firstName', 'Furkan');
const lastName = localStorage.setItem('lastName', 'Ogur');
let hobies = ['movies', 'software', 'reading', 'music', 'sport']

//get item 
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');


//remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

//clear
// localStorage.clear();

//set array to storage
localStorage.setItem('hobies', JSON.stringify(hobies));

val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);
console.log(localStorage);

//*********************************************************** */
//* local ile session kullanımları tamamen aynı
//*********************************************************** */

// //Session Storage
// const city = sessionStorage.setItem('city', 'Antalya');
// const country = sessionStorage.setItem('country', 'Turkey');

// console.log(sessionStorage);


/** Session storage tarayızı açıkkaldığısürece bilgileri local de saklar  *tarayıcı kapanınca silinir.
 
 *  Local storage ise bilgileri url ile ilişikilendirir tarayıcıyı kapatım açsan da bilgiler localden silinmez. manule silmek gerekir  
 *  
  
*/