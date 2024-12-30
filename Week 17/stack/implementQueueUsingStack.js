//<<<<<<<<<<<<<<< Aproach 1 >>>>>>>>>>>>>>>>


// class Queue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(x) {
//         this.stack1.push(x);
//     }

//     dequeue() {

//         if (!this.stack2.length) {
//             while (this.stack1.length) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (!this.stack2.length)
//             throw new Error("Queue is empty!");

//         return this.stack2.pop();
//     }
//     peek() {
//         if (this.isEmpty)
//             return 'Queue is empty!'
//         if (!this.stack2.length) {
//             while (this.stack1.length) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         return this.stack2[this.stack2.length - 1]
//     }

//     isEmpty() {
//         return !this.stack1.length && !this.stack2.length
//     }
// }

// const instance = new Queue();
// console.log(instance)
// instance.enqueue(10);
// instance.dequeue();
// console.log(instance.peek());

//<<<<<<<<<<<<<<< Aproach 2 >>>>>>>>>>>>>>>>


// class StackUsingQueue {
//     constructor() {
//         this.queue = []
//     }

//     push(x) {
//         let size = this.queue.length
//         this.queue.push(x)
//         for (let i = 0; i < size; i++) {
//             this.queue.push(this.queue.shift())
//         }
//     }

//     pop() {
//         return this.queue.shift()
//     }

//     peek() {
//         return this.queue[0]
//     }

//     display() {
//         console.log(this.queue)
//     }
// }

// const queue = new StackUsingQueue()

// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.pop();
// queue.display();


// <<<<<<<<<<<<<<<<<RoadsideCoderApproach>>>>>>>>>>>>>>>>>>>>>>

// Reversing order during dequeue 🎯

const MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
}
MyQueue.prototype.enqueue = function (data) {
    this.stack1.push(data);
}
MyQueue.prototype.dequeue = function () {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop();
    // while (this.stack2.length) {
    //     this.stack1.push(this.stack2.pop());
    // }
}
MyQueue.prototype.front = function () {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1];
}

MyQueue.prototype.isEmpty = function () {
    return this.stack1.length == 0 && this.stack2.length == 0
}
MyQueue.prototype.display = function () {
    console.log(this.stack2, this.stack1);
}

const instance = new MyQueue();
instance.enqueue(10)
instance.enqueue(20);
// instance.dequeue();
console.log(instance.front())
instance.display()