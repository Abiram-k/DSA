class Graph {
  constructor() {
    this.adjencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, bidirectional = false) {
    if (!this.adjencyList[vertex1]) this.addVertex(vertex1)
    if (!this.adjencyList[vertex2]) this.addVertex(vertex2)
    this.adjencyList[vertex1].push(vertex2)
    if (bidirectional) {
      this.adjencyList[vertex2].push(vertex1)
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjencyList[vertex1]) {
      this.adjencyList[vertex1] = this.adjencyList[vertex1].filter((item) => item !== vertex2)
    }
    if (this.adjencyList[vertex2]) {
      this.adjencyList[vertex2] = this.adjencyList[vertex2].filter((item) => item !== vertex1)
    }
  }

  removeVertex(vertex) {
    if (this.adjencyList[vertex]) {
      for (let neighbour of this.adjencyList[vertex]) {
        this.adjencyList[neighbour] = this.adjencyList[neighbour].filter((item) => item !== vertex)
      }
      delete this.adjencyList[vertex];
    }
  }


  contains(vertex) {
    return !!this.adjencyList[vertex]
  }

  containsEdge(vertex1, vertex2) {
    return (
      this.adjencyList[vertex1]?.includes(vertex2) ||
      this.adjencyList[vertex2]?.includes(vertex1)
    )
  }

  bfs() {
    let visited = new Set()
    let result = []
    for (let vertex in this.adjencyList) {
      if (!visited.has(vertex)) {
        let queue = [vertex]
        while (queue.length > 0) {
          let current = queue.shift()
          if (!visited.has(current)) {
            visited.add(current)
            result.push(current)
            queue.push(...this.adjencyList[current])
          }
        }
      }
    }
    return result
  }

  dfs() {
    const visited = new Set()
    const result = []
    for (let vertex in this.adjencyList) {
      if (!visited.has(vertex)) {
        this.dfsHelper(vertex, visited, result)
      }
    }
    return result
  }

  dfsHelper(vertex, visited, result) {
    if (!visited.has(vertex)) {
      visited.add(vertex)
      result.push(vertex)
      for (let neighbour of this.adjencyList[vertex]) {
        this.dfsHelper(neighbour, visited, result)
      }
    }
  }

  isCycle() {
    let visited = new Set()
    let stack = new Set()
    for (let vertex in this.adjencyList) {
      if (!visited.has(vertex)) {
        if (this.helper(vertex, visited, stack))
          return true
      }
    }
    return false
  }

  helper(vertex, visited, stack) {
    visited.add(vertex)
    stack.add(vertex)
    for (let neighbour of this.adjencyList[vertex]) {
      if (stack.has(neighbour)) return true
      if (!visited.has(neighbour)) {
        if (this.helper(neighbour, visited, stack)) {
          return true
        }
      }
    }
    stack.delete(vertex)
    return false
  }

  display() {
    for (let vertex in this.adjencyList) {
      console.log(`${vertex} -> ${this.adjencyList[vertex].join(", ")}`);
    }
  }


}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('C', 'A')
graph.addEdge('B', 'C')
// graph.addEdge('D','F')
console.log(graph.isCycle())

graph.display()