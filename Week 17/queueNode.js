class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.front = null;
        this.rare = null;
    }
    enqueue(data){ 
        const newNode = new Node(data);
        if(!this.front){
            this.front = newNode;
            this.rare = newNode;
        }else{
            this.rare.next = newNode;
            this.rare = newNode;
        }
    }
    dequeue(){ 
        if(!this.front){ 
            console.log("Under Flow! Cannot perform dequeue");
            return;
        }
        this.front = this.front.next;
    }
    isEmpty(){ 
        return this.front == null;
    }
    getFront() { 
        if (!this.front) {
            console.log("Queue is empty");
            return;
        }
        return this.front.data;
    }
   
}
const queueInstance = new Queue(); 
queueInstance.enqueue(10);
queueInstance.enqueue(20);
queueInstance.enqueue(30);
queueInstance.dequeue();
queueInstance.dequeue();
queueInstance.dequeue(); 
queueInstance.dequeue();
console.log(queueInstance.getFront()); 
