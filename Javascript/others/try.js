function processString(inputStr) {
  // Convert to lowercase and remove whitespaces
  inputStr = inputStr.toLowerCase().replace(/\s+/g, "");

  // Create objects to store vowels and consonants
  const vowels = {};
  const consonants = {};

  // Store the first index of each vowel and consonant
  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];
    if (/[aeiouаеёиоуыэюя]/.test(char)) {
      if (!vowels[char]) {
        vowels[char] = i;
      }
    } else if (/[bcdfghjklmnpqrstvwxyzцкмпсстхфчшщъыь]/.test(char)) {
      if (!consonants[char]) {
        consonants[char] = i;
      }
    }
  }

  // Sort vowels and consonants by their first index
  const sortedVowels = Object.keys(vowels).sort(
    (a, b) => vowels[a] - vowels[b]
  );
  const sortedConsonants = Object.keys(consonants).sort(
    (a, b) => consonants[a] - consonants[b]
  );

  // Combine vowels and consonants
  return sortedVowels.join("") + sortedConsonants.join("");
}

// Example usage:
const inputStr = "next case";
console.log(processString(inputStr)); // Output: "neextcas"
