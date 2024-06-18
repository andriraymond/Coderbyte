function QuestionsMarks(str) {
  let prevDigit = null;
  let questionMarkCount = 0;

  for (const char of str) {
    if (/\d/.test(char)) {
      // Check if character is a digit
      const digit = Number(char);
      if (prevDigit !== null) {
        // Check if previous digit and current digit add up to 10
        if (prevDigit + digit === 10) {
          // Check if there are exactly 3 question marks
          if (questionMarkCount === 3) {
            return "true";
          } else {
            return "false";
          }
        } else {
          // Reset question mark count if digits don't add up to 10
          questionMarkCount = 0;
        }
      }
      prevDigit = digit; // Update previous digit
    } else if (char === "?") {
      questionMarkCount++;
    }
    // Ignore non-digit and non-question mark characters
  }

  // No valid pairs found or missing question marks
  return "false";
}

// Example usage
const str1 = "arrb6???4xxbl5???eee5";
const str2 = "acc?7??sss?3rr1??????5";
const str3 = "aa6?7??";
const str4 = "acc?7??3sss?3rr1??????5";

console.log(QuestionsMarks(str1)); // Output: true
console.log(QuestionsMarks(str2)); // Output: false (no pairs add up to 10)
console.log(QuestionsMarks(str3)); // Output: false (missing question marks)
console.log(QuestionsMarks(str4)); // Output: false (missing question marks)

// function QuestionsMarks(str) {
//   // Create an empty array to store valid strings
//   let validStrings = [];

//   // Filter characters and build the clean string
//   let clean = str
//     .split("")
//     .filter((char) => /[0-9?]/.test(char))
//     .join("");

//   // Find all substrings with pattern "d???d"
//   const matches = clean.match(/d(\?\?\?)d/gi);

//   // Check each match using a loop
//   if (matches) {
//     for (const match of matches) {
//       const firstDigit = Number(match[0]); // Extract first digit
//       const lastDigit = Number(match[match.length - 1]); // Extract last digit
//       if (firstDigit + lastDigit === 10) {
//         validStrings.push(match); // Add valid string to array
//       }
//     }
//   }

//   // Return true if any valid strings were found, otherwise false
//   return validStrings.length > 0;
// }

// const str = "acc?7??sss?3rr1??????5";
// console.log(QuestionsMarks(str)); // Output: true

// function splitIntoChunks(str, chunkSize) {
//   const chunks = [];
//   for (let i = 0; i < str.length; i += chunkSize) {
//     const chunk = str.substring(i, i + chunkSize);
//     chunks.push(chunk);
//   }
//   return chunks;
// }

// function QuestionsMarks(chunks) {
//   var arrays = [chunks];
//   var number = arrays.length;
//   const sen = "";

//   for (let i = 0; i <= number; i++) {
//     if (arrays[i].split("?") === 3) {
//       console.log("test");
//     } else {
//       console.log("tes2");
//     }
//   }
//   return sen;
// }

// const str = "adasdsdasdadasdasd";
// const chunkSize = 10;
// const result = splitIntoChunks(str, chunkSize);
// console.log(result);

// QuestionsMarks();

// // function QuestionsMarks() {
// //   str = "???qwerty0123";

// //   let test = str.indexOf("a", 10);
// //   const count = str.length;

// //   console.log(count);
// //   console.log(test);

// //   function Loop() {
// //     for (let i = 0; i < count; i++) {
// //       return true;
// //     }
// //   }

// //   count

// //   var count = 0;
// //   const array = str.split(" ", 10).length - 1;
// //   count = str.split("?").length - 1;

// //   if (count >= 3) {
// //     console.log("true");
// //   } else {
// //     console.log("false");
// //   }
// // }

// // console.log(QuestionsMarks(readline()));

// // console.log(QuestionsMarks());
// // QuestionsMarks();

// // Solution 02
// function QuestionsMarks() {
//   //   const str = "???qwerty0123";
//   //   const limit = 10;

//   //   const array = str.slice().split(0, limit);

//   //   console.log(array);

//   const str = "adasdsdasdadasdasd";
//   const limit = 10;

//   // Menggunakan method slice() untuk membagi string menjadi array
//   const array = str.slice(0, limit).split("");

//   console.log(array);

//   //   var count = 0;
//   //   count = str.split("?").length - 1;

//   //   if (count >= 3) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// }

// // keep this function call here
// // console.log(QuestionsMarks(readline()));

// // console.log(QuestionsMarks("???qwerty0123"));
// QuestionsMarks();
