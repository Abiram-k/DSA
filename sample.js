// const factorial = (n) => {
//     if (n == 0)
//         return 1

//     return n * factorial(n - 1)
// }

// const result = factorial(5);
// console.log(result)


// const arr = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25]
// target_element = 11;

// const findTarget = (arr, target_element) => {

//     let startIndex = 0;
//     let endIndex = arr.length - 1;
//     while (startIndex <= endIndex) {
//         let middle = Math.floor(startIndex + (endIndex - startIndex) / 2);
//         if (arr[middle] == target_element) {
//             return `Founded at position ${middle}`
//         } else if (arr[middle] > target_element) {
//             endIndex = middle - 1;
//         } else {
//             startIndex = middle + 1;
//         }
//     }
//     return 'Element not found';
// }
// const result = findTarget(arr,target_element);
// console.log(result);


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class SingleList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
//     insertNode(value) {
//         let newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.head.next = null;
//             this.tail = newNode;
//             this.tail.next = null;
//         }
//         this.tail.next = newNode;
//         newNode.next = null
//         this.tail = newNode;
//         // this.tail.next = null;
//         // newNode = this.tail

//     }
//     displayNode() {
//         if (!this.head) {
//             console.log("No nodes are there!");
//             return;
//         }
//         let current = this.head;
//         let result = ""
//         while (current) {
//             result += current.value + " => "
//             current = current.next
//         }
//         console.log(result + "null")
//     }
// }

// const instance = new SingleList();
// instance.insertNode(10);
// instance.insertNode(20);
// instance.displayNode();


// let string = "Hello world";

// let count = 1;
// const removeL = (string, letter) => {


//     if (string.length <= 0)
//         return "";

//     if (string[0] == letter){
//         return removeL(string.slice(1), letter)
//     }
//     else{
//         return removeL(string.slice(1), letter);
//     }
// }

// const result = removeL(string, "l");

// console.log(result);


// const deleteNode = (value)=>{

//     if (head == null) {
//         console.log("No nodes are there");
//         return;
//     }
//     let current = head;
//     let prev = null;
//     while (current && current.value != value) {
//         prev = current;
//         current = current.next;
//     }
//     prev.next = current.next;
//     current.next.prev = prev;
// }


// let arr = [3, 7, 2, 17, 18, 19, 4, 5];
// let count = [];
// let maximum = []
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0 || arr[i] > arr[i - 1]) {
//         count.push(arr[i]);
//     } else {
//         if (count.length > maximum.length) {
//             maximum = count;
//         }
//         count = [arr[i]];
//     }
// }
// if (maximum.length < count.length) {
//     maximum = count;
// }
// console.log(maximum);


// class Stack {
//     constructor() {
//         this.stack = [];
//     }
//     push(data) {
//         this.stack.push(data);
//     }
//     pop() {
//         this.stack.pop();
//     }
//     top() {
//         this.stack[this.stack.length - 1]
//     }
//     isEmpty() {
//         return !this.stack.length
//     }
//     removeMiddle() {
//         const index = Math.floor(this.stack.length / 2);
//         this.removeMidleHelper(index);
//     }
//     removeMidleHelper(index) {
//         if (index == 0) {
//             this.stack.pop();
//             return;
//         }
//         const poppedEle = this.stack.pop();
//         this.removeMidleHelper(index - 1)
//         this.stack.push(poppedEle);
//     }

// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.removeMiddle();
// console.log(stack.stack)



// const mergeSort = (arr) => {
//     if (arr.length <= 1)
//         return arr;

//     let middle = Math.floor(arr.length / 2);
//     let firstHalf = arr.slice(0, middle);
//     let secondHalf = arr.slice(middle, arr.length)

//     return join(mergeSort(firstHalf), mergeSort(secondHalf))
// }

// const join = function (firstHalf, secondHalf) {
//     let newArray = [];
//     let j = 0;
//     let i = 0;

//     while (i < firstHalf.length && j < secondHalf.length) 
//         if (firstHalf[i] < secondHalf[j])
//             newArray.push(firstHalf[i++]);
//         else
//             newArray.push(secondHalf[j++]);

//     while (i < firstHalf.length)  
//         newArray.push(firstHalf[i++])

//     while (j < secondHalf.length)
//         newArray.push(secondHalf[j++])

//     return newArray;
// }

// let array =[1,2,3,4,5,433,3,3,322,3];

// const sortedArray = mergeSort(array); 
// console.log(sortedArray); 


// class QueueUsingStack {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }
//     dequeue(){
//         if(!this.stack2.length){
//             while(this.stack1.length){
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         this.stack2.pop();
//     }
// }


// let string = 'hello';
// function reverseString(string) {
//     let result = [];
//     let stringArr = string.split("")
//     for (let i = 0; i < string.length; i++) {
//         result.push(stringArr.pop());
//     }
//     return result.join("")
// }
// const result = reverseString(string);
// console.log(result);





