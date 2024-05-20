
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    let accValues = [];

    const dfs = (root, accTextValue) => {
        accTextValue += root.val;
        
        if(root.left === null && root.right === null){
            accValues.push(accTextValue);
        }

        if(root.left) dfs(root.left, accTextValue);
        if(root.right) dfs(root.right, accTextValue);
    }

    dfs(root, "");    

    return accValues.reduce((acc, curr) => acc + parseInt(curr), 0);
};

const root = new TreeNode(4);
root.left = new TreeNode(9);
root.right = new TreeNode(0);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);

console.log(sumNumbers(root));