/*
var myName = "Mark Ghabrial"

console.log(myName);

//length method
console.log(myName.length);

//.charAt()
console.log(myName.charAt(0));
console.log(myName.charAt(250));


//.indexOf()
console.log(myName.indexOf('G'));
console.log(myName.indexOf('a'));

//.lastIndexOf()
console.log(myName.lastIndexOf('a'));

//.concat()
console.log(myName.concat(' peanuts'));

//.substring() -upto but not including
console.log(myName.substring(0, 3));
console.log(myName.substring(5, 13));
console.log(myName.substring(3));

//substr()  -upto and includes
console.log(myName.substr(5, 12));
console.log(myName.substr(5));

//.toUpperCase()
console.log(myName.toUpperCase());

//.toLowerCase()
console.log(myName.toLowerCase());

//.trim()
var newUser = '           yoda         ';
console.log(newUser.trim());

//regular expressions
\b[A-Z0-9,_%]@[A-Z0-9].[A-Z]\b
*/




//Arrays - identified by []
var sodas = ['pepsi', 'coke', 'mountain dew'];
//console.log(sodas);
//console.log(Array.isArray(sodas));



//.push  -add to end
var colors = ['red', 'orange', 'purple'];
  var arrLength = colors.push('green');
  //console.log("the new array is ", colors);
  //console.log("the array length is", arrLength);

//.unshift -add to beginning
var  arrLength = colors.unshift('pink');
  //console.log("new array ", colors);
  //console.log("new array length is ", arrLength);

//.pop -remove from end
var item = colors.pop()
//console.log("item is ", item);
//console.log("the new array is ", colors);
//console.log("the new length is", colors.length);

//.shift -remove from beginning
item = colors.shift();
//console.log("Item is ", item);
//console.log("New array is ", colors);
//console.log("array length is ", colors.length);


// //.indexOf()
// console.log(colors.indexOf('red'));
//
// //.lastindexOf()
// console.log(colors.lastIndexOf('orange'));
//
// //.splice() -remove or add Items
// var removeItem = colors.splice(1, 2);
// console.log(colors);
// console.log(removeItem);
//
// var addItems = colors.splice(1, 0, 'green', 'blue');
// console.log(colors);
// console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
//remove green and add indigo
//console.log(newColors);



var removeGreen = newColors.indexOf('green');
newColors.splice(removeGreen, 1, 'indigo');
//console.log(newColors);

//.slice -upto not including
var moreColors = newColors.slice(0, 3);
//console.log(moreColors);

//.reverse()
var revColors = newColors.reverse();
// console.log(newColors);
// console.log(revColors);


newColors.sort();
console.log(newColors);

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();
console.log(names);


//bubble sort
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});
console.log(points);

// for loop
// for(var i = 0; i < newColors.length; i++){
//   console.log('my fav color is ', newColors[i]);
// }
var modColors = newColors.map(function(e, i){
  console.log(e);
  //console.log(i);
  console.log('my fav color is ', e);
});
console.log(modColors);


var modpoints = points.map(function(e){
  return e * 2;
});
console.log(modpoints);
