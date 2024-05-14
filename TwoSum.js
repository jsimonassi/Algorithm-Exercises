/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(cache.get(complement) === undefined){
            cache.set(nums[i], i);
        }else{
            return [i, cache.get(complement)];
        }
    }
};

console.log(twoSum([2,7,11,15], 9)); // [1, 0]