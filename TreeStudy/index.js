class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const printTreeDfsInteractive = (root) => {
    if(!root) return;
    const stack = [ root ];

    while (stack.length > 0){
        const current = stack.pop();
        console.log(current.value);

        if(current.right !== null) stack.push(current.right);
        if(current.left !== null) stack.push(current.left);
    }
}

const printTreeDfsRecursively = (root) => {
        if(!root) return;

        console.log(root.value);
        if(root.left !== null) printTreeDfsRecursively(root.left);
        if(root.right !== null) printTreeDfsRecursively(root.right);
}

const printTreeBfsInteractive = (root) => {
    if(!root) return;
    const queue = [ root ];

    while (queue.length > 0){
        const current = queue.shift();

        console.log(current.value);
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
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

// printTreeDfsInteractive(root);
// printTreeDfsRecursively(root);
printTreeBfsInteractive(root);

