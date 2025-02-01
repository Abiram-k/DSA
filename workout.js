// Searching
// Linear Search ... 
const linearArr = [234, 23, 423, 543, 5, 45, 4, 654, 654, 435];
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return `Target found at position: ${i}`
        }
    }
    return 'Target not founded'
}
const liPostion = linearSearch(linearArr, 4);
// console.log(liPostion);

// Binary Search ...(Normal)
const binaryArr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
const binarySearch = (arr, target) => {
    const length = arr.length;
    let startIndex = 0;
    let endIndex = length - 1;

    while (startIndex <= endIndex) {
        // const middle = Math.floor(endIndex - startIndex / 2);
        let middle = Math.floor(startIndex + (endIndex - startIndex) / 2);
        if (arr[middle] == target)
            return `Target found at position: ${middle}`
        else if (arr[middle] < target)
            startIndex = middle + 1
        else
            endIndex = middle - 1
    }
    return 'Target not founded'
}
const biPosition = binarySearch(binaryArr, 7);
// console.log(biPosition);

// Binary Search ...(Recursion)
const binarySearchRecursion = (arr, target) => {
    const startIndex = 0;
    const endIndex = arr.length - 1;
    return binarySearchHelper(arr, target, startIndex, endIndex);
}
const binarySearchHelper = (arr, target, startIndex, endIndex) => {

    if (startIndex > endIndex) return 'Target not founded';

    let middle = Math.floor(startIndex + (endIndex - startIndex) / 2);

    if (arr[middle] == target)
        return `Target found at position: ${middle}`;
    else if (arr[middle] < target)
        return binarySearchHelper(arr, target, middle + 1, endIndex);
    else
        return binarySearchHelper(arr, target, startIndex, middle - 1)
}
const biRecPosition = binarySearchRecursion(binaryArr, 7);
// console.log(biRecPosition);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

