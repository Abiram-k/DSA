class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor(value) {
        if (!value) {
            console.log("Specify the root of the root !");
            return;
        }
        this.root = new Node(value)
    }
    insert(parentValue, childValue) {
        const parentNode = this._findParent(this.root, parentValue);
        if (parentNode) {
            parentNode.children.push(childValue);
            return;
        }
        else {
            console.log("No head were founded.");
            return;
        }
    }
    _findParent(node, parentValue) {
        if(!node) return;
        if (node.value == parentValue) return node;
        for (let child of node.children) {
            let result = this._findParent(child,parentValue);
            if (result) return result;
        }
        return null;
    }

    bfs(root = this.root) {
        let queue = [root]
        let result = [];
        while (queue.length) {
            let current = queue.shift();
            result.push(current.value || current);
            if (current.children?.length) {
                queue.push(...current.children);
            }
        }
        return result;
    }

    kthSmallest(k) {
        let result = this.bfs();
        result.sort((a, b) => a - b)
        return result[k - 1];
    }
    
}

const tree = new Tree(200);
tree.insert(200, 10);
console.log(tree.bfs())