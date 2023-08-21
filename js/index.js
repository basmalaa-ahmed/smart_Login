var logInEmail= document.getElementById("logInEmail");
var logInPassword= document.getElementById("logInPassword");
var fillMsg= document.getElementById("fillMsg");
var logInBtn= document.getElementById("logInBtn");
var userName= document.getElementById("userName");
var userEmail= document.getElementById("userEmail");
var userPassword= document.getElementById("userPassword");
var userNameAlert = document.getElementById("userNameAlert");
var userEmailAlert = document.getElementById("userEmailAlert");
var userPasswordAlert = document.getElementById("userPasswordAlert");
var confirmMsg = document.getElementById("confirmMsg");
var accountExistMsg = document.getElementById("accountExistMsg");
var tryAgainMsg = document.getElementById("tryAgainMsg");
var wrongMsg= document.getElementById("wrongMsg");
var signUpBtn= document.getElementById("signUpBtn");
var usersNames = localStorage.getItem("usersSession");


var users = [];

if (localStorage.getItem("ourUsers") == null) {
  users = [];
} 
else {
  users = JSON.parse(localStorage.getItem("ourUsers"));
}
function signUp(){
    userInputsValidation();
    isExist();
    if(userInputsValidation()==true && isExist()==false){
        var user ={
            name: userName.value,
            email:userEmail.value,
            password:userPassword.value,
        }
        users.push(user);
        localStorage.setItem("ourUsers", JSON.stringify(users));
        confirmMsg.classList.remove("d-none");
        tryAgainMsg.classList.add("d-none");

       
      }
    else{
        tryAgainMsg.classList.remove("d-none");
    }
   
}


//validation Name
userName.onkeyup = function() {
    var userNameRejex = /[a-z A-z 0-9]{3,}/;
    if ( userNameRejex.test(userName.value) == true && userName.value != "")
     {
      userName.classList.add("is-valid");
      userName.classList.remove("is-invalid");
      userNameAlert.classList.add("d-none");
      return true;
    }
     else {
      userName.classList.add("is-invalid");
      userName.classList.remove("is-valid");
      userNameAlert.classList.remove("d-none");
      return false;
    }
  }
// validation Email
userEmail.onkeyup = function(){
    var userEmailRejex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/;
  if (
    userEmailRejex.test(userEmail.value) == true && userEmail.value != ""
  ) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    userEmailAlert.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    userEmailAlert.classList.remove("d-none");
    return false;
  }
}
//validation Password
userPassword.onkeyup = function(){
    var userPassrwordRejex = /^.{5,15}$/;
  if (
    userPassrwordRejex.test(userPassword.value) == true &&
    userPassword.value != ""
  ) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    userPasswordAlert.classList.add("d-none");
    return true;
  } else {
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    userPasswordAlert.classList.remove("d-none");
    return false;
  }
}
function userInputsValidation() {
    userName.onkeyup();
    userEmail.onkeyup();
    userPassword.onkeyup();
    if (
      userName.onkeyup() == true &&
      userEmail.onkeyup() == true &&
      userPassword.onkeyup() == true
    ) {
      return true;
    } else {
      return false;
    }
  }
//Exist mail
function isExist(){
    for (let i=0;i<users.length;i++){
        if(users[i].email.toLowerCase()==userEmail.value.toLowerCase()){
            userName.classList.remove("is-valid");
            userName.classList.add("is-invalid");
            userEmail.classList.remove("is-valid");
            userEmail.classList.add("is-invalid");

            userPassword.classList.remove("is-valid");
            userPassword.classList.add("is-invalid");

            accountExistMsg.classList.remove("d-none");
            return true;
        }
        
    }
    return false;
}

function log() {
    if (logInEmail.value == "" || logInPassword.value == "") {
      fillMsg.classList.remove("d-none");
      
    }
    else{
        fillMsg.classList.add("d-none");
        for (var i = 0; i < users.length; i++) {
            if (
              users[i].email.toLowerCase() == logInEmail.value.toLowerCase() &&
              users[i].password.toLowerCase() == logInPassword.value.toLowerCase()
            ) {
              localStorage.setItem("usersSession", users[i].name);
              location.href = 'welcome.html'
             
            }
            else{
                wrongMsg.classList.remove("d-none");

            }
            
          }
 
    }
    
    
  }

  function Logout() {
    localStorage.removeItem("usersNames");
}

  

 

