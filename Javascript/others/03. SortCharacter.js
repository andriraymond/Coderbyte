const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Input one line of words (S) : ", (input) => {
  const sortedString = sortCharacters(input);
  console.log(sortedString);
});

function sortCharacters(str) {
  const input = str.replace(/\s/g, "");
  const vowels = "aeiouAEIOU";
  const lowercaseInput = input.toLowerCase().trim();
  const words = lowercaseInput.split("");

  console.log(words);

  const originalPositions = {};

  // Sort vowels and consonants (optional)
  for (let i = 0; i < words.length; i++) {
    originalPositions[words[i]] = i;
  }

  words.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();

    // Compare sort characters
    if (aLower < bLower) {
      return -1;
    } else if (aLower > bLower) {
      return 1;
    } else {
      return originalPositions[a] - originalPositions[b];
    }
  });

  const sortString = words.join("");
  console.log(sortString);

  // Filter vowels and consonants
  //   const consonants = sortString.filter((char) => !vowels.includes(char));
  //   const vowelsArr = sortString.filter((char) => vowels.includes(char));

  //   const consonants = sortString.filter((char) => {
  //     return !vowels.includes(char); // Use curly braces for filter callback logic
  //   });
  //   const vowelsArr = sortString.filter((char) => vowels.includes(char));

  // Combine sorted characters
  //   const sortedVowels = vowelsArr.join("");
  //   const sortedConsonants = consonants.join("");

  // Format output
  //   return `Vowel Character      : ${sortedVowels}\nConsonant Character  : ${sortedConsonants}`;
}
