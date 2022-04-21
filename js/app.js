// "use strict";
let Name = prompt("Welcome to To-Do website, please Enter your name");
let gender = prompt("Enter your gender, please Enter male,female");
let age = prompt("Please Enter your age");
if (age == 0) {
  alert(`your age is Zero!! `);
}
let residence = confirm("Do you live in Jordan?");
let job = confirm("Are you a programmer?");
let maritalٍStatus = confirm("Are you Married?");

let response = [];
response.push(Name, gender, age, residence, job, maritalٍStatus);

function validation() {
  for (let i = 0; i < response.length; i++) {
    if (response[i] === "" || response[i] === null) {
      response[i] = "invalid";
    }
  }
}
validation();
console.log(response);

if (parseInt(age) < 0) {
  alert(`You don't come to this world yet!!! `);
}
let welcomeMessage = confirm("would you like to skip the welcome message");
if (!welcomeMessage) {
  if (gender == "male") alert(`Welcome to the website Mr. ${Name} `);
  else if (gender == "female") alert(`Welcome to the website Miss. ${Name} `);
  else alert(`Welcome to the website  ${Name} `);
}
