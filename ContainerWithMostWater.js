/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxValue = -1;

    while(start < end){
        let firstTerm = Math.abs(end - start);
        let secondTerm = height[start] < height[end] ? height[start] : height[end];
        let currentResult = firstTerm * secondTerm;
        if(currentResult > maxValue){
            maxValue = currentResult;
        }

        if(height[start] > height[end]){
            end--;
        }else{
            start++;
        }
    }
    return maxValue;
};