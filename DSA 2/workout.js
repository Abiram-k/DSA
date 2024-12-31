const array = [34, 53, 42, 34345, 345, 234];


// Time Complexit (o(n2))
// Space Complexity (o(1))
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}
// selectionSort(array);
// console.log(array)

////////////////////////////////////////////////////////////////////

// Time Complexity (o(n2)), Best Case (o(n))
// Space Complexity o(1)
const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let swapped = false;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
        if (swapped)
            return;
    }
}
// bubbleSort(array);
// console.log(array)

//////////////////////////////////////////////////////////////////////

// Time Complexity (o(n2)) , Best Case 0(n)
// Space Complexity (0(1))
const insertionSort = (arr) => {
    for (let i = 1; i <= arr.length - 1; i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && key < arr[j]) {
            // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key;
    }
}
// insertionSort(array);
// console.log(array);

//////////////////////////////////////////////////////////////////////

// Time Complexity (o(n log n))
// Space Complexity (o(1))
const quickSort = (arr) => {
    quickSortHelper(arr, 0, arr.length - 1);
}
const quickSortHelper = (arr, startIndex, endIndex) => {
    if (startIndex >= endIndex) {
        return;
    }
    let pivot = startIndex;
    let left = startIndex + 1;
    let right = endIndex;
    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right);
            left++;
            right--;
        }
        else if (arr[left] < arr[pivot])
            left++;
        else if (arr[right] > arr[pivot])
            right--;
    }
    swap(arr, pivot, right);
    quickSortHelper(arr, startIndex, right - 1);
    quickSortHelper(arr, right + 1, endIndex);
}
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// quickSort(array)
// console.log(array)

////////////////////////////////////////////////////////////

// Time Complexity (o(n log n))
// Space Complexity (o(n)) Because of using additional array.
const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let middle = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middle);
    let secondHalf = arr.slice(middle, arr.length);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
const join = (firstArray, secondArray) => {
    // console.log(firstArray,secondArray)
    const newArray = [];
    let i = 0;
    let j = 0;
    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] > secondArray[j]) {
            newArray.push(secondArray[j++])
        } else {
            newArray.push(firstArray[i++]);
        }
    }
    while (i < firstArray.length) {
        newArray.push(firstArray[i++])
    }
    while (j < secondArray.length) {
        newArray.push(secondArray[j++]);
    }
    return newArray;
}
// const mergeResult = mergeSort(array);
// console.log(mergeResult);


/////////////////////////////////////////////////////////////////////////


class BasicStack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        return this.stack.push(data);
    }
    pop() {
        return this.stack.pop()
    }
    top() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return !this.stack.length
    }
    size() {
        return this.stack.length;
    }
}

// const stackInstance = new BasicStack();
// stackInstance.push(10);
// stackInstance.push(20);
// stackInstance.push(30);
// stackInstance.pop();
// console.log(stackInstance.stack);

/////////////////////////////////////////////////////////////

class BasicQueue {
    constructor() {
        this.queue = [];
        this.queue1 = []
    }
    enqueu(data) {
        while (this.queue.length) {
            this.queue1.push(this.queue.shift());
        }
        this.queue.push(data)
        while (this.queue1.length) {
            this.queue.push(this.queue1.shift());
        }
    }
    dequeue() {
        this.queue.shift()
    }
    front() {
        return this.queue[0]
    }
    isEmpty() {
        return !this.queue.length;
    }
    size() {
        return this.queue.length;
    }
}

// const instance = new BasicQueue();
// instance.enqueu(10);
// instance.enqueu(20);
// console.log(instance.queue)

///////////////////////////////////////////////////////////////

class StackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(data) {
        while (this.queue1.length)
            this.queue2.push(this.queue1.shift());

        this.queue1.push(data);

        while (this.queue2.length)
            this.queue1.push(this.queue2.shift());
    }
    pop() {
        return this.queue1.shift();
    }
    isEmpty() {
        return !this.queue1.length
    }
}
// const instance = new StackUsingQueue();
// instance.push(10)
// instance.push(30);
// console.log(instance.queue1);

