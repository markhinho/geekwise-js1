// //write a function that returns a random number from 0-10
// //write a function that alerts a random number
// function alertRand(){
//   alert(betweenNumbers());
//
// }
//
// function betweenNumbers(zt){
//   var rand = Math.floor(Math.random() * 11)
//   return rand;
// }


//create function asking user for name
//properCap
//function asking if there are more names

/*
var fullName = '';

function userName(){
  var userFirst = prompt('what is your name?');
  alertName( getMore( properCap(userFirst) ) );
}
userName();

function properCap(un){
  return un.charAt(0).toUpperCase() + un.substr(1).toLowerCase();
}

function getMore(un2){
  fullName += `${un2} `;
   if(confirm('more names?')){
     userName();
  }else{
    return fullName;
  }
}

function alertName(str){
  if(str !== 'undefined'){
    alert(str);
  }
}
*/



//Targeting DOM Elements
//by ID
var myH1 = document.getElementById('hdr1');
//by Tag Name
var myP = document.getElementsByTagName('p')[0];
//by class
var myAs = document.getElementsbyClassName('a');
//query selector
var h1 = document.querySelector('.class'); //or # for ID....etc
console.log(myH1);
console.log(myP);

myH1.addEventListener('click', function(){
  // this.style.color = 'red';
  // myH1.style.paddingTop = '50px';
  // myH1.style.fontSize = '100px';
  // console.log(this);
  // myP.style.color = 'magenta';
  myP.classList.toggle('red');
});
