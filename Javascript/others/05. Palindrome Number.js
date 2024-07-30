var isPalindrome = function(x) {
    
    // Ubah ke array
    const original = Array.from(String(x));
    // Reverse original array
    let reverse = [...original].reverse();
    
    // Looping 
    for (let i = 0 ; i < original.length ; i++){
        if (original[i] !== reverse[i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


