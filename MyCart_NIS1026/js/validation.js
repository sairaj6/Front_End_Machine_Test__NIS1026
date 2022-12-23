

let nameError = false;
let EmailError = false;
let MobileError = false;
let PasswordError = false;
let ConfirmError = false;

document.getElementById("txt_name").onblur = checkName;
document.getElementById("txt_email").onblur = checkEmail;
document.getElementById("txt_mobile").onblur = checkMobile;
document.getElementById("txt_password").onchange = checkPassword;
document.getElementById("txt_confirmpassword").onchange = confirmPassword;



document.getElementById("btn_sign_up").onclick = function ($event) {
  checkName(),
    checkEmail(),
    checkMobile(),
    checkPassword(),
    confirmPassword();

  if (
    nameError == false &&
    EmailError == false &&
    MobileError == false &&
    PasswordError == false &&
    ConfirmError == false

  )
  {
    alert("data submitted successfully");
    window.location.replace()
  }
  else
   $event.preventDefault();
};

function checkName() {
  let pattern = /^[a-z_A-Z' ]+$/;

  let name = document.getElementById("txt_name").value;
  if (name.length === 0) {
    document.getElementById("spn_name").innerHTML = "enter name";
    nameError = true;
  } else if (!name.match(pattern)) {
    document.getElementById("spn_name").innerHTML = "enter valid name";
    nameError = true;
  } else {
    document.getElementById("spn_name").innerHTML = "";
    nameError = false;
  }
}

function checkEmail() {
  let pattern = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let email = document.getElementById("txt_email").value;
  if (email.length === 0) {
    document.getElementById("spn_email").innerHTML = "enter email";
    EmailError = true;
  } else if (!email.match(pattern)) {
    document.getElementById("spn_email").innerHTML = "enter valid email";
    EmailError = true;
  } else {
    document.getElementById("spn_email").innerHTML = "";
    EmailError = false;
  }
}

function checkMobile() {
  let pattern = /^[0-9]{10}$/;
  let mobile = document.getElementById("txt_mobile").value;

  if (mobile.length === 0) {
    document.getElementById("spn_mobile").innerHTML = "enter mobile";
    MobileError = true;
  } else if (!mobile.match(pattern)) {
    document.getElementById("spn_mobile").innerHTML = "enter valid mobile";
    MobileError = true;
  } else {
    document.getElementById("spn_mobile").innerHTML = "";
    MobileError = false;
  }
}


function checkPassword()
{
    let pattern = /^[a-z_A-Z_0-9]+$/;
    let password = document.getElementById("txt_password").value;

    if (password.length < 4 ) {
        document.getElementById("spn_password").innerHTML = "password should be more than 4 digits";
        PasswordError = true;
      } else if (!password.match(pattern)) {
        document.getElementById("spn_password").innerHTML = "enter valid Password";
        PasswordError = true;
      } else {
            document.getElementById("spn_password").innerHTML = "";
            PasswordError = false;
        }

}
function confirmPassword()
{
    let password = document.getElementById("txt_password").value;
    let confirmpassword = document.getElementById("txt_confirmpassword").value;

    if(password !== confirmpassword)
        {
           
            document.getElementById("spn_confirmpassword").innerHTML = "enter correct Password";
            ConfirmError = true;
        }
    else{
            document.getElementById("spn_confirmpassword").innerHTML = "";
            ConfirmError = false;

        }

}
