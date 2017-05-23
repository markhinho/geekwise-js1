var usernameArray = [];
var usernames = '';
usernameArray.unshift(usernames);
console.log(usernameArray);

function getUser(){
  usernames = prompt('please enter another username');
  usernameArray.push(usernames);
  console.log(usernameArray);
}

function removeUser(){
  usernameArray.shift();
  console.log(usernameArray);
}
