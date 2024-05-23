/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

    if(s.length === 1) return false;
    
    let substringLimitIndex = 1;
    
    for(let i = 1; i < s.length; i++){
        if(s[0] !== s[substringLimitIndex]){
            substringLimitIndex++;
        }
    }
    
    const substring = s.slice(0, substringLimitIndex);
    if(s.length % substring.length !== 0){
        return false;
    }
    
    let substringIndex = 0;
    for(c of s){
        if(c !== substring[substringIndex]){
            return false;
        }
        
        if(substringIndex === substring.length - 1){
            substringIndex = 0;
        }else{
            substringIndex++;
        }
    }
    
    return true;
};

console.log(repeatedSubstringPattern("abab"));