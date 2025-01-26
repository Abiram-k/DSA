class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class Tree {
    constructor(value) {
        this.root = new Node(value)
    }

    findNode(node, parentValue) {
        if (!node) return null
        if (node.value === parentValue) return node
        for (let child of node.children) {
            let result = this.findNode(child, parentValue)
            if (result) return result // to return only when the result is there. because we are returning null if not present, and node if it is.
        }
        return null;
    }

    addChild(parentValue, childValue) {
        const parentNode = this.findNode(this.root, parentValue)
        if (parentNode)
            parentNode.children.push(new Node(childValue))
        else
            console.log(`Parent node with value ${parentValue} not found.`);
    }

    delete(value) {
        if (this.root.value === value) {
            console.log("cant delete root node")
            return
        }
        const parentNode = this.findParent(this.root, value)
        if (parentNode) {
            parentNode.children = parentNode.children.filter(child => child.value !== value)
        } else {
            console.log("no node");
        }
        return null;
    }

    findParent(node, value) {
        if (!node) return null
        for (let child of node.children) {
            if (child.value === value) return node
            let result = this.findParent(child, value)
            if (result) return result
        }
        return null
    }

    bfs() {
        let queue = [this.root]                           //  1 _/
                                                        // 2      3
                                                       //3   4  5   6
        let result = []                                   // result = [1,2,3,3,4,5,6]
        while (queue.length > 0) {
            let current = queue.shift()
            result.push(current.value)
            queue.push(...current.children)
        }
        return result
    }

    dfs(node = this.root, result = []) {
        if (!node) return result
        result.push(node.value)
        for (let child of node.children) {
            this.dfs(child, result)
        }
        return result
    }

    height(node = this.root) {
        if (!node) return 0
        if (node.children.length === 0) return 1
        let height = node.children.map(child => this.height(child))
        return 1 + Math.max(...height)
    }

    count(node = this.root) {
        if (!node) return 0
        let count = 1
        for (let child of node.children) {
            count += this.count(child)
        }
        return count
    }

    KthSmallest(k) {
        let arr = this.bfs()
        let result = arr.sort((a, b) => a - b)
        return arr[k - 1]
    }

}

const myTree = new Tree(100);

// myTree.addChild('Root', 'Child1');
// myTree.addChild('Root', 'Child2');
// myTree.addChild('Child1', 'Grandchild1');
// myTree.addChild('Child1', 'Grandchild2');
// myTree.addChild('Child2', 'Grandchild3');
// myTree.addChild( 'Grandchild1','jaja');
// myTree.delete('Grandchild3')

myTree.addChild(100, 50);
myTree.addChild(100, 200);
myTree.addChild(200, 300);
myTree.addChild(50, 40);
myTree.addChild(50, 10);
// myTree.addChild( 'Grandchild1','jaja');
// myTree.delete('Grandchild3')
console.log(myTree.bfs())
console.log(myTree.height())
console.log(myTree.count())
console.log(myTree.KthSmallest(3))