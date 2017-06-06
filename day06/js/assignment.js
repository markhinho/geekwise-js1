var firstbtn = document.getElementById('firstbtn');
// console.log(firstbtn);

var secondbtn = document.getElementsByTagName('button')[1];
// console.log(secondbtn);

var thirdbtn = document.querySelector('li:last-child button');
// console.log(thirdbtn);

function properCap(str){
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

var fullName = '';

// firstbtn.addEventListener('click', function(){
//   fullName += properCap(prompt('get first name')) + ' ';
// });
//
// secondbtn.addEventListener('click', function(){
//   fullName += properCap(prompt('get middle name')) + ' ';
// });
//
// thirdbtn.addEventListener('click', function(){
//   fullName += properCap(prompt('get last name'));
//   alert(fullName);
// });

firstbtn.addEventListener('click', getName);

secondbtn.addEventListener('click', getName);

thirdbtn.addEventListener('click', function(e){
// var that = this;
getName(e);
alert(fullName);
});


function getName(theother){
console.log(theother);
fullName += properCap(prompt('get ' + theother.originalTarget.innerText)) + ' ';
}
