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
            console.log("No head were founded.")
            return;
        }
    }
    _findParent(node, parentValue) {
        if (node.value == parentValue) return node;
        for (let child of parent.child) {
            let result = this._findParent(child);
            if (result) return result;
        }
        return false;
    }

    bfs(root = this.root) {
        let queue = [root]
        let result = [];
        while (queue.length) {
            let current = queue.shift();
            console.log("NODE:::", current)
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