/*
// Binary Search Tree

class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        if (!this.root) {
            this.root = new BinaryNode(value);
            return;
        }
        this.root = this._insertHelper(value, this.root);
    }
    _insertHelper(value, node) {
        if (!node) return new BinaryNode(value);
        if (value < node.value)
            node.left = this._insertHelper(value, node.left);
        else
            node.right = this._insertHelper(value, node.right);
        return node
    }
    contains(value) {
        if (!this.root)
            return false;
        return this._containsHelper(value, this.root);
    }
    _containsHelper(value, root) {
        if (!root) return false
        if (root.value == value)
            return true;
        if (value < root.value)
            return this._containsHelper(value, root.left);
        else
            return this._containsHelper(value, root.right)
    }
    remove(value) {
        if (!this.root) return false
        this.root = this._removeHelper(value, this.root);
    }
    _removeHelper(value, node) {
        if (!node) return;
        if (value < node.value) {
            node.left = this._removeHelper(value, node.left);
        }
        else if (value > node.value) {
            node.right = this._removeHelper(value, node.right);
        } else {
            if (!node.left && !node.right) {
                return null
            }
            else if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }
            else {
                node.value = this._getMinValue(node.right);
                node.right = this._removeHelper(node.value, node.right)
            }
        }
        return node;
    }
    _getMinValue(node) {
        if (!node.left) return node
        return this._getMinValue(node.left);
    }
    // left root right
    inOrder() {
        if (!this.root) return false;
        this._inOrderHelper(this.root);
    }
    _inOrderHelper(root) {
        if (root) {
            this._inOrderHelper(root.left);
            console.log(root.value);
            this._inOrderHelper(root.right);
        }
    }
    // root left right
    preOrder() {
        this._preOrderHelper(this.root);
    }
    _preOrderHelper(root) {
        if (root) {
            console.log(root.value);
            this._preOrderHelper(root.left);
            this._preOrderHelper(root.right);
        }
    }
    // left right root
    postOrder() {
        this._postOrderHelper(this.root);

    }
    _postOrderHelper(root) {
        if (root) {
            console.log(root.value);
            this._postOrderHelper(root.left);
            this._postOrderHelper(root.right);
        }
    }
    findClosest(value) {
        if (this.root && this.root.value == value) return this.root.value;
        if (!this.root) return false;
        let closest = this.root.value;
        return this._findClosestHelper(value, this.root, closest);
    }
    _findClosestHelper(value, root, closest) {
        if (!root)
            return closest
        if (Math.abs(value - root.value) > Math.abs(closest - root.value))
            closest = root.value
        if (value < root.value)
            return this._findClosestHelper(value, root.left, closest);
        else if (value > root.value)
            return this._findClosestHelper(value, root.right, closest);
        else
            return closest

    }
    height() {
        if (!this.root) return 0
        console.log(_heightHelper(this.root))
    }
    _heightHelper(root) {
        if (!root) return 0;
        let leftHeight = this._heightHelper(root.left);
        let rightHeight = this._heightHelper(root.right);
        return 1 + Math.max(leftHeight, rightHeight)
    }
        
    isBst(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) return false
        return (this.isBst(node.left, min, node.value) && this.isBst(node.right, node.value, max));
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
// bst.remove(10)
console.log("Closest: ", bst.findClosest(19))
console.log(bst.contains(10));
bst.inOrder()
bst.isBst()
// console.log(bst.root)


 */
