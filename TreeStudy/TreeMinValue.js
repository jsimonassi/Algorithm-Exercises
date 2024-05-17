class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const treeMinDfsRecursively = (root) => {
    if(root === null) return Infinity;
    const leftMin = treeMinDfsRecursively(root.left);
    const rightMin = treeMinDfsRecursively(root.right);
    return Math.min(leftMin, rightMin, root.value);
}

const treeMinBfs = (root) => {
    if(!root) return -1
    const queue = [ root ];
    let min = Infinity;

    while(queue.length > 0){
        const current = queue.shift();

        if(current.value < min){
            min = current.value;
        }

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return min;
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.right = new Node(5);

console.log(treeMinBfs(root));
console.log(treeMinDfsRecursively(root));
