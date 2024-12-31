class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    pop() {
        if (!this.top) {
            console.log("Stack is empty");
            return;
        }
        this.top = this.top.next;
    }
    displayStack() {
        let current = this.top;
        while (current) {
            console.log(current.data + " ");
            current = current.next;
        }
    }
}
const stackInstance = new Stack(); 
stackInstance.push(20)
stackInstance.push(50)
stackInstance.pop()
stackInstance.pop()
stackInstance.pop()
stackInstance.displayStack()