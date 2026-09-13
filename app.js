// app.js

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.log("Application started.");

const number = 10;

logger.log(`Checking whether ${number} is even.`);

if (isEven(number)) {
  logger.success(`${number} is even.`);
} else {
  logger.warning(`${number} is odd.`);
}

logger.log("Application finished.");