// fileManager.js

const fs = require("fs");

console.log("=== File Manager Started ===");

const operation = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

console.log("Operation:", operation);
console.log("File:", fileName);

if (!operation || !fileName) {
  console.log("Invalid input.");
  console.log(
    "Usage: node fileManager.js <create|read|update|delete> <filename> [content]"
  );
  process.exit(1);
}

if (operation === "create") {

  console.log("Starting file creation...");

  fs.writeFile(fileName, content, (err) => {

    if (err) {
      console.log("Error creating file:", err.message);
      return;
    }

    console.log("File created successfully.");
    console.log("Execution completed.");
  });

} else if (operation === "read") {

  console.log("Starting file reading...");

  fs.readFile(fileName, "utf8", (err, data) => {

    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }

    console.log("File contents:");
    console.log(data);
    console.log("File reading completed.");
  });

} else if (operation === "update") {

  console.log("Starting file update...");

  fs.appendFile(fileName, "\n" + content, (err) => {

    if (err) {
      console.log("Error updating file:", err.message);
      return;
    }

    console.log("File updated successfully.");
  });

} else if (operation === "delete") {

  console.log("Starting file deletion...");

  fs.unlink(fileName, (err) => {

    if (err) {
      console.log("Error deleting file:", err.message);
      return;
    }

    console.log("File deleted successfully.");
  });

} else {

  console.log("Invalid operation.");
  console.log("Use: create, read, update, delete");
}