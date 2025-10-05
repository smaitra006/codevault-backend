const express = require("express");

const app = express();

const PORT = 5000;

const snippets = [
  { id: 1, language: "JavaScript", code: 'console.log("Hello, World!");' },
  { id: 2, language: "Python", code: 'print("Hello, World!")' },
];

app.get("/", (req, res) => {
  res.send("Welcome to the CodeVault API! Made with Express.");
});

app.get("/api/snippets", (req, res) => {
  res.json(snippets);
});

app.get("/api/snippets/:id", (req, res) => {
  const snippetId = parseInt(req.params.id);
  const snippet = snippets.find((s) => s.id === snippetId);
  if (!snippet) {
    return res.status(404).json({ message: "Snippet not found" });
  }
  res.json(snippet);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
