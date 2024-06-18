function sortCharacters(input) {
  const vowels = "aeiouAEIOU";
  const lowercaseInput = input.toLowerCase().trim(); // Convert input to lowercase
  const words = lowercaseInput.split("");

  console.log(words);

  // Filter vowels and consonants
  const consonants = words.filter((char) => !vowels.includes(char));
  const vowelsArr = words.filter((char) => vowels.includes(char));

  // Sort vowels and consonants
  //   vowelsArr.sort(); // Sort vowels alphabetically
  //   consonants.sort(); // Sort consonants alphabetically

  // Combine sorted characters
  const sortedVowels = vowelsArr.join("");
  const sortedConsonants = consonants.join("");

  // Format output
  return `Vowel Character      : ${sortedVowels}\nConsonant Character  : ${sortedConsonants}`;
}

function main() {
  // Simulate user input for testing
  const inputs = ["Sample Case", "Next Case"];

  for (const input of inputs) {
    const sortedString = sortCharacters(input);
    console.log(`Input one line of words (S) : ${input}`);
    console.log(sortedString);
    console.log("\n"); // Add a newline for better readability
  }
}

main();