// Linked List
class SingleLinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SingleLinkListEx {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insert(value) {
        const newNode = new SingleLinkedNode(value);
        if (!this.tail) {
            this.tail = this.head = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    remove(value) {
        let current = this.head;
        if (!current) {
            console.log("No values are there !");
            return;
        }
        if (value == this.head.value) {
            this.head = this.head.next
        }
        let prev = null
        while (current && current.value != value) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }
    display() {
        let current = this.head;
        if (!current) {
            console.log("No values are there !");
            return;
        }
        let result = '';
        while (current) {
            result += current.value + " => ";
            current = current.next;
        }
        console.log(result)
    }
    highestValueNode() {
        let current = this.head;
        let highest = this.head.value;
        while (current) {
            if (highest < current.value)
                highest = current.value
            current = current.next
        }
        console.log(highest);
    }
    sortList() {
        let current = this.head;
        while (current) {
            let pointer = current.next;
            while (pointer) {
                if (current.value > pointer.value) {
                    let temp = current.value;
                    current.value = pointer.value;
                    pointer.value = temp;
                }
                pointer = pointer.next;
            }
            current = current.next;
        }
    }
    deleteMiddleNode() {
        let fast = this.head;
        let slow = this.head;
        let prev = null
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
    }
}
const SingleList = new SingleLinkListEx();
// SingleList.insert(10)
// SingleList.insert(50)
// SingleList.insert(20)
// SingleList.insert(40)
// SingleList.insert(30)
// // SingleList.remove(20); 
// SingleList.highestValueNode()
// SingleList.sortList()
// SingleList.deleteMiddleNode()

// SingleList.display();

// Double Linked List
class DoubleLinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkListEx {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insert(value) {
        const newNode = new DoubleLinkedNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.head.next = this.tail;
            this.tail = newNode;
            this.tail.prev = this.head;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    display() {
        let current = this.head;
        if (!current) {
            console.log("No values are there !");
            return;
        }
        let result = ''
        while (current) {
            result += current.value + " => "
            current = current.next;
        }
        console.log(result)
    }
    removeDuplicate() {
        let current = this.head;
        while (current) {
            let after = current.next;
            let prev = current;
            while (after) {
                if (after.value == current.value) {
                    prev.next = after.next
                } else {
                    prev = after;
                }
                after = after.next;
            }
            current = current.next
        }
    }
}
const doubleList = new DoubleLinkListEx();
// doubleList.insert(10);
// doubleList.insert(10);
// doubleList.insert(10);
// doubleList.insert(4);
// doubleList.insert(4);
// doubleList.insert(89);
// doubleList.removeDuplicate()
// doubleList.display();


// Recursion
//factorial
const findFactoralRecu = (input) => {
    if (!input) return 'no values'
    if (input <= 0)
        return 1;
    return input * findFactoralRecu(input - 1)
}
const factREcResult = findFactoralRecu(5);
// console.log(factREcResult);

//fibanocci
const fibanocciRecursion = (input, sequence = [0, 1]) => {
    if (sequence.length >= input + 1)
        return sequence
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return fibanocciRecursion(input, sequence)
}
const fibanocciRecResult = fibanocciRecursion(5);
// console.log(fibanocciRecResult);


// Stack

class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        return !this.size();
    }
    top() {
        return this.stack[this.size() - 1]
    }
    size() {
        return this.stack.length;
    }
    reverse() {
        const resultArr = [];
        for (let i = this.size() - 1; i >= 0; i--) {
            resultArr.push(this.pop());
        }
        this.stack = [...resultArr]
    }
}
const stackArrInstance = new Stack();
// stackArrInstance.push(10);
// stackArrInstance.push(80)
// stackArrInstance.push(23) 
// stackArrInstance.push(235);
// // stackArrInstance.pop()
// stackArrInstance.reverse()
// console.log(stackArrInstance.stack);

// remove middle using stack
let stackRM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const removeMiddleUsingStack = () => {
    let middle = Math.floor(stackRM.length / 2)
    removeMiddleHelper(middle);
}
const removeMiddleHelper = (middle) => {
    if (middle <= 0) {
        stackRM.pop();
        return;
    }
    let poppedOne = stackRM.pop()
    removeMiddleHelper(middle - 1);
    stackRM.push(poppedOne);
}

removeMiddleUsingStack();
// console.log(stackRM)


//implementing queue using stack
class QueueUsingStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    enqueue(value) {
        this.queue1.push(value);
    }
    dequeue() {
        while (this.queue1.length) {
            this.queue2.push(thie.queue1.pop());
        }
        this.queue2.pop();

        while (this.queue2.length) {
            this.queue1.push(this.queue2.pop());
        }
    }
    isEmpty() {
        return !this.queue1.length
    }
    front() {
        while (this.queue1.length) {
            this.queue2.push(thie.queue1.pop());
        }
        const front = this.queue2[this.queue2.length - 1];

        while (this.queue2.length) {
            this.queue1.push(this.queue2.pop());
        }
        return front;
    }
}

// stack using linked list

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class StackUsingLinkedList {
    constructor() {
        this.top = null;
    }
    push(value) {
        const newNode = new StackNode(value);
        if (!this.top) {
            this.top = newNode;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }
    pop() {
        if (!this.top)
            return;
        this.top = this.top.next;
    }
    display() {
        let current = this.top;
        let result = ''
        while (current) {
            result += current.data + " => "
            current = current.next;
        }
        console.log(result);
    }
    isEmpty() {
        return !this.top
    }
}
const StackUsingLinkedListInstance = new StackUsingLinkedList();
// StackUsingLinkedListInstance.push(10);
// StackUsingLinkedListInstance.push(40);
// StackUsingLinkedListInstance.push(50);
// StackUsingLinkedListInstance.display();
// console.log(StackUsingLinkedListInstance.top)


// Queue

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue.push(value);
    }
    dequeue() {
        if (this.isEmpty())
            return;
        this.queue.shift();
    }
    front() {
        return this.queue[0];
    }
    rare() {
        return this.queue[this.size() - 1]
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return !this.queue.length
    }
}

const queueInstance = new Queue();
// queueInstance.enqueue(1010);
// queueInstance.enqueue(3243);
// queueInstance.enqueue(234);
// queueInstance.dequeue();
// console.log(queueInstance.front());
// console.log(queueInstance.rare());
// console.log(queueInstance.isEmpty());
// console.log(queueInstance.queue)

// Queue Usin LinkedList

class QueueNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class QueueUsingList {
    constructor() {
        this.front = null;
        this.rare = null;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (!this.front) {
            this.front = newNode;
            this.rare = newNode;
        }
        this.rare.next = newNode
        this.rare = newNode;
    }
    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        this.front = this.front.next;
    }
    isEmpty() {
        return !this.front
    }
    display() {
        if (this.isEmpty())
            return;
        let current = this.front;
        let result = ''
        while (current) {
            result += current.data + " => "
            current = current.next;
        }
        console.log(result);
    }
}

const queueUsingListInstance = new QueueUsingList();
// queueUsingListInstance.enqueue(10)
// queueUsingListInstance.enqueue(40)
// queueUsingListInstance.enqueue(30)
// queueUsingListInstance.dequeue();
// queueUsingListInstance.display();

// Circular Queue

class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.size = size;
    }
    enqueue(value) {
        if (this.size() == this.size)
            return 'full'
        this.queue.push(value);
    }
    dequeue() {
        if (this.queue.length == 0) return 'No elements';
        return this.queue.shift();
    }
    front() {
        if (this.queue.length == 0) return 'No elements';
        return this.queue[0];
    }
    rare() {
        if (this.queue.length == 0) return 'No elements';
        return this.queue[this.size() - 1]
    }
    size() {
        return this.queue.length;
    }
}

// Stack using Queue
class StackUsinQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(value) {
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(value);
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }
    pop() {
        this.stack2.shift();
    }
    top() {
        this.stack2[0];
    }
    isEmpty() {
        return !this.stack2.length
    }
    display() {
        console.log(this.stack2)
    }
}

const stackUsingQueueInstance = new StackUsinQueue();
// stackUsingQueueInstance.push(100)
// stackUsingQueueInstance.push(23400)
// stackUsingQueueInstance.push(132);
// stackUsingQueueInstance.pop()
// stackUsingQueueInstance.display();


// Sorting 
// Selection Sort
function swapHelper(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
}
const sortExArray = [1, 6, 3, 2, 4, 5, 10, 8, 9, 7];
const slectionSort = (array) => {
    if (!array || !array.length)
        return;
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (array[min] > array[j])
                swapHelper(array, min, j)
        }
    }
}
// slectionSort(sortExArray);

// Bubble Sort 
const bubbleSort = (array) => {
    if (!array || !array.length)
        return;
    const length = array.length;
    for (let i = length - 1; i >= 0; i--) {
        let swapped = false;
        for (let j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                swapHelper(array, j, j + 1)
                swapped = true;
            }
            if (!swapped)
                break
        }
    }
}
// bubbleSort(sortExArray);

// Insertion sort
const insertionSort = (array) => {
    if (!array || !array.length)
        return;
    for (let i = 0; i < array.length; i++) {
        let target = array[i];
        let j = i - 1;
        while (j && array[j] > target) {
            swapHelper(array, j, j + 1)
            j--
        }
    }
}
// insertionSort(sortExArray);

const mergeSort = (array) => {
    let length = array.length;
    if (length <= 1)
        return array;
    let middle = Math.floor(length / 2)
    let firstHalf = array.slice(0, middle);
    let secondHalf = array.slice(middle);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
const merge = (firstHalf, secondHalf) => {
    let newArray = [];
    let i = 0;
    let j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] > secondHalf[j])
            newArray.push(secondHalf[j++]);
        else
            newArray.push(firstHalf[i++]);
    }
    while (i < firstHalf.length) {
        newArray.push(firstHalf[i++])
    }
    while (j < secondHalf.length) {
        newArray.push(secondHalf[j++])
    }
    return newArray;
}


const quickSort = (array) => {
    quickSortHelper(array, 0, array.length - 1);
    return array;
};

const quickSortHelper = (array, startIndex, endIndex) => {
    if (startIndex >= endIndex) return;

    let pivot = startIndex;
    let left = startIndex + 1;
    let right = endIndex;

    while (left <= right) {
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            swapHelper(array, left, right);
            left++;
            right--;
        }
        if (array[left] <= array[pivot]) left++;
        if (array[right] >= array[pivot]) right--;
    }

    swapHelper(array, pivot, right);

    quickSortHelper(array, startIndex, right - 1);
    quickSortHelper(array, right + 1, endIndex);
};

