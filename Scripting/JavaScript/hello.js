console.log("Hallo Welt");

const readline = require("readline-sync"); // Modul einbinden
function WelcomeUser() {
  let user = readline.question("Wie heisst du? "); // Benutzer wird gefragt
  console.log("Hallo " + user);

  console.log(1 + 1);
  let a = 18;
  let b = 122;
  console.log(a + b);

  let name = readline.question("Whats your name? ");
  console.log("Hello " + user);

  let age = readline.question("How old are you? ");
  console.log("Wow you are already " + age + "?!");
  let result1 = 22 > 17;
  if (age >= 18) console.log("You can already drive a car?! ");
  else console.log("But sadly you're still not old enough to drive a car. ");

  let adress = readline.question("Where do you live? ");
  console.log("I didn't know you live at " + adress + "! Thats so cool!");
  if (adress === "Grütstrasse 23") console.log("Wow! I also live there! ");
  else console.log("Thats disapointing, I thought we were neighbours! ");
}

WelcomeUser();

function WelcomeNoah() {
  let name = readline.question("Whats your Name? ");
  console.log("Hello " + name);
}

WelcomeNoah();
