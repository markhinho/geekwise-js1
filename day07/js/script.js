/*
var btn = document.querySelector('button');
var nav = document.querySelector('ul');
// console.log(btn);
btn.addEventListener('click', function(e){
  // console.log(this);
  // console.log(e.target.innerText);

})

//mouse enter
btn.addEventListener('mouseenter', function(e){
  console.log(e);
  e.target.style.backgroundColor = 'yellow';
})

//mouse leave
btn.addEventListener('mouseleave', function(e){
  console.log(e);
  e.target.style.backgroundColor = 'magenta';
})

window.addEventListener('scroll', function(e){
  console.clear();
  console.log(e.pageY);
  if(e.pageY > 45){
    nav.classList.add('vis');
  }
  else{
    nav.classList.remove('vis');
  }
});



// //keydown, keyup, keypress
// var setDiv = document.querySelector('div#set');
//
// setDiv.innerHTML = '<p>this is set</p>';
//
// var getDiv = document.querySelector("div#get");
// console.log(getDiv.textContent);
*/

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var inputText = document.querySelector('input[type="text"]');
// var inputPass = document.querySelector('input[type="password"]');


submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log(form);
  var formVals = [];

  for(var i = 0; i < form.length - 1; i++){
    // console.log(form[i].value);
    formVals.push(form[i].value);
  }
  console.log(formVals);
  // var text = inputText.value;
  // var pass = inputPass.value;
  // alert(text + ' ' + pass);
  // console.log(inputBox.value);
})





//listen for keypresses
//grab the keycode
//textContent or innerHTML to set the code to the window
//http://keycode.info
