# Smart Utility Toolkit

A beginner-friendly Node.js project demonstrating the use of core Node.js concepts and built-in modules through small practical applications. The project focuses on command-line arguments, custom modules, HTTP routing, file management, randomness, and reusable logging.

## 📁 Project Structure

```text
node-practical/
├──modules/
├         ├──isEven.js
├         ├── logger.js
├── app.js
├── calculator.js
├── server.js
├── fileManager.js
├── dice.js
└── README.md
```

## 📄 File Descriptions

### `calculator.js`

A command-line calculator that uses `process.argv` to accept an operation and two numbers. It supports addition, subtraction, multiplication, and division. Invalid operations and invalid input are handled with appropriate terminal messages.

Example:

```bash
node calculator.js add 10 5
```

### `app.js`

The main demonstration file for the custom modules. It imports `isEven.js` and `logger.js` using `require()` and demonstrates their reusability.

### `isEven.js`

A custom reusable module containing an `isEven()` function. It checks whether a given number is even and exports the function using `module.exports`.

### `logger.js`

A reusable logging module that provides `log()`, `success()`, `error()`, `warning()`, and `info()` functions. It also adds timestamps and colored terminal output using ANSI escape codes.

### `server.js`

Creates a basic HTTP server using Node.js's built-in `http` module. It runs on a custom port and provides different responses for `/`, `/about`, and `/contact`. Invalid routes return a 404 response.

### `fileManager.js`

Implements basic file management using the `fs` module. It supports creating, reading, updating, and deleting files through `writeFile()`, `readFile()`, `appendFile()`, and `unlink()`.

### `dice.js`

A random dice simulator using the `crypto` module. It generates values from 1–6 and supports multiple rolls using command-line arguments and loops.

## ▶️ Running the Project

```bash
node calculator.js add 10 5
node app.js
node server.js
node fileManager.js create test.txt "Hello Node.js"
node dice.js 5
```

## 🛠️ Technologies

* Node.js
* JavaScript
* `process.argv`
* `http`
* `fs`
* `crypto`
* CommonJS modules
* ANSI terminal colors

No external npm packages are required.
