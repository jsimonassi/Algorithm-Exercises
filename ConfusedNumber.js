/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const rotatedMap = new Map();
    rotatedMap.set("6", "9");
    rotatedMap.set("9", "6");
    
    const stringParsedNumber = n.toString().split("");
    let startIndex = 0; 
    let endIndex = stringParsedNumber.length - 1;
    
    if(startIndex === endIndex){
        if(rotatedMap.get(stringParsedNumber[startIndex])){
            return true;
        }
        return false;
    }
        
    while (endIndex > startIndex){
        let startTemp;
        let endTemp;
        
        if(rotatedMap.get(stringParsedNumber[startIndex])){
            startTemp = rotatedMap.get(stringParsedNumber[startIndex])
        }else{
            startTemp = stringParsedNumber[startIndex];
        }
        

        if(rotatedMap.get(stringParsedNumber[endIndex])){
            endTemp = rotatedMap.get(stringParsedNumber[endIndex])
        }else{
            endTemp = stringParsedNumber[endIndex];
        }
        
        stringParsedNumber[endIndex] = startTemp;
        stringParsedNumber[startIndex] = endTemp;
        startIndex++;
        endIndex--;
    }
    return parseInt(stringParsedNumber.join("")) !== n;
};