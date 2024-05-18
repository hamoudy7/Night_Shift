function validation() {
  if (document.formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username";
    return false;
  } else if (document.formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "At least 6 letters";
    return false;
  } else if (document.formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your email";
    return false;
  } else if (document.formfill.password.value == "") {
    document.getElementById("result").innerHTML = "Enter your Password";
    return false;
  } else if (
    document.formfill.password.value !== document.formfill.cpassword.value
  ) {
    document.getElementById("result").innerHTML = "Password does not match";
    return false;
  } else if (document.formfill.cpassword.value == "") {
    document.getElementById("result").innerHTML = "Enter confirm Password";
    return false;
  } else if (document.formfill.password.value.length < 6) {
    document.getElementById("result").innerHTML = "password must be 6-digits";
    return false;
  } else if (
    document.formfill.cpassword.value !== document.formfill.password.value
  ) {
    document.getElementById("result").innerHTML = "Password does not match";
    return false;
  } else if (
    document.formfill.password.value == document.formfill.cpassword.value
  ) {
    popup.classList.add("open-slide");
    return false;
  }
}
var popup = document.getElementById("popup");
function closeslide() {
  popup.classList.remove("open-slide");
}
