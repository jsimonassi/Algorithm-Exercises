/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false;
    }
    
    let lastPosition = arr[0];
    let checkpointCounter = 0;
    let wasIncreasing = true;
    
    for(let i = 1; i < arr.length; i++){
        let isIncreasing = true;
        if(arr[i] > lastPosition){
            isIncreasing = true;
        }else if(arr[i] == lastPosition){
            return false;
        }else{
            isIncreasing = false;
        }
        lastPosition = arr[i];
        if(isIncreasing != wasIncreasing){
            checkpointCounter++;
            wasIncreasing = isIncreasing;
        }
    }
    
    return checkpointCounter === 1;
};

console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0])); 