// Example usage
const sdflk = [435, 3, 4543, 534, 53, 45, 345, 34];
// console.log(quickSort(sdflk));

// HashTable

class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }
    hash(key) {
        let PRMIE_NUMBER = 31;
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            let char = key.charCodeAt(i);
            index += (index * PRMIE_NUMBER + char) % this.size;
        }
        return index;
    }
    insert(key, value) {
        const index = this.hash(key);
        let bucket = this.table[index];
        if (bucket == null) {
            this.table[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find((item) => item[0] == key)
            if (sameKeyItem)
                sameKeyItem[1] = value;
            else
                bucket.push([key, value])
        }
    }
    get(key) {
        const index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] == key);
            if (sameKeyItem)
                return sameKeyItem[1];
        }
        return null
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            let sameKeyItemIndex = bucket.findIndex((item) => item[0] == key);
            bucket.splice(sameKeyItemIndex, 1);
            return true;
        }
        return null;
    }
}
const hashTableInstance = new HashTable();
// hashTableInstance.insert("name", "abiram");
// hashTableInstance.insert("mane", "athu");
// hashTableInstance.remove("name")
// console.log(hashTableInstance.table)
// console.log(hashTableInstance.get("name"));


// Linear Probing
class LinearProbing {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }
    hash(key) {
        const PRMIE_NUMBER = 31;
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            index = (index * PRMIE_NUMBER + charCode) % this.size;
        }
        return index;
    }
    insert(key, value) {
        let index = this.hash(key);
        console.log(index)
        for (let i = 0; i < this.size; i++) {
            if (!this.table[index]) {
                this.table[index] = { key, value };
                return true;
            } else if (this.table[index].key == key) {
                this.table[index].value = value;
                return true;
            }
            index = (index + 1) % this.size;
        }
        throw new Error("Hash table is full");
    }
    remove(key) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (!this.table[index]) {
                console.log("No elements are there !");
                return null
            } else if (this.table[index].key == key) {
                this.table[index] = null;
                return true;
            }
            index = (index + 1) % this.size
        }
    }
    has(key) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (!this.table[index]) {
                console.log("No Key found !");
                return null;
            } else if (this.table[index].key == key) {
                console.log(this.table[index].value)
                return true;
            }
            index = (index + 1) % this.size
        }
    }
}
const linearProbingInstance = new LinearProbing(5);
// linearProbingInstance.insert("name", "abiram");
// linearProbingInstance.insert("mane", "abiram");
// linearProbingInstance.insert("age", 21)
// linearProbingInstance.insert("place", "Thrissur")
// linearProbingInstance.insert("DOB", "2004")
// linearProbingInstance.remove("mane")
// console.log(linearProbingInstance.table)
// linearProbingInstance.has("name")

class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashLinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        const newNode = new HashNode(key, value)

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.key == key) {
                current.value = value;
                return;
            }
            current = current.next;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    remove(key) {
        if (!this.head) {
            console.log("No such key were founded!");
            return;
        }
        if (this.head.key == key) {
            this.head = this.head.next
            return;
        }
        let current = this.head;
        let prev = null;
        while (current && current.key != key) {
            prev = current;
            current = current.next;
        }
        if (current) {
            prev.next = current.next
            return;
        }
        throw new Error("key not founded")
    }
    search(key) {
        if (!this.head) {
            console.log("Key not founded!")
            return
        }
        let current = this.head;
        while (current) {
            if (current.key == key)
                return current.value
            current = current.next;
        }
        throw new Error("Key not found!")
    }


}

