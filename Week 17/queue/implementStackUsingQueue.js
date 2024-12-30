

// Rearranging during push 🎯

const MyStack = function () {
    this.q1 = [];
    this.q2 = []; // for temperary swapping of elements , to preserve it 😃
}

MyStack.prototype.push = function (data) {

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
MyStack.prototype.display = function (){
    console.log("QUEUE 1: ", instance.q1);
    console.log("QUEUE 2: ", instance.q2);
}

const instance = new MyStack();
instance.push(30);
instance.push(40);
instance.push(10);
console.log(instance.top());
instance.display();






// class QueueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
    
//     enqueue(x){
//         this.stack1.push(x)
//     }
    
//     dequeue(){
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
    
//     peek(){
//          if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack2.length-1]
//     }
    
//     display(){
//         console.log(this.stack1)
//         console.log(this.stack2)
//     }
// }

// const queue = new QueueUsingStack()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// queue.display()