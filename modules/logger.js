// logger.js

function getTimestamp() {
  return new Date().toLocaleString();
}

function log(message) {
  console.log(`\x1b[36m[${getTimestamp()}] ${message}\x1b[0m`);
}

function success(message) {
  console.log(`\x1b[32m[${getTimestamp()}] SUCCESS: ${message}\x1b[0m`);
}

function error(message) {
  console.log(`\x1b[31m[${getTimestamp()}] ERROR: ${message}\x1b[0m`);
}

function warning(message) {
  console.log(`\x1b[33m[${getTimestamp()}] WARNING: ${message}\x1b[0m`);
}

function info(message) {
  console.log(`\x1b[34m[${getTimestamp()}] INFO: ${message}\x1b[0m`);
}

module.exports = {
  log,
  success,
  error,
  warning,
  info
};