class ChainingCollisionHandle {
    constructor(size) {
        if (!size)
            return 'no size'
        this.table = new Array(size).fill(null).map(() => new HashLinkedList());
        this.size = size;
    }
    hash(key) {
        const PRMIE_NUMBER = 31;
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            index = (index * PRMIE_NUMBER + charCode) % this.size;
        }
        return index;
    }
    insert(key, value) {
        const index = this.hash(key);
        const list = this.table[index];
        console.log(list)
        list.insert(key, value)
    }
    remove(key) {
        const index = this.hash(key);
        const list = this.table[index]
        list.remove(key);
    }
    search(key) {
        const index = this.hash(key);
        const list = this.table[index];
        return list.search(key);
    }
    display() {
        return this.table.map((list, index) => {
            let items = [];
            let current = list.head;
            while (current) {
                items.push({ key: current.key, value: current.value });
                current = current.next;
            }
            return { index, items };
        });
    }
}
const chainingCollisionHandleInstance = new ChainingCollisionHandle(5);
// chainingCollisionHandleInstance.insert("name", "abiram")
// chainingCollisionHandleInstance.insert("mane", "abiram")
// // chainingCollisionHandleInstance.remove("name")
// console.log(chainingCollisionHandleInstance.table)
// console.log(chainingCollisionHandleInstance.search("name"))
// console.log(chainingCollisionHandleInstance.display())


// Graph

class NormalGraph {
    constructor() {
        this.graph = new Map();
    }
    _add_helper(value) {
        if (!this.graph.has(value))
            this.graph.set(value, []);
    }
    addVertex(vertex, edge, isBidirection) {
        this._add_helper(vertex)
        this._add_helper(edge);
        this.graph.get(vertex).push(edge);
        isBidirection && this.graph.get(edge).push(vertex);
    }
    removeVertex(vertex) {
        if (this.graph.get(vertex)) {
            let edges = this.graph.get(vertex);
            for (const edge of edges) {
                this.graph.set(edge, this.graph.get(edge).filter((edg) => edg !== vertex))
            }
            this.graph.delete(vertex)
        } else {
            console.log("Vertex not founded!")
        }
    }

    bfs() {
        const visited = new Set();
        const result = [];
        for (const [vertex, _] of this.graph) {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                let queue = [vertex]
                while (queue.length) {
                    let current = queue.shift();
                    result.push(current);
                    const neighbours = this.graph.get(current) || [];
                    for (const neighbour of neighbours) {
                        if (!visited.has(neighbour)) {
                            visited.add(neighbour);
                            queue.push(neighbour);
                        }
                    }
                }
            }
        }
        console.log(result)
    }
    dfs() {
        const visited = new Set();
        const result = [];

        for (const [vertex, _] of this.graph)
            if (!visited.has(vertex))
                this.dfs_helper(vertex, visited, result);

        console.log(result);
    }
    dfs_helper(vertex, visited, result) {
        visited.add(vertex);
        result.push(vertex)
        const neighbours = this.graph.get(vertex) || [];

        for (const neighbour of neighbours)
            if (!visited.has(neighbour))
                this.dfs_helper(neighbour, visited, result);
    }
}
const normalGraphInstance = new NormalGraph();
// normalGraphInstance.addVertex(100, 50);
// normalGraphInstance.addVertex(100, 40);
// normalGraphInstance.addVertex(100, 60);
// normalGraphInstance.addVertex(40, 10);
// normalGraphInstance.addVertex(10, 5, true);
// normalGraphInstance.removeVertex(10)
// console.log(normalGraphInstance.graph)
// normalGraphInstance.bfs();
// normalGraphInstance.dfs();


// Heap
// Min Heap

class MinHeap {
    constructor(array = []) {
        this.heap = [];
        if (array.length) {
            this.buildHeap(array);
        }
    }
    buildHeap(array) {
        this.heap = [...array];
        for (let i = this._findParent(this.heap.length - 1); i >= 0; i--) {
            this._heapifyDown(i);
        }
    }
    _heapifyDown(parentIdx) {
        let size = this.size() - 1;
        let lefIdx = this._findLeftChild(parentIdx)
        let rightIdx = this._findRightChild(parentIdx)
        let largest = parentIdx;
        if (lefIdx < size && this.heap[lefIdx] > this.heap[largest])
            largest = lefIdx
        if (rightIdx < size && this.heap[rightIdx] > this.heap[largest])
            largest = rightIdx;
        if (largest != parentIdx) {
            swapHelper(this.heap, largest, parentIdx);
            this._heapifyDown(largest)
        }
    }
    _heapifyUp(childIdx) {
        let parentIdx = this._findParent(childIdx);
        while (childIdx && this.heap[parentIdx] > this.heap[childIdx]) {
            swapHelper(this.heap, parentIdx, childIdx);
            childIdx = parentIdx;
            parentIdx = this._findParent(childIdx);
        }
    }
    insert(value) {
        this.heap.push(value);
        this._heapifyUp(this.size() - 1);
    }
    remove() {
        swapHelper(this.heap, 0, this.size() - 1);
        this.heap.pop()
        this._heapifyDown(0);
    }
    size() {
        return this.heap.length
    }