////////////////////////////////////////////////////////////////

class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(data) {
        this.stack1.push(data)
    }
    dequeue() {
        if (!this.stack2.length) {
            while (this.stack1.length)
                this.stack2.push(this.stack1.pop())
        }
        this.stack2.pop();
    }
    isEmpty() {
        return !this.stack1.length && !this.stack2.length
    }
    front() {
        if (!this.stack2.length) {
            while (this.stack1.length)
                this.stack2.push(this.stack1.pop())
        }
        return this.stack2[0];
    }
    display() {
        return this.stack1.length ? this.stack1 : this.stack2
    }
}

// const instance = new QueueUsingStack();
// instance.enqueue(10)
// instance.enqueue(30);
// instance.dequeue();
// console.log(instance.display())

//////////////////////////////////////////////////////////////////////

const removeMiddleFromStack = () => {
    let index = Math.floor(array.length / 2);
    removeMiddleFromStackHelper(index)
}

const removeMiddleFromStackHelper = (index) => {
    if (index == 0) {
        array.pop();
        return;
    }
    let temp = array.pop();
    removeMiddleFromStackHelper(index - 1);
    array.push(temp);
}
// removeMiddleFromStack();
// console.log(array);
// [ 53, 42, 34345, 345, 234 ]
// [ 34, 53, 42, 34345, 345, 234 ]

/////////////////////////////////////////////////////////////////

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class QueueUsingNodes {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    dequeue() {
        if (!this.head) {
            console.log("No elements are there!");
            return
        }
        this.head = this.head.next;
    }
    frot() {
        return this.head.value
    }
    isEmpty() {
        return this.head == null
    }
    display() {
        if (!this.head) {
            console.log("No values are there!");
            return;
        }
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result)
    }
}

// const instance = new QueueUsingNodes();
// instance.enqueue(10);
// instance.enqueue(20);
// instance.dequeue();
// instance.display()

////////////////////////////////////////////////////////////

class StackUsingNode {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    pop() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let prev = null
        while (current && current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev
    }
    top() {
        if (!this.head) {
            return;
        }
        return this.tail.value;
    }
    isEmpty() {
        return !this.head
    }
    display() {
        if (!this.head) {
            console.log("No values are there!");
            return;
        }
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result)
    }
}

// const instance = new StackUsingNode();
// instance.push(10)
// instance.push(20)
// instance.pop();
// console.log(instance.top())
// instance.display();


/////////////////////////////////////////////////////////////////////

class ChainingHashTable {
    constructor(size) {
        if (!size)
            console.log("Enter size of hash table")
        this.table = new Array(size).fill(null);
        this.size = size;
    }
    hash(key) {
        let index = 0;
        const PRIME_NO = 31;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            index = (index * PRIME_NO + charCode) % this.size;
        }
        return index;
    }
    set(key, value) {
        const index = this.hash(key);

        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
            return;
        } else {
            const haveKey = bucket.find(val => val[0] == key);
            if (haveKey) {
                haveKey[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        if (!key)
            return;
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            console.log("key not founded !");
            return;
        } else {
            const haveKey = bucket.find(val => val[0] == key);
            if (haveKey)
                return haveKey[1];
            else
                return 'no key founded!';
        }
    }
    remove(key) {
        if (!key)
            return;
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            console.log("key not founded !");
            return;
        } else {
            const haveKey = bucket.find(val => val[0] == key);
            if (haveKey) {
                bucket.splice(bucket.indexOf(haveKey), 1);
            }
            else {
                return 'no key founded!';
            }
        }
    }
    display() {
        console.log(this.table)
    }
}

// const instance = new ChainingHashTable(10);
// instance.set("name", "abiram")
// // instance.remove("name")
// console.log(instance.get("name"));
// instance.display();

////////////////////////////////////////////////////////////////

