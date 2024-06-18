const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter your number : ", (input) => {
  const XVIDEOS = triangleStar(input);
  // console.log(XVIDEOS);
});

const triangleStar = (value) => {
  for (let i = 1; i <= value; i++) {
    // console.log(i);
    console.log(i + "" + "* ".repeat(i));
    // for (let j = i; j <= value; j++) {
    //   // console.log(repeat(j));
    //   console.log(i + "*".repeat(i));
    // }
  }
};
