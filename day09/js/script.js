var myCar = {
  make: 'BMW',
  model: '328i',
  year: 1999,
};

var myOtherCar = {
  make: 'BMW',
  model: '328i',
  year: 2005,
};


function Car(userMake, userModel, userYear, userColor){
  this.doors = 2;
  this.make = userMake;
  this.model = userModel;
  this.year = userYear;
  this.color = userColor;
}

var myBmw = new Car('BMW', '328i', '1999', 'silver');
var myOtherBmw = new Car('BMW', '328i', '2005', 'black')

console.log(myCar);
console.log(myBmw);
console.log(myOtherBmw);


//create a person object
//choose 5 traits
//create 2 new instances

function Person(userHeight, userBuild, userEyeColor, userSkinTone, userAccent){
  this.height = userHeight;
  this.build = userBuild;
  this.eyeColor = userEyeColor;
  this.skinTone = userSkinTone;
  this.accent = userAccent;
}

var person1 = new Person('6 feet', 'fit', 'hazel', 'dark', 'british');

var person2 = new Person('5 feet 7inch', 'fat', 'green', 'brown', 'southern');

console.log(person1);
console.log(person2);

// //setTimeOut
// function sayHello() {
//   alert('Hello');
// };

// //function delay
// function delay(){
//   setTimeout(sayHello, 4000);
// }
// function sayHello(){
//   alert('hello');
// }

// //set interval
// var greeting = setInterval(sayHi, 500);
// var greet = 0;
// function sayHi(){
//   greet++;
//   console.log('hi  ' + greet);
// }

var btns = document.querySelectorAll('button');
var timer;
for(let btn of btns){
  btn.addEventListener('mouseover', function(evt){
    // console.log(this);
    timer = setTimeout(function(){
      getBtn(evt);
    },1000);
  });

  btn.addEventListener('mouseout', function(evt){
    clearTimeout(timer);
  })
}
function getBtn(evt){
  console.log(evt.target);
  evt.target.style.color = 'magenta';
  evt.target.style.fontSize = '200%';
}

//target the figure
// target figcaption and display:none; by default
//on mouseenter, after 500ms figcaption display:block
//visibility:hidden; & visibility: visible;
//opacity
//if mouse leaves before 500ms, clear the timeout

var figure = document.querySelector('figure')
var figcaption = document.querySelector('figcaption')
var timer;

figure.addEventListener('mouseover', function(evt){
  timer = setTimeout(function(){
    showCaption(evt);
  },500);
figure.addEventListener('mouseout', function(evt){
  clearTimeout(timer);
  })  
});

function showCaption(evt){
  figcaption.classList.add('display');
}
