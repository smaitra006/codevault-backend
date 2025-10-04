const appName = "CodeVault";
let currentUser = null;
const isOnline = true;

console.log(`Starting ${appName}...`);

if (isOnline) {
  console.log("System is online. Ready to accept connections.");
  currentUser = "Admin";
  console.log(`Current user set to: ${currentUser}`);
} else {
  console.log("System is offline");
}
