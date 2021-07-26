"use strict";

const validateForm = function() {
  const fName = document.forms["form"]["fname"].value;
  const email = document.forms["form"]["email"].value;
  const phone = document.forms["form"]["phone"].value;
  const message = document.forms["form"]["message"].value;
  const button = document.forms["form"]["submit"].value;
  console.log(fName, email, phone, message);


  button.addEventListener("click", function(){
    // See if input is not empty
    const notEmpty = str => !str.trim().length;

    // Input field check
    const fieldCheck = function(field) {
      field.addEventListener("input", function() {
        notEmpty(this.value) ? console.log(this.value) : console.log(`Please fill the ${field}`);
      });
    };
    fieldCheck(fName);
    fieldCheck(email);

    console.log(`Button clicked`);
  });
}
