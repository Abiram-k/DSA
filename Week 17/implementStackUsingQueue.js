const MyStack = function () {
    this.q1 = [];
    this.q2 = []; // for temperary swapping of elements , to preserve it 😃
}

MyStack.prototype.push = function (data) {
    // this.q2 = [...this.q1];
    // this.q1 = []
    // this.q1.push(data)
    // this.q1 = [...this.q1, ...this.q2]
    // this.q2 = []

    while (this.q1.length) {
        this.q2.push(this.q1.shift()) // shift and storing in another queue
    }

    this.q1.push(data);// then pushing into queue

    while (this.q2.length) {
        this.q1.push(this.q2.shift());// then pushing back to queue , if you did like this you can get last inserted value at the first
    }

}

MyStack.prototype.pop = function () {
    return this.q1.shift()
}
MyStack.prototype.top = function () {
    return this.q1[0];
}
MyStack.prototype.empty = function () {
    return this.q1.length == 0
}

const instance = new MyStack();
instance.push(30)
instance.push(40)
instance.push(10)
console.log(instance.top())
console.log("QUEUE 1: ", instance.q1);
console.log("QUEUE 2: ", instance.q2);