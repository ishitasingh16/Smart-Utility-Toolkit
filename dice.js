// dice.js

const crypto = require("crypto");

console.log("=== Dice Simulator ===");

function rollDice() {
  // 1 is included, 7 is excluded
  return crypto.randomInt(1, 7);
}

const numberOfRolls = Number(process.argv[2]) || 1;

console.log("Number of rolls:", numberOfRolls);

for (let i = 1; i <= numberOfRolls; i++) {

  const diceValue = rollDice();

  console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}

console.log("=== Simulation Finished ===");