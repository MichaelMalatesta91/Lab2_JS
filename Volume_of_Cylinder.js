const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the diameter of the cylinder base (meters): ", (diameterInput) => {
  const diameter = parseFloat(diameterInput);

  rl.question("Enter the height of the cylinder (meters): ", (heightInput) => {
    const height = parseFloat(heightInput);

    const radius = diameter / 2;
    const volume = Math.PI * Math.pow(radius, 2) * height;

    console.log(`The volume of the cylinder is ${volume.toFixed(2)} cubic meters.`);
    rl.close();
  });
});
