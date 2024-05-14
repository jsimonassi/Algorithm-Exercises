/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    if(m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    let mPointer = m - 1;
    let nPointer = n - 1;
    let i = m + n - 1;
    while (nPointer >= 0) {
        if(nums1[mPointer] > nums2[nPointer]){
            nums1[i] = nums1[mPointer];
            mPointer--;
        }else{
            nums1[i] = nums2[nPointer];
            nPointer--;
        }
        i--;
    }
};

// nums1 = [1, 2, 3, 0, 0, 0];
// m = 3;
// nums2 = [2, 5, 6];
// n = 3;

// nums1 = [0];
// m = 0;
// nums2 = [1];
// n = 1;

nums1 = [2, 0];
m = 1;
nums2 = [1];
n = 1;

merge(nums1, m, nums2, n);

console.log("Result: ", nums1);
