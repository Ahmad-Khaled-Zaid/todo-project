// "use strict";
let Name = prompt("Welcome to To-Do website, please Enter your name");
let gender = prompt("Enter your gender, please Enter male,female");
let age = prompt("Please Enter your age");
if (age == 0) {
  alert(`your age is Zero!! `);
}
let residence = prompt("Do you live in Jordan?,Please Enter yes or no");
residence = residence.toLowerCase();
while (
  residence !== "yes" &&
  residence !== "no" &&
  residence !== "" &&
  residence !== null
) {
  residence = prompt("Do you live in Jordan?,Please Enter yes or no");
}
let job = prompt("Are you a programmer?,Please Enter yes or no");
while (job !== "yes" && job !== "no" && job !== "" && job !== null) {
  job = prompt("Are you a programmer?,Please Enter yes or no");
}
let maritalٍStatus = prompt("Are you Married?,Please Enter yes or no");
while (
  maritalٍStatus !== "yes" &&
  maritalٍStatus !== "no" &&
  maritalٍStatus !== "" &&
  maritalٍStatus !== null
) {
  maritalٍStatus = prompt("Are you Married?,Please Enter yes or no");
}
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
