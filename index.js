const http = require("http");
const PORT = 5000;
const appName = "CodeVault";

const snippets = [
  { id: 1, language: "JavaScript", code: 'console.log("Hello, World!");' },
  { id: 2, language: "Python", code: 'print("Hello, World!")' },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the CodeVault API!");
  } else if (req.url === "/api/snippets") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(snippets));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
