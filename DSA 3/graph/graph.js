class Graph {
    constructor() {
        this.map = new Map();
    }
    _addVertex(value) {
        this.map.set(value, []);
    }
    insert(vertexValue, EdgeValue, isBidirection = false) {
        if (!this.map.has(vertexValue)) {
            this._addVertex(vertexValue)
        }
        if (!this.map.has(EdgeValue)) {
            this._addVertex(EdgeValue);
        }
        this.map.get(vertexValue).push(EdgeValue);
        if (isBidirection)
            this.map.get(EdgeValue).push(vertexValue);

    }
    display() {
        for (let [vertex, edges] of this.map) {
            console.log(`${vertex}: ${this.map.get(vertex)}`);
        }
    }
    removeEdge(edge1, edge2) {
        if (this.map.has(edge1))
            this.map.set(edge1, this.map.get(edge1).filter((vertex, index) => vertex != edge2))
        if (this.map.has(edge2))
            this.map.set(edge2, this.map.get(edge2).filter((vertex, index) => vertex != edge1))
    }
    removeVertex(vertex) {
        if (this.map.has(vertex)) {
            for (let edge of this.map.get(vertex)) {
                this.map.set(edge, this.map.get(edge).filter(edge => edge != vertex))
            }
        }
        this.map.delete(vertex);
    }
    contains(value) {
        return this.map.has(value);
    }
    containsEdge(vertex1, vertex2) {
        if (!this.map.has(vertex1) || !this.map.has(vertex2)) {
            return false;
        }
        return this.map.get(vertex1).includes(vertex2) || this.map.get(vertex2).includes(vertex1)
    }

    bfs() {
        let visited = new Set();
        let result = [];
        for (let [vertex, _] of this.map) {
            if (!visited.has(vertex)) {
                let queue = [vertex];
                visited.add(vertex)
                while (queue.length) {
                    let current = queue.shift();
                    result.push(current);
                    const neighbours = this.map.get(current);
                    for (let neighbour of neighbours) {
                        if (!visited.has(neighbour)) {
                            queue.push(neighbour);
                            visited.add(neighbour);
                        }
                    }
                }
            }
        }
        console.log(result)
    }

    dfs() {
        const visited = new Set();
        const result = [];
        for (const [vertex, _] of this.map) {
            if (!visited.has(vertex))
                this._dfsHelper(vertex, visited, result);
        }
        console.log(result);
    }

    _dfsHelper(vertex, visited, result) {
        visited.add(vertex);
        result.push(vertex);
        const neighbours = this.map.get(vertex) || [];
        for (const neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                this._dfsHelper(neighbour, visited, result);
            }
        }
    }

    isCycle() {
        const visited = new Set();
        const stack = new Set();
        for (const [vertex, _] of this.map) {
            if (!visited.has(vertex)) {
                if (this._cycleHelper(vertex, stack, visited))
                    return true;
            }
        }
        return false
    }
    _cycleHelper(vertex, stack, visited) {
        visited.add(vertex);
        stack.add(vertex);
        const neighbours = this.map.get(vertex) || []
        for (const neighbour of neighbours) {
            if (stack.has(neighbour)) return true;
            if (!visited.has(neighbour)) {
                if (this._cycleHelper(neighbour, stack, visited))
                    return true;
            }
        }
        stack.delete(vertex);
        return false;
    }

}
const graph = new Graph();

graph.insert(10, 20);
graph.insert(20, 9);
graph.insert(30, 40);
graph.insert(40, 10);
graph.insert(30, 10);
graph.insert(10, 30);
// graph.removeEdge(10,30)
// graph.removeVertex(10);
graph.display();
graph.bfs();
graph.dfs();

console.log(graph.isCycle());
