const readline = require("readline");

function FirstFactorial(number) {
  var factorial = 1;

  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
  // return number === 1 ? 1 : number * FirstFactorial(number - 1); // the best solutions
}

// add readline function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number : ", (input) => {
  // console.log(`Your number is : ${input}`);
  const number = parseInt(input);

  const result = FirstFactorial(number);
  console.log(result);
  rl.close();
});

// FirstFactorial(readline());
