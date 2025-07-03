const readline = require("readline-sync");
class Person {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

function startGame() {
  let name1 = readline.question("Player 1 whats your name? ");
  let name2 = readline.question("Player 2 whats your name? ");

  const user1 = new Person(name1, 100);
  console.log("Player1: " + user1.name + " | Health: " + user1.health);
  const user2 = new Person(name2, 100);
  console.log("Player2: " + user2.name + " | Health: " + user2.health);

  while (user1.health > 0 || user2.health > 0) {
    fight(user1, user2);
    if (user2.health <= 0) {
      console.log(
        "Player 1 has won with " + user1.health + " health leftover!"
      );
      break;
    }
    fight(user2, user1);
    if (user1.health <= 0) {
      console.log(
        "Player 2 has won with " + user2.health + " health leftover!"
      );
      break;
    }
  }
}

function fight(attacker, opponent) {
  let decision = readline.question(
    attacker.name + " would you want to attack(A) or heal(H) yourself?"
  );
  if (decision === "A") {
    opponent.health = opponent.health - Math.floor(Math.random() * 20 + 5);
    console.log(
      opponent.name + " only has " + opponent.health + " health left!"
    );
  }
  if (decision === "H") {
    if (attacker.health !== 100) {
      attacker.health = attacker.health + Math.floor(Math.random() * 15 + 5);
      if (attacker.health > 100) {
        attacker.health = 100;
      }
      console.log(
        attacker.name + " now has " + attacker.health + " health points!"
      );
    } else {
      console.log("You can't go over 100 health points!");
    }
  }
}

startGame();
