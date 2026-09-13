// server.js

const http = require("http");

const PORT = 3000;

console.log("Creating server...");

const server = http.createServer((req, res) => {

  console.log("Request received:", req.method, req.url);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {

    console.log("Home route");

    res.statusCode = 200;
    res.end("Welcome to my Node.js server!");

  } else if (req.url === "/about") {

    console.log("About route");

    res.statusCode = 200;
    res.end("This is the About page.");

  } else if (req.url === "/contact") {

    console.log("Contact route");

    res.statusCode = 200;
    res.end("Contact us at contact@example.com");

  } else {

    console.log("Invalid route");

    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});