/*

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class Tree {
    constructor(value) {
        this.root = new TreeNode(value);
    }
    addNode(parentNode, childNode) {
        const parent = this.findNode(parentNode, this.root);
        if (parent) {
            parent.children.push(new TreeNode(childNode));
        } else {
            console.log("No parent node founded!");
            return;
        }
    }
    findNode(parentNode, root) {
        if (!root) return false;
        if (root.value == parentNode) return root;
        for (let child of root.children) {
            let result = this.findNode(parentNode, child);
            if (result) return result
        }
    }
    remove(value) {
        if (this.root && this.root.value === value) {
            this.root = null;
            return true;
        }
        let parent = this._findParent(value, this.root);
        if (parent)
            parent.children = parent.children.filter((child) => child.value != value);
        else
            console.log("No node is there")
        return;
    }

    _findParent(value, node) {
        if (!node) return false;
        for (const child of node.children) {
            if (child.value == value) return node;
            const result = this._findParent(value, child);
            if (result) return result;
        }
        return null;
    }

    bfs() {
        if (!this.root) return []
        const queue = [this.root];
        const result = [];
        while (queue.length) {
            let current = queue.shift();
            result.push(current.value);
            queue.push(...current.children)
        }
        return result;
    }
    dfs(node = this.root, result = []) {
        if (!node) return;
        result.push(node.value)
        for (const child of node.children) {
            this.dfs(child, result)
        }
        return result;
    }
    height(node = this.root) {
        if (!node) return 0;
        if (node.children.length == 0) return 1;
        const height = node.children.map((child) => this.height(child));
        return 1 + Math.max(...height);
    }
    kthSmallest(k) {
        function bfs(root) {
            let queue = [root];
            let result = [];

            while (queue.length) {
                let current = queue.shift();
                result.push(current.value);
                queue.push(...current.children)
            }
            return result;
        }
        let kthSmallest = bfs(this.root).sort((a, b) => a - b);
        console.log("Kth Smallest: ", kthSmallest[k - 1]);
    }
    totalNodes(node = this.root) {
        if (!node) return 0;
        let count = 1;
        for (const child of node.children) {
            count += this.totalNodes(child)
        }
        return count;
    }
}

const tree = new Tree(100);
tree.addNode(100, 30);
tree.addNode(100, 50);
tree.addNode(100, 40);
tree.addNode(50, 40);;
tree.remove(50)
console.log(tree.bfs())
console.log(tree.dfs())
console.log("Height of the Tree is: ", tree.height());
tree.kthSmallest(2);
console.log(tree.totalNodes());

*/

/*

class MinHeap {
    constructor() {
        this.heap = [];
    }
    buildHeap(array) {
        if (!array.length) return;
        this.heap = array;
        for (let i = this._findParent(this._size() - 1); i >= 0; i--) {
            this._heapifyDown(i);
        }
    }
    _heapifyDown(index) {
        let endIndex = this._size() - 1;
        let leftIndex = this._findLeftChild(index);
        while (leftIndex <= endIndex) {
            let rightIndex = this._findRightChild(index);
            let indexToShift;
            if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex])
                indexToShift = rightIndex;
            else
                indexToShift = leftIndex;

            if (this.heap[index] > this.heap[indexToShift]) {
                this._swap(index, indexToShift);
                index = indexToShift;
                leftIndex = this._findLeftChild(index);
            } else {
                return;
            }
        }
    }
    insert(value) {
        this.heap.push(value);
        this._heapifyUp(this._size() - 1);
    }
    _heapifyUp(index) {
        let parent = this._findParent(index);
        while (parent && index && this.heap[parent] > this.heap[index]) {
            this._swap(parent, index);
            index = parent;
            parent = this._findParent(index);
        }
    }
    convertToMaxHeap() {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this._convertToMaxHeapHelper(i);
        }
    }
    _convertToMaxHeapHelper(index) {
        let leftIndex = this._findLeftChild(index);
        let rightIndex = this._findRightChild(index);
        let indexToShift = index;

        if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[indexToShift])
            indexToShift = rightIndex;
        if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[indexToShift])
            indexToShift = leftIndex;

        if (index != indexToShift) {
            this._swap(index, indexToShift);
            this._convertToMaxHeapHelper(indexToShift)
        } else {
            return;
        }

    }
    remove() {
        this._swap(0, this._size() - 1);
        this.heap.pop();
        this._heapifyDown(0);
    }
    _swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    _findRightChild(index) {
        return (2 * index) + 2;

    }
    _findLeftChild(index) {
        return (2 * index) + 1;
    }
    _findParent(index) {
        return Math.floor((index - 1) / 2);
    }
    _size() {
        return this.heap.length;
    }
    display() {
        console.log(this.heap)
    }
}


const minHeap = new MinHeap();
minHeap.buildHeap([1, 6, 2, 6, 4, 5, 6, 7, 8]);
minHeap.insert(5)
minHeap.remove();
minHeap.convertToMaxHeap()
minHeap.display();


*/
/*
const heapSort = (array) => {
    let n = array.length;
    function heapify(index, n) {
        let lefIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let endIndex = n - 1;
        let largest = index;
        if (lefIndex <= endIndex && array[lefIndex] > array[largest]) {
            largest = lefIndex;
        }
        if (rightIndex <= endIndex && array[rightIndex] > array[largest]) {
            largest = rightIndex;
        }
        if (largest != index) {
            [array[largest], array[index]] = [array[index], array[largest]];
            heapify(largest, n);
        }
    }
    for (let i = findParent(n - 1); i >= 0; i--) {
        heapify(i, n);
    }
    function findParent(index) {
        return Math.floor((index - 1) / 2);
    }
    for (let i = n - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(0, i)
    }

}
let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
heapSort(array)
console.log(array);

// */

