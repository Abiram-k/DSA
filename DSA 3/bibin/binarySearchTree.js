class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else this._insertNode(this.root, newNode);
  }
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this._insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this._insertNode(node.right, newNode);
    }
  }
  search(data) {
    return this._searchNode(data, this.root);
  }

  _searchNode(data, node = this.root) {
    if (node === null) return null;
    if (data < node.data) return this._searchNode(data, node.left);
    if (data > node.data) return this._searchNode(data, node.right);
    return node;
  }

  delete(data) {
    this.root = this._deleteNode(this.root, data);
  }

  _deleteNode(node, data) {
    if (node === null) return null;
    if (data < node.data) node.left = this._deleteNode(node.left, data);
    else if (data > node.data) node.right = this._deleteNode(node.right, data);
    else {
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      const minRight = this._findMin(node.right);
      node.data = minRight.data;
      node.right = this._deleteNode(node.right, minRight.data);
    }
    return node;
  }

  _findMin(node) {
    while (node.left !== null) node = node.left;
    return node;
  }

  inOrder(node = this.root) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  preOrder(node = this.root) {
    if (node === null) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  postOrder(node = this.root) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
  findMin() {
    return this._findMin(this.root);
  }
  findMax(current = this.root) {
    while (current.right !== null) current = current.right;
    return current;
  }
  findHeight(node = this.root) {
    if (node === null) return -1;
    return (
      1 + Math.max(this.findHeight(node.left), this.findHeight(node.right))
    );
  }

  secondLargest(root) {
    if (!root || (!root.right && !root.left)) {
      return null
    }
    let current = root
    while (current) {
      if (!current.right && current.left) {
        return this.findMax(current.left)
      }
      if (current.right && !current.right.right && !current.right.left) {
        return current.data
      }
      current = current.right
    }
  }


  isBst(node = this.root, min = -Infinity, max = Infinity) {
    if (node === null) return true
    if (node.data <= min || node.data >= max) return false
    return (this.isBst(node.left, min, node.data) && this.isBst(node.right, node.data, max))
  }

  smallest() {
    if (this.root === null) return null
    return this.smallestHelper(this.root)
  }
  smallestHelper(node) {
    if (!node.left) return node.data
    return this.smallestHelper(node.left)
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order Traversal:");
bst.inOrder();

console.log("\nSearch for 70:", bst.search(70) ? "Found" : "Not Found");
console.log("\nSearch for 10:", bst.search(10) ? "Found" : "Not Found");

console.log("\nDelete 70");
bst.delete(70);
console.log("\nSearch for 70:", bst.search(70) ? "Found" : "Not Found");
console.log("\nSearch for 80:", bst.search(80) ? "Found" : "Not Found");

console.log("\nIn-order Traversal after Deletion:");
bst.inOrder();

console.log("\nMinimum Value:", bst.findMin().data);
console.log("Maximum Value:", bst.findMax().data);
console.log("Height of BST:", bst.findHeight());
console.log("second largesr", bst.secondLargest(50));
console.log(bst.smallest())