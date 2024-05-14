/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    if(digits.length === 0) return digits;

    if(digits[digits.length - 1] === 9){
        let lastValidIndex = digits.length - 1;
        while(digits[lastValidIndex] === 9 && lastValidIndex >= 0){
            lastValidIndex--;
        }

        if(lastValidIndex < 0){
            digits.unshift(1);
            lastValidIndex = 1;
        }else{
            digits[lastValidIndex]++;
        }

        while(lastValidIndex < digits.length){
            digits[lastValidIndex] = 0;
            lastValidIndex++;
        }

        return digits;   
    }

    digits[digits.length - 1]++;
    return digits;
};

var digits = [2, 9, 9, 9];
console.log("PlusOne: ", plusOne(digits));