class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        this.root = this.insertHelper(data, this.root);
    }
    insertHelper(data, node) {
        if (!node)
            return new Node(data);
        if (data < node.data) {
            node.left = this.insertHelper(data, node.left);
        } else {
            node.right = this.insertHelper(data, node.right);
        }
        return node;
    }
    contains(data) {
        return this.containsHelper(data, this.root);
    }
    containsHelper(data, node) {
        if (!node)
            return false;
        if (node.data == data)
            return true;
        if (data < node.data)
            return this.containsHelper(data, node.left);
        else
            return this.containsHelper(data, node.right);
    }

    remove(data) {
        if (!this.root) return null;
        this.root = this.removeHelper(data, this.root);
    }
    removeHelper(data, node) {
        if (data < node.data) {
            node.left = this.removeHelper(data, node.left);
        } else if (data > node.data) {
            node.right = this.removeHelper(data, node.right);
        } else {
            if (node.left && node.right) {
                node.data = this.getMinNode(node.right);
                node.right = this.removeHelper(node.data, node.right);

                // 1. It storing in right because to store updated nodes at the end of the recursion
                // 2. It reaches to the duplicated node through if and else if conditions
                // 3. Once it reach there that means dont have two child
                // 4. This is because if that node have two child, it defenetly copy the node from left, but     now that's not the case and we reached the end of the left
                // 5. once we reach there , we need to persist the right child,left child( this is becuase the left child is there, is applicable to deleting the end node not in parent root), and return null if no child
                // 6. At last recursion unwind and node.right got the updated childs 

            } else if (node.left) {
                return node.left;
            } else if (node.right) {
                return node.right;
            } else {
                return null;
            }

        }
        return node;
    }
    getMinNode(node) {
        if (!node.left) {
            return node.data;
        }
        return this.getMinNode(node.left);
    }

    //  Left => Root => Right
    inOrder() { 
        this.inOrderHelper(this.root)
    }
    inOrderHelper(node) {
        if (node) {
            this.inOrderHelper(node.left);
            console.log(node.data);
            this.inOrderHelper(node.right)
        }
    }

    // Root => Left => Right
    preOrder() {
        this.preOrderHelper(this.root);
    }
    preOrderHelper(node) {
        if (node) {
            console.log(node.data);
            this.preOrderHelper(node.left)
            this.preOrderHelper(node.right)
        }
    }

    // Left => Right => Root
    postOrder() {
        this.postOrderHelper(this.root);
    }
    postOrderHelper(node) {
        if (node) {
            this.postOrderHelper(node.left);
            this.postOrderHelper(node.right);
            console.log(node.data);
        }
    }

    findClosest(target) {
        let current = this.root;
        if (!this.root) return null;

        let closest = this.root.data;

        while (current) {
            if (Math.abs(target - closest) > Math.abs(target - current.data))
                closest = current.data;
            if (current.data < target)
                current = current.right;
            else if (current.data > target)
                current = current.left;
            else
                break;
        }

        console.log("Closest value is :", closest)
    }
    height() {
        if (!this.root) return 0;
        return this._heightHelper(this.root);
    }
    _heightHelper(node) {
        if (!node)
            return 0;
        let leftHeight = this._heightHelper(node.left);
        let rightHeight = this._heightHelper(node.right);
        return 1 + Math.max(leftHeight, rightHeight); // 1 is for couting the current node.
    }
    isBst(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true
        if (node.value <= min || node.value >= max) return false;
        return (this.isBst(node.left, min, node.value) && this.isBst(node.right, node.value, max));
    }
}

const binaryTree = new BinarySearchTree();

binaryTree.insert(50);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(30);
binaryTree.insert(45);
binaryTree.insert(10);

// binaryTree.remove(10);

console.log(binaryTree.contains(50));
binaryTree.inOrder();
binaryTree.preOrder();
binaryTree.postOrder()

binaryTree.findClosest(300);
console.log(JSON.stringify(binaryTree, null, 2));