/*
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char))
                current.children.set(char, new TrieNode());
            current = current.children.get(char);
        }
        current.isEnd = true;
    }
    getAllWords() {
        let result = [];
        this._getAllWordsHelper(this.root, '', result);
        console.log(result);
    }
    _getAllWordsHelper(node, prefix, result) {
        if (node.isEnd)
            result.push(prefix);
        for (const [char, children] of node.children) {
            this._getAllWordsHelper(children, prefix + char, result);
        }
    }
    contains(word) {
        if (!word) return false;
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return false
            }
            current = current.children.get(char);
        }

        return current.isEnd;
    }
    remove(word) {
        // if (word) return
        this._remoeHelper(word, this.root, 0);
    }
    _remoeHelper(word, node, index) {
        if (index == word.length) {
            if (!node.isEnd)
                return false;
            node.isEnd = false;
            return node.children.size == 0;
        }
        const char = word[index];
        const children = node.children.get(char);
        if (!children) return false;
        const isToBeDeleted = this._remoeHelper(word, children, index + 1);
        if (isToBeDeleted) {
            node.children.delete(char);
            return (!node.isEnd && node.children.size == 0)
        }
        return false;
    }
    startsWithPrefix(prefix) {
        if (!prefix) return false;
        let current = this.root
        for (const char of prefix) {
            if (!current.children.has(char))
                return false
            current = current.children.get(char);
        }
        return true
    }

    getWordsStartsWith(prefix) {
        if (!prefix) return
        let current = this.root;
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return []
            }
            current = current.children.get(char);
        }
        let result = [];
        this._getWordsStartsWithHelper(prefix, result, current)
        console.log(result);
        return result;
    }
    _getWordsStartsWithHelper(prefix, result, node) {
        if (node.isEnd)
            result.push(prefix);
        for (const [char, children] of node.children) {
            this._getWordsStartsWithHelper(prefix + char, result, children);
        }
    }

}
const trie = new Trie();
trie.insert("abiram");
trie.insert("abhishek");
// trie.remove("abhishek")
// const isExist = trie.contains("abiram");
// console.log(isExist)
// const startsWith = trie.startsWithPrefix("abh")
// console.log("StartsWith Prefix Bool: ", startsWith)
// trie.getAllWords();
trie.getWordsStartsWith("abi")


*/

