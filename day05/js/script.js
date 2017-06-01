// if
//== equal to
//=== strict equal to
// >, <, >=, >= (less than or more than)
//! not
//!= not equal
//!== not equal too (strict)
//&& and
// || or
// var age = parseInt(prompt('please enter age'));
// console.log(!!age);
// var gender = prompt('are you a male or female?');
//
// if(age >= 21 && gender == 'female'){
//   console.log('welcome');
// }else if(age < 21){
//   console.log('too young');
// }else{
//   // console.log('exactly');
// }
//
// if(!age){
//   prompt('enter your age');
// }

// //switch statement
// var today = new Date().getDay();
//
// switch (today){
//   case 0:
//     console.log('its still weekend');
//     break;
//   case 1:
//     console.log('it is monday');
//     break;
//   default:
//     console.log('it is not monday');
// }
//
// //ternary operator
// var age = prompt('what is your age');
//
// age >= 21 ? console.log('welcome') : console.log('nope');
// //if (age >= 21){console.log('welcome');}else{console.log('nope');}





//javascript functions
/*
//function declaration
function myName(name, age){ // <---parameters
  alert(name + ' is ' + age + ' years old');
  //or
  //interpolation `${}`
  alert(`${name} is ${age} years old`)
}

myName('mark', 24); //<---- arguments

//function expression
var myCar = function(car, year){
  alert(`${car} ${year}`)
}('BMW', '1999');
*/


//with 2 prompts, get users first and last name
//write a function that alerts a message welcoming them

var userName = function(firstName, lastName){
  var fn = prompt(`${firstName}`)
  var ln = prompt(`${lastName}`)
  alert(`welcome ${fn} ${ln}`)
}('enter first name', 'enter last name');


//when button is clicked run function and alert name


//user clicks
//user is prompted to enter first name
//save users name and account for extra spaces
//ensure first letter is capped
//remaining are drop capped
//pass into another function
//alert weclome message with user name
//2 functions min
