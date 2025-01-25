const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter distance (kilometers): ", (kilometers) => {
  const miles = parseFloat(kilometers) * 0.621371;
  console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
  rl.close();
});
