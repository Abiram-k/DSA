class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return
        }
        this._insertHelper(newNode, this.root);
    }
    _insertHelper(newNode, root) {
        const queue = [root];
        while (queue.length) {
            let current = queue.shift();
            if (!current.left){
                current.left = newNode
                return;
            }else if(!current.right){
                current.right = newNode;
                return;
            }else{
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10)
binaryTree.insert(20)
binaryTree.insert(10)
binaryTree.insert(20)
console.log(binaryTree.root);