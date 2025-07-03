console.log("Miniquiz");

const readline = require("readline-sync");

let Points = 0;

function Miniquiz() {
  let time = readline.question(
    "How long does the light of the sun take to the earth? "
  );
  if (time === "8 minutes") {
    Points = Points + 1;
  }
  console.log("You have " + Points + " points!");

  let pig = readline.question("What do you call a male pig? ");
  if (pig === "Boar") {
    Points = Points + 1;
  }
  console.log("You have " + Points + " points!");

  let mountain = readline.question("What is the tallest mountain on earth? ");
  if (mountain === "Mount Everest") {
    Points = Points + 1;
  }
  console.log("You have " + Points + " points!");
}

function Welcome() {
  let user = readline.question("What is your name? ");
  let i = 0;
  while (i < 3) {
    console.log("Hey " + user + "!");
    i++;
  }
}

function Calculator() {
  let Solution = 0;
  let numbers = 0;
  while (numbers !== "stop") {
    numbers = readline.question("Please type in Numbers. ");
    Solution = Solution + parseInt(numbers);
    console.log("The solution is " + Solution + "!");
  }
}

Calculator();
