
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const pPath = [];
    const qPath = [];

    while (p.parent !== null) {
        pPath.push(p.val);
        p = p.parent;
    }

    while (q.parent !== null) {
        qPath.push(q.val);
        q = q.parent;
    }

    let lowestValue = Infinity;
    for(let i = Math.min(pPath.length, qPath.length) - 1; i >= 0; i--){
        if(pPath[i] !== qPath[i]){
            return lowestValue;
        }

        if(pPath[i] < lowestValue){
            lowestValue = pPath[i];
        }
    }

    return lowestValue;
};

// Test case
//[3,5,1,6,2,0,8,null,null,7,4]

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.left = new Node(0);
root.right.right = new Node(8);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

root.left.parent = root;
root.right.parent = root;
root.left.left.parent = root.left;
root.left.right.parent = root.left;
root.right.left.parent = root.right;
root.right.right.parent = root.right;
root.left.right.left.parent = root.left.right;
root.left.right.right.parent = root.left.right;

console.log(lowestCommonAncestor(root.left.right.left, root.left.right.right)); // 2
