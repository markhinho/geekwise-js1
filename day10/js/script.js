//IIFE
// (function(){



  xhr('/env.json', setVars);

  function xhr(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send(null);
    req.onload = function(){
      if(req.readyState === 4 && req.status === 200){
        callback(JSON.parse(req.responseText));
      }else{
        console.log('Error: ', req.statusText + ' ' + req.status);
      }
    };
  }

  function processReq(obj){
    console.log(obj);
  }

  var main = document.querySelector('main');

  function pageSetup(envs){

    var userUrl = 'https://api.github.com/users/markhinho?client_id='+myVars.get_id() + '&client_secret=' + myVars.get_secret();

    xhr(userUrl, getGithub);
  }

  function getGithub(obj){
    var ghH1 =  document.createElement('h1'),
      ghImg = document.createElement('img');
    ghH1.textContent = obj.login;
    ghImg.src = obj.avatar_url;

    main.append(ghH1, ghImg);
    // console.log(obj); <---to see object in console
  }

  var myVars;

  function setVars(envs){
    myVars = envVars();
    myVars.set_id(envs.clientId);
    myVars.set_secret(envs.clientSecret);

    console.log(myVars.get_id());
    console.log(myVars.get_secret());
    pageSetup();
  }

  var sample;
  //javasctript closure
  function envVars(data){
    var id, secret;
    return {
      set_id: function(data){
        id = data;
      },
      set_secret: function(data){
        secret = data;
      },
      get_id: function(){
        return id;
      },
      get_secret: function(){
        return secret;
      }
    }
  }

// }());
