class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const treeSumDfsRecursively = (root) => {
    if(!root) return 0;
    return treeSumDfsRecursively(root.left) + treeSumDfsRecursively(root.right) + root.value;
}

const treeSumBfs = (root) => {
    if(!root) return 0;
    const queue = [ root ];
    let sum = 0;

    while(queue.length > 0){
        const current = queue.shift();

        sum += current.value;

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return sum;
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.right = new Node(5);

console.log(treeSumDfsRecursively(root));
console.log(treeSumBfs(root));
