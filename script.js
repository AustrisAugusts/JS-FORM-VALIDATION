"use strict";

function formValidation() {
  let name = document.forms["form"]["fname"].value;
  let email = document.forms["form"]["email"].value;
  let phone = document.forms["form"]["phone"].value;
  let message = document.forms["form"]["message"].value;
  (name === "") ? alert(`Name field is empty`) : console.log(name);
  (email === "") ? alert(`email field is empty`) : console.log(email);
  (phone === "") ? alert(`phone field is empty`) : console.log(phone);
  (message === "") ? alert(`message field is empty`) : console.log(message);
}
