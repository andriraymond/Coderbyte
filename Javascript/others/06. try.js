// // Example 1:

// // Input: strs = ["flower","flow","flight"]
// // Output: "fl"
// // Example 2:

// // Input: strs = ["dog","racecar","car"]
// // Output: ""
// // Explanation: There is no common prefix among the input strings.

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
    
//     // Tes
//     for ( let i = 0 ; i < strs.length ; i++ ) {
//         console.log( strs[i]);
//         // for ( var j = 0 ; j < strs[i].length ; j++){
//             // if ( strs[i[j]] == strs[i[j]] ){
//             //     console.log(strs[i[j]]);
//             // }
//         // }
//         temp = temp + strs[i]
//         let j = 0;

//         while ( strs[i[j]] == strs[i + 1[j]] == strs[i + 2[j]]){
//             console.log('makasih');
//         }
//     }
// };

// longestCommonPrefix(["dog", "racecar", "car"]);

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Ambil string pertama sebagai prefix awal
    let prefix = strs[0];

    // Iterasi melalui semua string dalam array
    for (let i = 1; i < strs.length; i++) {
        // Kurangi panjang prefix sampai cocok dengan string saat ini
        while (strs[i].indexOf(prefix) !== 0) {
            // prefix = prefix.substring(0, prefix.length - 1);
            console.log(strs[i]);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

// Contoh penggunaan
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
