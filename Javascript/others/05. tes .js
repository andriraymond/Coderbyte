// Roman to Integer

var romanToInt = function(s) {

    const temp = s.split('');
    console.log(temp);

    const romanHash = {
        I : 1,
        V : 2,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000

    }

    let output = 0;

    for ( let i = 0 ; i < temp.length ; i++ ) {
        
        if (s[i] == 'I' && s[i + 1] == 'V'){
            output += 4;
            i++;
        } else if (s[i] == 'I' && s[i + 1] == 'X'){
            output += 9;
            i++;
        } else if (s[i] == 'X' && s[i + 1] == 'L'){
            output += 40;
            i++;
        } else if (s[i] == 'X' && s[i + 1] == 'C'){
            output += 90;
            i++;
        } else if (s[i] == 'C' && s[i + 1] == 'D'){
            output += 400;
            i++;
        } else if (s[i] == 'C' && s[i + 1] == 'M'){
            output += 900;
            i++;
        } else if (s[i] == 'I'){
            // console.log('satu');
            output += 1;
        } else if (s[i] == 'V') {
            output += 5;
        }else if (s[i] == 'X') {
            output += 10;
        }
        else if (s[i] == 'L') {
            output += 50;
        }
        else if (s[i] == 'C') {
            output += 100;
        }
        else if (s[i] == 'D') {
            output += 500;
        }
        else if (s[i] == 'M') {
            output += 1000;
        }
        // for ( let j = 0 ; j < romanHash.length ; j++){
            // if ( temp[i] == romanHash[j]){
            //     console.log(i);
            // }

        // }
    }
    console.log(output);

}

// const s = 'III';
// const s = 'LVIII';
const s = "MCMXCIV"; //x
// const s = "XXVII"; //x
romanToInt(s)


// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur; // IV -> 5 - 1 = 4
//       i++;
//     } else {
//       result += cur;
//     }
//   }

//   return result;
// };
// const s = "MCMXCIV";
// console.log(romanToInt(s));