/*
class Graph {
    constructor() {
        this.graph = new Map();
    }
    _addVertex(value) {
        if (!this.graph.has(value))
            this.graph.set(value, []);
    }
    insert(vertex, edge, isBiDirectional = false) {
        this._addVertex(vertex);
        this._addVertex(edge);
        this.graph.get(vertex).push(edge)
        isBiDirectional && this.graph.get(edge).push(vertex);
    }
    bfs() {
        let visited = new Set();
        let result = [];
        for (const [vertex, edges] of this.graph) {
            if (!visited.has(vertex)) {
                let queue = [vertex];
                visited.add(vertex);
                while (queue.length) {
                    let current = queue.shift();
                    result.push(current);
                    const neighbours = this.graph.get(current);
                    for (const neighbour of neighbours) {
                        if (!visited.has(neighbour)) {
                            visited.add(neighbour);
                            queue.push(neighbour);
                        }
                    }
                }
            }
        }
        console.log(result)
        return result;
    }
    dfs() {
        const visited = new Set();
        const result = [];
        for (const [vertex, edges] of this.graph) {
            if (!visited.has(vertex)) {
                this._dfsHelper(vertex, visited, result);
            }
        }
        console.log(result)
    }
    _dfsHelper(vertex, visited, result) {
        if (!vertex) return
        visited.add(vertex);
        result.push(vertex);
        const neighbours = this.graph.get(vertex);
        for (const neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                this._dfsHelper(neighbour, visited, result);
            }
        }
    }
    remove(vertex, edge) {
        if (!vertex || !edge) return;
        if (!this.graph.get(vertex) || !this.graph.get(edge)) {
            console.log("no connections")
            return;
        }
        this.graph.set(vertex, this.graph.get(vertex).filter(value => value != edge))
        this.graph.set(edge, this.graph.get(edge).filter(value => value != vertex))
    }
    isCyclic() {
        const stack = new Set();
        const visited = new Set();
        for (const [vertex, _] of this.graph) {
            if (!visited.has(vertex)) {
                if (this._isCyclicHelper(vertex, stack, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    _isCyclicHelper(vertex, stack, visited) {
        visited.add(vertex);
        stack.add(vertex)
        const neighbours = this.graph.get(vertex);
        for (const neighbour of neighbours) {
            if (stack.has(neighbour)) {
                return true;
            }
            if (!visited.has(neighbour))  {
                if (this._isCyclicHelper(neighbour, stack, visited))
                    return true;
            }
        }
        stack.delete(vertex);
        return false;
    }
}

const graph = new Graph();
graph.insert(100, 50);
graph.insert(50, 30);
graph.insert(30, 100)
// graph.remove(100, 50);
// console.log(graph.graph);
// graph.bfs()
// graph.dfs()
const isCycle = graph.isCyclic();
console.log("having cycles ? ", isCycle)

*/
/*

class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(value) {
        this.root = null;
    }
    insert(value, node = this.root) {
        const newNode = new BinaryNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        if (!node.left) {
            node.left = newNode;
        }
        else if (!node.right) {
            node.right = newNode;
        }
        else {
            if (this.isFull(node.left)) {
                this.insert(value, node.left);
            } else {
                this.insert(value, node.right);
            }
        }

    }
    isFull(node) {
        return node.left && node.right
    }
    //left root right
    inOrderTravesel() {
        this._inOrderTraveselHelper(this.root);
    }
    _inOrderTraveselHelper(node) {
        if (node) {
            this._inOrderTraveselHelper(node.left);
            console.log(node.value)
            this._inOrderTraveselHelper(node.right);
        }
    }
}

const bTree = new BinaryTree(10);

bTree.insert(100)
bTree.insert(1);
bTree.insert(10);
bTree.insert(89);

bTree.inOrderTravesel();
console.log(bTree.root);

*/


// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const heapSort = (array) => {
//     const length = array.length;

//     for (let i = findParentHelper(length - 1); i >= 0; i--) {
//         heapify(array, i, length);
//     }

//     for (let i = length - 1; i >= 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]];
//         heapify(array, 0, i);
//     }

// }
// const convertToMaxHeap = (array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
//     for (let i = findParentHelper(array.length - 1); i >= 0; i--) {
//         heapify(array, i, array.length);
//     }
//     console.log(array)
//     return array;
// }

// const heapify = (array, index, size) => {
//     let lefIndex = 2 * index + 1;
//     let rightIndex = 2 * index + 2;
//     let largest = index;
//     if (lefIndex < size && array[lefIndex] > array[largest]) {
//         largest = lefIndex;
//     }
//     if (rightIndex < size && array[rightIndex] > array[largest]) {
//         largest = rightIndex;
//     }
//     if (largest != index) {
//         [array[index], array[largest]] = [array[largest], array[index]];
//         heapify(array, largest, size);
//     }
// }
// const findParentHelper = (index) => Math.floor((index - 1) / 2);

// convertToMaxHeap();

// heapSort(array);
// console.log(array)





// const array = [543, 6, 456, 54, 6, 45, 4]

// const heapSort = (array) => {
//     const length = array.length;
//     for (let i = findParentHelper(length - 1); i >= 0; i--) {
//         heapify(array, i, length);
//     }
//     for (let i = length - 1; i >= 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]]
//         heapify(array, 0, i);
//     }

// }
// const heapify = (array, index, size) => {
//     let leftIndex = 2 * index + 1;
//     let rightIndex = 2 * index + 2;
//     let largest = index;
//     if (leftIndex < size && array[leftIndex] > array[largest])
//         largest = leftIndex
//     if (rightIndex < size && array[rightIndex] > array[largest])
//         largest = rightIndex;