class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HasTableList {
    constructor() {
        this.head = null;
    }
    set(key, value) {
        const newNode = new HashNode(key, value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    get(key) {
        let current = this.head;
        if (!current) {
            return;
        }
        while (current) {
            if (current.key == key) {
                return current.value;
            }
            current = current.next;
        }
        throw new Error("Key not found!")
    }
    remove(key) {
        let current = this.head;
        if (!current) {
            return;
        }
        if (this.head.key == key) {
            this.head = this.head.next
        }
        let prev = null;
        while (current && current.key != key) {
            prev = current;
            current = current.next;
        }
        if (prev)
            prev.next = current.next;

        return 'No Key were founded!';
    }
    display() {
        let result = [];
        let current = this.head;
        if (!current) {
            return;
        }
        while (current) {
            result.push(current.value)
            current = current.next;
        }
        console.log(result);
    }
}

class NodeHash {
    constructor(size) {
        this.table = new Array(size).fill(null).map(() => new HasTableList());
        this.size = size;
    }
    hash(key) {
        if (!key)
            return;
        let index = 0;
        let PRIME_NO = 31;
        for (let i = 0; i < key.length; i++) {
            let charCode = key.charCodeAt(i);
            index = (index * PRIME_NO + charCode) % this.size;
        }
        return index;
    }
    set(key, value) {
        const index = this.hash(key);
        this.table[index].set(key, value);
    }
    get(key) {
        const index = this.hash(key);
        return this.table[index].get(key);
    }
    remove(key) {
        const index = this.hash(key);
        this.table[index].remove(key);
    }
    display() {
        console.log(this.table);
    }
}

// const instance = new NodeHash(10);
// instance.set("name", "abiram")
// instance.set("mane", "abiram")
// console.log(instance.get("name"))
// instance.remove("name");
// instance.display();

//////////////////////////////////////////////////////////////

class LinearProabing {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }
    hash(key) {
        if (!key)
            return;
        let index = 0;
        let PRIME_NO = 31;
        for (let i = 0; i < key.length; i++) {
            let charCode = key.charCodeAt(i);
            index = (index * PRIME_NO + charCode) % this.size;
        }
        return index;
    }
    insert(key, value) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (this.table[index] == null) {
                this.table[index] = { key, value };
                return;
            } else if (this.table[index].key == key) {
                this.table[index].value = value;
                return;
            }
            index = (index + 1) % this.size;
        }
        console.log("Hash table is Full!");
    }
    get(key) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (this.table[index].key == key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
        }
        return 'Key not founded!'
    }
    remove(key) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (this.table[index] == null) {
                return;
            }
            else if (this.table[index].key == key) {
                this.table[index] = null
            }
            index = (index + 1) % this.size;
        }
        console.log("Key not founded")
    }
    display() {
        console.log(this.table);
    }
}
// const instance = new LinearProabing(5);
// instance.insert("name", "abiram");
// instance.insert("mane", "abhishek");
// // instance.remove("mane");
// console.log(instance.get("mane"))
// instance.display();


/////////////////////////////////////////////////////////



// Sorting...

let arr = [32, 435, 23, 3, 1, 6, 2];
let length = arr.length;

const mergeSortSample = (arr) => {
    if (arr.length == 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let firstArray = arr.slice(0, middle);
    let secondArray = arr.slice(middle, arr.length);
    console.log(firstArray,secondArray)

    return joinMerge(mergeSortSample(firstArray), mergeSortSample(secondArray))
}
const joinMerge = (firstArray, secondArray) => {
    const newArray = [];
    let i = 0;
    let j = 0;
    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] > secondArray[j]) {
            newArray.push(secondArray[j++]);
        }
        else if (firstArray[i] < secondArray[j]) {
            newArray.push(firstArray[i++]);
        }
    }
    while (i < firstArray.length) {
        newArray.push(firstArray[i++])
    }
    while (j < secondArray.length) {
        newArray.push(secondArray[j++])
    }
    return newArray;
}
console.log(mergeSortSample(arr));
// console.log(arr)