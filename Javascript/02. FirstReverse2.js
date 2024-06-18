const readline = require("readline");

// Add Readline Function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your string : ", (input) => {
  //   const result = FirstReverse(str);
  const originString = FirstReverse(input);
  console.log(originString);
});

function FirstReverse(str) {
  return str.split("").reverse().join("");
}
