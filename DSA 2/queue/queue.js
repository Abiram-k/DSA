class Queue {
    constructor() {
        this.queue = [];
        this.front = null;
        this.rare = null;
    }
    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        if (this.isEmpty) {
            console.log("Under Flow! Cannot perform dequeue")
        }
        console.log(this.queue.shift())
    }
    isEmpty() {
        return this.queue.length == 0
    }
    front() {
        if (this.isEmpty) {
            console.log("Stack is empty")
            return;
        }
        return this.queue[0]
    }
}

