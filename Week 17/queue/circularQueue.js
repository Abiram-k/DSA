const MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
};
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.queue.length == this.size) return false;
    this.queue.push(value);
    return true;
};
MyCircularQueue.prototype.deQueue = function () {
    if (this.queue.length == 0) return false;
    this.queue.shift();
    return true;
};
MyCircularQueue.prototype.Front = function () {
    if (this.queue.length == 0) return -1;
    return this.queue[0];
};
MyCircularQueue.prototype.Rear = function () {
    if (this.queue.length == 0) return -1;
    return this.queue[this.queue.length - 1];
};
MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length == 0;
};
MyCircularQueue.prototype.isFull = function () {
    return this.queue.length == this.size;
};
const instance = new MyCircularQueue();
console.log(instance.enQueue(20));
console.log(instance.enQueue(10));
console.log(instance.deQueue());
console.log("Front: ",instance.Front());    
console.log("Rear: ",instance.Rear());      
console.log("ISEMPTY: ",instance.isEmpty());  
console.log("ISFULL: ",instance.isFull());   
