class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Get the path sum since root to leaf
 */
const getMaxPathSumDfsRecursively = (root) => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.value;
    const maxChildPathSum = Math.max(getMaxPathSumDfsRecursively(root.left), getMaxPathSumDfsRecursively(root.right));
    return maxChildPathSum + root.value;
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.right = new Node(5);

            //     1 
            //    / \
            //   2   3
            //  / \   \
            // 4   10  5


console.log(getMaxPathSumDfsRecursively(root));