    _findParent(index) {
        return Math.floor((index - 1) / 2)
    }
    _findLeftChild(index) {
        return (index * 2) + 1;
    }
    _findRightChild(index) {
        return (index * 2) + 2;
    }
    display() {
        this.heap.forEach((value) => console.log(value))
    }
}

const heapExArr = [123, 12, 423, 423, 4, 324, 3, 543, 5, 435];
const minHeapInstance = new MinHeap(heapExArr);
// minHeapInstance.display()
// minHeapInstance.insert(23)
// minHeapInstance.insert(345)
// minHeapInstance.remove()
// // minHeapInstance.sortHeap()
// console.log(minHeapInstance.heap)


// Heap sort
const heapSort = (array) => {
    const length = array.length;
    for (let i = _findParent(length - 1); i >= 0; i--) {
        _heapifyDown(array, i, length)
    }
    for (let i = length - 1; i > 0; i--) {
        swapHelper(array, 0, i)
        _heapifyDown(array, 0, i)
    }
}
function _heapifyDown(array, parentIdx, size) {
    let lefIdx = _findLeftChild(parentIdx)
    let rightIdx = _findRightChild(parentIdx)
    let largest = parentIdx;
    if (lefIdx < size && array[lefIdx] > array[largest])
        largest = lefIdx
    if (rightIdx < size && array[rightIdx] > array[largest])
        largest = rightIdx;
    if (largest != parentIdx) {
        swapHelper(array, largest, parentIdx);
        _heapifyDown(array, largest, size)
    }
}
function _findParent(index) {
    return Math.floor((index - 1) / 2);
}
function _findLeftChild(index) {
    return (index * 2) + 1;
}
function _findRightChild(index) {
    return (index * 2) + 2;
}
heapSort(heapExArr);
// console.log(heapExArr) 


class BSTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        this.root = this._insertHelper(value, this.root);
    }
    _insertHelper(data, node) {
        if (!node) {
            return new BSTreeNode(data);
        }
        if (data < node.value) {
            node.left = this._insertHelper(data, node.left)
        } else {
            node.right = this._insertHelper(data, node.right)
        }
        return node
    }
    contains(data) {
        return this._containsHelper(data, this.root)
    }
    _containsHelper(data, node) {
        if (!node) return;
        if (node.value == data) {
            return true;
        }
        if (data < node.value) {
            return this._containsHelper(data, node.left)
        } else {
            return this._containsHelper(data, node.right)
        }
    }
    remove(data) {
        this.root = this._removeHelper(data, this.root);
    }
    _removeHelper(data, node) {
        if (data < node.value) {
            node.left = this._removeHelper(data, node.left)
        } else if (data > node.value) {
            node.right = this._removeHelper(data, node.right);
        } else {
            if (node.left && node.right) {
                node.value = this.gitMin(node.right);
                node.right = this._removeHelper(node.value, node.right)
            }
            else if (!node.right)
                return node.left;
            else if (!node.left)
                return node.right;
            else
                return null;
        }
        return node
    }
    gitMin(node) {
        if (!node.left) {
            return node.value
        }
        return this.gitMin(node.left);
    }
    //  Left Root Right
    inOrder() {
        this._inOrderHelper(this.root)
    }
    _inOrderHelper(node) {
        if (node) {
            this._inOrderHelper(node.left)
            console.log(node.value)
            this._inOrderHelper(node.right)
        }
    }
    // Root Left Right (Pre order)
    // Left Right Root (Post order)
    findHeight() {
        return this._findHeightHelper(this.root);
    }
    _findHeightHelper(node) {
        if (!node) return 0;
        const leftHeight = this._findHeightHelper(node.left)
        const rightHeight = this._findHeightHelper(node.right)
        return 1 + Math.max(leftHeight, rightHeight)
    }
    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value < min || node.value > max) return false
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max)
    }
}

