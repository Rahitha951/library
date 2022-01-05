let title = document.getElementById("title");
let titleerror = document.getElementById("titleerror");
let user = document.getElementById("name");
let error = document.getElementById("error");
let genre = document.getElementById("genre");
let terror = document.getElementById("terror");
let img = document.getElementById("img");
let imgerror = document.getElementById("imgerror");

function checker(){
    let nameregexp = /^([a-zA-Z\ ]+)$/
    if(nameregexp.test(title.value)){
      titleerror.innerHTML = "";
      title.style.border = "2px solid blue";
      return true;
    }
    else{
      titleerror.innerHTML = "Invalid";
      titleerror.style.color = "red";
      title.style.border = "2px solid red";
      return false;
  
    }
}

function search(){
    let nameregexp = /^([a-zA-Z\ ]+)$/
    if(nameregexp.test(user.value)){
      error.innerHTML = "";
      user.style.border = "2px solid blue";
      return true;
    }
    else{
      error.innerHTML = "Invalid";
      error.style.color = "red";
      user.style.border = "2px solid red";
      return false;
  
    }
}

function validate(){
    let nameregexp = /^([a-zA-Z\, ]+)$/
    if(nameregexp.test(genre.value)){
      terror.innerHTML = "";
      genre.style.border = "2px solid green";
      return true;
    }
    else{
      terror.innerHTML = "Invalid";
      terror.style.color = "red";
      genre.style.border = "2px solid red";
      return false;
  
    }
}
function check(){
    if(img.files.length != 0){
        imgerror.innerHTML ="";
        return true;
    }
    else{
        imgerror.innerHTML ="Select image";
        imgerror.style.color = "red";
        return false;
    }
}
