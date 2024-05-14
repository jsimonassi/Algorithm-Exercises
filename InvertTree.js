/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let batchSize = 1;
    let batchStart = 0;
    let batchEnd = 1;
    var updatedRoot = [...root];
    
    while(batchEnd <= updatedRoot.length){
        reverse(batchStart, batchEnd, updatedRoot);
        batchSize = batchSize * 2;
        batchStart = batchEnd;
        batchEnd = batchStart + batchSize;
    }
    return updatedRoot;
};

var reverse = function(startPoint, endPoint, fullTree){
    endPoint = endPoint - 1; //Valid position
    while(startPoint < endPoint){
        const temp = fullTree[startPoint];
        fullTree[startPoint] = fullTree[endPoint];
        fullTree[endPoint] = temp;
        startPoint ++;
        endPoint--;
    }
}

var root = [4,2,7,1,3,6,9];
console.log(invertTree(root));

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

//     4         level = 0  => 1
//  2     7      level = 1 => 2
// 1 3  6   9    level = 2 => 4
//               level = 3 => 8