const bSTInstance = new BSTree();
// bSTInstance.insert(10)
// bSTInstance.insert(30)
// bSTInstance.insert(20)
// // console.log(bSTInstance.root)
// bSTInstance.remove(10);
// console.log(bSTInstance.contains(10))
// console.log("Height: ", bSTInstance.findHeight())
// console.log("is BST: ", bSTInstance.isBST())
// bSTInstance.inOrder();


class NormalTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class NormalTree {
    constructor(value) {
        if (!value) return
        this.root = new NormalTreeNode(value)
    }
    insert(parentValue, children) {
        const parent = this._findParent(parentValue, this.root);
        if (parent) {
            parent.children.push(new NormalTreeNode(children))
        } else {
            return 'No parent founded'
        }
    }
    _findParent(parent, node) {
        if (!node) return null;
        if (node.value == parent) return node;
        for (const children of node.children) {
            const result = this._findParent(parent, children);
            if (result) return result
        }
    }
    bfs(root = this.root) {
        const visited = new Set();
        const result = [];
        const queue = [root];
        while (queue.length) {
            let current = queue.shift();
            visited.add(current.value)
            result.push(current.value);
            if (current.children?.length) {
                queue.push(...current.children);
            }
        }
        return result;
    }
}

const normalTreeInstance = new NormalTree(100);
normalTreeInstance.insert(100, 40);
normalTreeInstance.insert(40, 4230)
normalTreeInstance.insert(2, 4230)
console.log(normalTreeInstance.root);
console.log(normalTreeInstance.bfs())

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        if (!word) return;
        let current = this.root;
        for (const letter of word) {
            if (!current.children.has(letter)) {
                current.children.set(letter, new TrieNode());
            }
            current = current.children.get(letter);
        }
        current.isEndWord = true;
    }
    contains(word) {
        if (!word) return;
        let current = this.root;
        for (const letter of word) {
            if (!current.children.has(letter)) {
                return false;
            }
            current = current.children.get(letter);
        }
        return current.isEndWord;
    }
    isPrefixValid(prefix) {
        if (!prefix) return;
        let current = this.root;
        for (const pre of prefix) {
            if (!current.children.has(pre)) {
                return false;
            }
            current = current.children.get(pre);
        }
        return true;
    }
    wordsStartsWithPrefix(prefix) {
        const result = [];
        let current = this.root;
        for (const pre of prefix) {
            if (!current.children.has(pre)) {
                return [];
            }
            current = current.children.get(pre);
        }
        this._wordsStartsWithPrefixHelper(prefix, result, current)
        return result
    }
    _wordsStartsWithPrefixHelper(prefix, result, current) {
        if (current.isEndWord)
            result.push(prefix);

        for (const [char, children] of current.children) {
            this._wordsStartsWithPrefixHelper(prefix + char, result, children);
        }
    }

    remove(word) {
        if (!word) return false
        this._removeHelper(word, this.root, 0);
    }
    _removeHelper(word, node, index) {
        if (index == word.length) {
            if (node.isEndWord == false) return false;
            node.isEndWord = false;
            return node.children.size == 0;
        }
        const char = word[index];
        const childNode = node.children.get(char);
        if (!childNode) return false;
        const isToBeDeleted = this._removeHelper(word, childNode, index + 1);
        if (isToBeDeleted) {
            node.children.delete(char);
            return !node.isEndWord && node.children.size == 0
        }
        return false
    }
}

const trieInstance = new Trie();
// trieInstance.insert("a");
// trieInstance.insert("abi");
// trieInstance.insert("abiram");
// trieInstance.remove("abiram");
// console.log(trieInstance.contains("abiram"))
// // console.log(trieInstance.isPrefixValid("abiram"));
// console.log(trieInstance.wordsStartsWithPrefix('abir'))


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

console.log("In-order traversal:", tree.inOrderTraversal()); 
console.log("Pre-order traversal:", tree.preOrderTraversal()); 
console.log("Post-order traversal:", tree.postOrderTraversal()); 