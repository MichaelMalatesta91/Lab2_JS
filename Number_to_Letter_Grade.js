const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the numeric grade: ", (input) => {
  const numericGrade = parseFloat(input);
  let letterGrade;

  if (numericGrade >= 90) {
    letterGrade = 'A';
  } else if (numericGrade >= 80) {
    letterGrade = 'B';
  } else if (numericGrade >= 70) {
    letterGrade = 'C';
  } else if (numericGrade >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  console.log(`The letter grade for ${numericGrade} is ${letterGrade}.`);
  rl.close();
});
``
