const readline = require('readline'); 
// starts readline which is a node.js tool for input/output

//creates ability to input/output with readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Used to ask the question(s) & Calculate result, print to log
rl.question("Enter distance (kilometers): ", (kilometers) => {
  const miles = parseFloat(kilometers) * 0.621371;
  console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
  rl.close();
});
