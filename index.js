const appName = "CodeVault";

const firstSnippet = {
  id: 1,
  title: "Simple Express Server",
  language: "Javascript",
  code: "const express = require('express');\nconst app = express();\n\napp.listen(3000, () => console.log('Server runiing));",
  tags: ["node.js", "express", "server"],
};

const fetchSnippet = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Snippet fetched from database!");
      resolve(firstSnippet);
    }, 1500);
  });
};

const displaySnippet = (snippetObject) => {
  console.log("--- Snippet Details ---");
  console.log(`ID: ${snippetObject.id}`);
  console.log(`Title: ${snippetObject.title}`);
  console.log(`Language: ${snippetObject.language}`);
  console.log(`Code: \n${snippetObject.code}`);

  console.log(`Tags: ${snippetObject.tags.join(", ")}`);
  console.log("-----------------------");
};

const startApp = async () => {
  try {
    console.log(`Welcome to ${appName}`);
    const snippet = await fetchSnippet();
    displaySnippet(snippet);
  } catch (error) {
    console.log("Failed to start the application:", error);
  }
};

startApp();
