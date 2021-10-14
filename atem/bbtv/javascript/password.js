//hide or show password
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//hide or show confirm password
function confirmX() {
    var y = document.getElementById("confirm");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  //conpare password and confirm password to see if it matches
  var password = document.getElementById("password");
 confirm_password = document.getElementById("confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;