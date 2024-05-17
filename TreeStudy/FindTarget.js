class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const targetIsInTreeDfsRecursively = (root, target) => {
    if(!root) return false;
    if(root.value === target) return true;
    return targetIsInTreeDfsRecursively(root.left, target) || targetIsInTreeDfsRecursively(root.right, target);
}

const targetIsInTreeBfs = (root, target) => {
    if(!root) return false;
    const queue = [ root ];

    while(queue.length > 0){
        const current = queue.shift();

        if(current.value === target){
            return true;
        }

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return false;
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.right = new Node(5);

console.log(targetIsInTreeDfsRecursively(root, 10)); //True
console.log(targetIsInTreeDfsRecursively(root, -10));//False

console.log(targetIsInTreeBfs(root, -4)) //False
console.log(targetIsInTreeBfs(root, 4)) //True
