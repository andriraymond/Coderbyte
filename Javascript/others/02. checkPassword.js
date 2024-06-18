const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your Password : ", (input) => {
  const originString = checkPasswordPattern(input);
  console.log(originString);
  return rl;
});

function checkPasswordPattern(password) {
  const isValidLength = /^.{8,16}$/;
  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  const isContainsNumber = /^(?=.*[0-9]).*$/;

  // Functions to check validity of string
  if (!isValidLength.test(password)) {
    return "Password harus 10 - 16 digit";
  }
  if (
    !isContainsLowercase.test(password) ||
    !isContainsUppercase.test(password)
  ) {
    return "Password harus ada hurus kecil atau huruf besar";
  }
  if (!isContainsNumber.test(password) || !isContainsSymbol.test(password)) {
    return "Password harus memiliki angka dan simbol";
  } else {
    return true;
  }
}

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your string : ", (input) => {
//   const originString = checkPasswordValidity(input);
//   console.log(originString);
// });

// const checkPasswordValidity = (value) => {
//   const blankValue = "";
//   if (blankValue == value) {
//     return "Minimal kasih password bang";
//   }

//   const isNonWhiteSpace = /^\S*$/;
//   if (!isNonWhiteSpace.test(value)) {
//     return "Password must not contain Whitespaces.";
//   }

//   const isContainsUppercase = /^(?=.*[A-Z]).*$/;
//   if (!isContainsUppercase.test(value)) {
//     return "Password must have at least one Uppercase Character.";
//   }

//   const isContainsLowercase = /^(?=.*[a-z]).*$/;
//   if (!isContainsLowercase.test(value)) {
//     return "Password must have at least one Lowercase Character.";
//   }

//   const isContainsNumber = /^(?=.*[0-9]).*$/;
//   if (!isContainsNumber.test(value)) {
//     return "Password must contain at least one Digit.";
//   }

//   const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
//   if (!isContainsSymbol.test(value)) {
//     return "Password must contain at least one Special Symbol.";
//   }

//   const isValidLength = /^.{8,16}$/;
//   if (!isValidLength.test(value)) {
//     return "Password must be 10-16 Characters Long.";
//   }

//   return null;
// };
