/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    const sLength = s.length;
    for(let tIndex = 0; tIndex > t.length; tIndex++){
        if(t[tIndex] === s[sIndex]){
            sIndex++;
        }
    }
    return sIndex >= sLength;
};
s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t)); // true