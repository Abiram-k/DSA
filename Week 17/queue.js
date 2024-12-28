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


var MyCircularQueue = function(k) {
    this.queue = [];
    this.size = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.queue.length == this.size) return false;
    this.queue.push(value);
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.queue.length == 0) return false;
    this.queue.shift();
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.queue.length == 0) return -1;
    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.queue.length == 0) return -1;
    return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length == 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.queue.length == this.size;
};


