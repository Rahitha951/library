let user = document.getElementById("name");
let error = document.getElementById("error");
let genre = document.getElementById("genre");
let gerror = document.getElementById("gerror");
let img = document.getElementById("img");
let ierror = document.getElementById("ierror");

function search(){
    let nameregexp = /^([a-zA-Z\ ]+)$/
    if(nameregexp.test(user.value)){
      error.innerHTML = "";
      user.style.border = "2px solid green";
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
      gerror.innerHTML = "";
      genre.style.border = "2px solid green";
      return true;
    }
    else{
      gerror.innerHTML = "Invalid";
      gerror.style.color = "red";
      genre.style.border = "2px solid red";
      return false;
  
    }
}
function check(){
    if(img.files.length != 0){
        ierror.innerHTML ="";
        return true;
    }
    else{
        ierror.innerHTML ="select an image";
        ierror.style.color = "red";
        return false;
    }
}
