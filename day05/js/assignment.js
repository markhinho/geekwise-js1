function getUsername(){
  var userFirst = prompt('Enter your username.').trim();
  welcome(properCap(userFirst));
}

function properCap(uf){
  uf = uf.charAt(0).toUpperCase() + uf.substr(1).toLowerCase();
  // welcome(uf);
  return uf;
}

function welcome(uf){
  alert(`Welcome ${uf}`);
}

console.log(properCap('MARK'));
//user clicks
//user is prompted to enter first name
//save users name and account for extra spaces
//ensure first letter is capped
//remaining are drop capped
//pass into another function
//alert weclome message with user name
//2 functions min
