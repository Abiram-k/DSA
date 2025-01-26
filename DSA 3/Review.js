const startWithPrefix = (prefix) => {
    let current = this.root;
    if (!current) return false
    for (let i of prefix) {
        if (!current.children.has(i))
            return false;
        current = current.children.get(i);
    }
    return true
}

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
}

class Graph {
    constructor() {
        this.graph = new Map();
    }
    addNode(vertex, edge, isBiDirectional = false) {
        this._addVertexHelper(vertex);
        this._addVertexHelper(edge);
        this.graph.get(vertex).push(edge);
        if (isBiDirectional)
            this.graph.get(edge).push(vertex);

    }
    _addVertexHelper(vertex) {
        if (!this.graph.has(vertex))
            this.graph.set(vertex, []);
    }
    bfs() {
        let visited = new Set();
        let result = [];
        for (const [vertex, edges] of this.graph) {
            let queue = [vertex];
            if (!visited.has(vertex)) {
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
    }
}

const graph = new Graph();
graph.addNode(100, 50)
graph.addNode(50, 30)
graph.addNode(40, 90)
graph.bfs()

// left root right

const inOrderTraversal = () => {
    inOrderTraversalHelper(this.root);
}
const inOrderTraversalHelper = (root) => {
    inOrderTraversal(root.left)
    console.log(root.value)
    inOrderTraversal(root.right)
}


const heapify = (arr, index, length) => {
    let lefIdx = 2 * index + 1;
    let rightIdx = 2 * index + 2;
    let larg = index;
    if (lefIdx < length && arr[lefIdx] > arr[larg]) {
        larg = lefIdx;
    }
    if (rightIdx < length && arr[rightIdx] > arr[larg]) {
        larg = rightIdx;
    }
    if (larg != index) {
        [arr[index], arr[larg]] = [arr[larg], arr[index]];
        heapify(arr, larg, length);
    }
}