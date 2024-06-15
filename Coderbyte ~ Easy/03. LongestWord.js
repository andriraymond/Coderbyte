const { read } = require("fs");
const readline = require("readline");

//  Add Readline Function
const sen = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

sen.question("Enter string : ", (input) => {
  const originalString = LongestWord(input);
  console.log(originalString);
  sen.close();
});

// function LongestWord(sen) {
function LongestWord(sen) {
  //   let sen = "fun&!! time";
  sen = sen.replace(/[^a-zA-Z ]/gi, "");

  var word = 0;
  var words = sen.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word) {
      sen = words[i];
      word = words[i].length;
    }
  }
  return sen;
}
// keep this function call here
// console.log(LongestWord(readline()));
// console.log(LongestWord());
