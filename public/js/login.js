
   var regexName= /^[a-zA-Z]+$/;
   var regexEmail=/^[a-zA-z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
   var isValidEmail=false;
   var isValidCreatePW=false; 
   
   function onLoad(){
       var emailWarning=document.getElementById("emailWarning");
       var createWarning=document.getElementById("createWarning");
   }
   function onSubmitClick(){
       var email=document.getElementById("email").value;
   if(!regexEmail.test(email)&& email !=""){
       emailWarning.classList.remove("warning-hide");
       emailWarning.setAttribute('title','invalid email address');
       isValidEmail=false;
   }
   
   
   else if(regexEmail.test(email)){
       emailWarning.classList.add("warning-hide");
       isValidEmail=true;
   }
   else if(email==""){
       emailWarning.classList.remove("warning-hide");
       emailWarning.setAttribute('title','email is required');
       isValidEmail=false;
   }
   
   var createPW=document.getElementById("createPW").value;
   if(createPW ==""){
       createWarning.classList.remove("warning-hide");
       createWarning.setAttribute('title','Password cannot be empty');
       isValiCreatePW=false; 
   }
   else if(createPW.length <8){
       createWarning.classList.remove("warning-hide");
       createWarning.setAttribute('title','Length of the character must be greater than 7 characters');
       isValiCreatePW=false; 
   }
   else{
       createWarning.classList.add("warning-hide");
       isValiCreatePW=true; 
   }
   if
   (isValidEmail&&
       isValiCreatePW){
        alert("Login Success");
           document.getElementById(signup-form).reset();
       }
   
       }
       function onCancelClick(){
           
           emailWarning.classList.add("warning-hide");
          
           createWarning.classList.add("warning-hide");
          
       }