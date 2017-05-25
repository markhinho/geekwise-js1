//Gather info from user. First and Last names
// var userFirst = prompt('What is your first name?').trim();
// console.log(userFirst);
//
// var firstLetter = userFirst.charAt(0);
// console.log(firstLetter);
//
// var firstLetterCap = firstLetter.toUpperCase();
// console.log(firstLetterCap);
//
// var remainLetters = userFirst.substring(1);
// console.log(remainLetters);
//
// var remainLettersDrop = remainLetters.toLowerCase();
//
// console.log(firstLetterCap+remainLettersDrop);


// OR

var firstName = prompt('What is your first name?').trim();
var lastName = prompt('What is your last name?').trim();

console.log(firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase(), lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase());
