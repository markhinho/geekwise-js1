//var userAge = prompt("Enter your age");
//console.log(userAge + 12);

//string object
// var myString = 'this is a string'; //string literal
// var newString = new String ('this is also a string');
// console.log(newString);
//
// //number object
// var numb =7;
// var numbObj = new Number (7);
// console.log(numbObj);
//
// //Float Object
// var float = 5.9876544;
// console.log(float);
//
// //boolean object
// var bool = true;
// console.log(bool);
//
//
// //array object
// var arr = ['red', 'orange', 'green'];
// var numbArr = [0, 1, 2, 3];
// console.log(numbArr[1]+[2]);
// console.log(arr[0] + arr[2]);
//
// //object object
// var myCar = {
//   make: "BMW",
//   model: "328i",
//   year: "1992"
// };
// console.log(myCar.year);
//
// //math object
//   //round
// var num1 = 5.99999;
// // console.log(Math.round(num1));
// // console.log(Math.floor(num1));
// // console.log(Math.ceil(num1));
// var rand = Math.random();
// rand = rand*10;
// rand = Math.round(rand);
// console.log(rand);
//
//
// //date object
//
// var theDate = new Date();
// console.log(theDate.getFullYear());
//
// //getDay = day of the week -0 based
// //getDate = day of the month
// //getFullYear = year -0 based
// //getMonth = month
//
// if(theDate.getDay() === 0){
//   console.log('sunday');
// }else if (theDate.getDay() === 1){
//   console.log('monday');
// }else if (theDate.getDay() === 2){
//   console.log('tuesday');
// }else if (theDate.getDay() === 3){
//   console.log('wednesday');
// }else if (theDate.getDay() === 4){
//   console.log('thursday');
// }else if (theDate.getDay() === 5){
//   console.log('friday');
// }else if (theDate.getDay() === 6){
//   console.log('saturday');
// }
//
// //OR
//
// var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myDate);
//
// var myBday = new Date(1992, 10, 04);
// console.log(myBday);
//
// var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
// var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
// var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});
//
// console.log(myBmon + ' ' + myBdate + ', ' + myByear);

//prompt user for 3 individual items
//ask user for month
var bMonth = parseInt(prompt('what is your birth month'))-1;

//ask user for birth day
var bDay = parseInt(prompt('what is your birth day'));

//ask user for birth year
var bYear = parseInt(prompt('what is your birth year'));


var userBday = new Date(bYear, bMonth, bDay);

var bDay = userBday.toLocaleString('en-us', {day: '2-digit'});
var bMonth = userBday.toLocaleString('en-us', {month: 'short'});
var bYear = userBday.toLocaleString('en-us', {year: '2-digit'});

console.log('User birthday =' + ' ' + bMonth + ' ' + bDay + ', ' + bYear);


//sources
//MDN Mozilla Developer Network
//W3schools
//Date object, math object, strings, numbers, arrays...etc
