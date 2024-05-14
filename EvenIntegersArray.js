/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end){
        if(nums[start] % 2 === 0){
            start++;
        }else {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            end--;
        }
    }
    return nums;
};


let nums = [3,1,2,4, 6, 7, 8, 9];
console.log(sortArrayByParity(nums));

// start = 0;
// end = length - 1;
// [3s,1,2,4e];

// odd:
// start = 0;
// end = end--;
// [1s, 2, 4e, 3];

// odd:
// start = 0;
// end = end--;
// [2s, 4e, 3, 1];

// even:
// start++;
// end = end;
// [2, 4se, 3, 1];