//     if (largest != index) {
//         [array[largest], array[index]] = [array[index], array[largest]];
//         heapify(array, largest, size);
//     }
// }
// const findParentHelper = (index) => Math.floor((index - 1) / 2)

// const convertToMaxHeap = (array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
//     for (let i = findParentHelper(array.length - 1); i >= 0; i--) {
//         heapifyDown(array, i, array.length);
//     }
//     console.log(array);
// }
// const heapifyDown = (array, index, size) => {
//     let leftIndex = 2 * index + 1;
//     let rightIndex = 2 * index + 2;
//     let largest = index;
//     if (leftIndex < size && array[leftIndex] > array[largest])
//         largest = leftIndex
//     if (rightIndex < size && array[rightIndex] > array[largest])
//         largest = rightIndex;

//     if (largest != index) {
//         [array[largest], array[index]] = [array[index], array[largest]];
//         heapifyDown(array, largest, size);
//     }
// }

// convertToMaxHeap();

// heapSort(array);
// console.log(array)  


// const isBST = (node, min = -Infinity, max = Infinity) => {
//     if (!node) return true;
//     if (node.value <= min && node.value >= max) return false
//     return (isBST(node.left, min, node.value) && isBST(node.right, node.right, max))
// }


// const findTotalNodes = (node) => {
//     if (!node) return 0;
//     let count = 1;
//     for (child of node.children) {
//         count += findTotalNodes(count);
//     }
//     return count;
// }

// const removeWordFromTrie = (word) => {
//     removeWordFromTrieHelper(Node, word, 0);
// }
// const removeWordFromTrieHelper = (node, word, index) => {
//     if (index == word.length) {
//         if (!node.isEnd)
//             return false;
//         node.isEnd = false;
//         return node.children.size == 0
//     }
//     const char = word[index];
//     const children = node.children.get(char);
//     if (!children) return false;
//     isToBeDeleted = removeWordFromTrieHelper(children, word, index+1);
//     if (isToBeDeleted) {
//         node.children.delete(char);
//         return (!node.isEnd && node.children.size == 0)
//     }
//     return false;
// }



// const isGraphCyclic = () => {
//     const stack = new Set();
//     const visited = new Set();
//     for (const [vertex, edges] of this.graph) {
//         if (!visited.has(vertex))
//             if (isGraphCyclicHelper(vertex, stack, visited))
//                 return true;
//     }
//     return false;
// }

// const isGraphCyclicHelper = (vertex, stack, visited) => {
//     stack.add(vertex);
//     visited.add(vertex);
//     const neighbours = this.graph.get(vertex);
//     for (const neighbour of neighbours) {
//         if (stack.has(neighbour)) return true;
//         if (!visited.has(neighbour)) {
//             if (isGraphCyclicHelper(neighbour, stack, visited))
//                 return true;
//         }
//     }
//     stack.delete(vertex);
//     return false;
// }



const findLongestPrefix = () => {
    let prefix = '';
    findLongestPrefixHelper(this.root, prefix);
    return prefix;
}

const findLongestPrefixHelper = (node, prefix) => {
    if (node.isEnd) {
        return prefix
    }
    const char = Array.from(node.children.keys())[0];
    prefix += char;
    return findLongestPrefixHelper(node.children.get(char), prefix);
}


const findTheBSTIsUnbalanced = () => {
    const isBalanced = findTheBSTIsUnbalancedHelper(this.root);
    return isBalanced !==-1;
}
const findTheBSTIsUnbalancedHelper = (node) => {
    if (!node) return 0;

    const leftHeight = findTheBSTIsUnbalancedHelper(node.left);
    if (leftHeight == -1) return -1;

    const rightHeight = findTheBSTIsUnbalancedHelper(node.right);
    if (rightHeight == -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftHeight, rightHeight);
}


const findDepthOfTree = (target) => {
   return findDepthOfTreeHelper(this.root, target, 0);
}
const findDepthOfTreeHelper = (node, target, distance) => {
    if (!node) return -1;
    if (node.value == target)
        return distance;
    const leftDistance = findDepthOfTreeHelper(node.left, target, distance + 1);
    if (leftDistance !== -1) {
        return leftDistance
    }
    return findDepthOfTreeHelper(node.right, target, distance + 1);
}