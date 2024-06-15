const readline = require("readline");

// Solutions 01
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
  let size = str.length;
  var temp = "";

  //   Function to save original string to temporary string
  for (let j = size - 1; j >= 0; j--) {
    temp += str.at(j);
  }
  return temp;
}

// console.log(FirstReverse());
// End of solution 01

// Solutions 02
// function firstReverse(str) {
//   return str.split("").reverse().join("");
// }

// const originalString = "coderbyte";
// const reversedString = firstReverse(originalString);
// console.log(reversedString);

// End of solution 02

// Solutions 03
// Add Readline Function
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your string : ", (input) => {
//   //   const result = FirstReverse(str);
//   const originString = FirstReverse(input);
//   console.log(originString);
// });

// function FirstReverse(str) {
//   //   const str = "I Love You";
//   let size = str.length;
//   var temp = "";

//   //   Function to save original string to temporary string
//   for (let j = size - 1; j >= 0; j--) {
//     temp += str.at(j);
//   }
//   return temp;
// }
// End of solution 03
