class MaxHeap {
    constructor(array = []) {
        this.heap = [];
        if (Array.isArray(array) && array.length) {
            this.bindHeap(array);
        }
    }
    bindHeap(array) {
        this.heap = array;
        for (let i = this.parent(this.size() - 1); i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(index) {
        let endIndex = this.size() - 1;
        let leftIndex = this.leftChild(index);
        while (leftIndex <= endIndex) {
            let rightIndex = this.rightChild(index);
            let indexToSwap;
            if (rightIndex <= endIndex && this.heap[rightIndex] > this.heap[leftIndex]) {
                indexToSwap = rightIndex;
            } else {
                indexToSwap = leftIndex;
            }
            if (this.heap[index] < this.heap[indexToSwap]) {
                [this.heap[index], this.heap[indexToSwap]] = [this.heap[indexToSwap], this.heap[index]]
                index = indexToSwap;
                leftIndex = this.leftChild(index);
            } else {
                return;
            }
        }
    }
    shiftUp(index) {
        let parentIndex = this.parent(index);
        while (index && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex;
            parentIndex = this.parent(index);
        }
    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.size() - 1);
    }
    remove() {
        [this.heap[this.size() - 1], this.heap[0]] = [this.heap[0], this.heap[this.size() - 1]];
        this.heap.pop();
        this.shiftDown(0);
    }
    peek() {
        return this.heap[0]
    }
    display() {
        let result = "";
        this.heap.forEach(node => result += parseInt(node) + "  ");
        console.log(result);
    }
    size() {
        return this.heap.length
    }
    leftChild(position) {
        return (2 * position) + 1
    }
    rightChild(position) {
        return (2 * position) + 2
    }
    parent(position) {
        return Math.floor((position - 1) / 2);
    }
    heapSort(arr) {
        let n = arr.length;
        function heapify(arr, n, index) {
            let largest = index;
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            if (leftIndex < n && arr[leftIndex] > arr[largest]) {
                largest = leftIndex
            }
            if (rightIndex < n && arr[rightIndex] > arr[largest]) {
                largest = rightIndex;
            }
            if (largest != index) {
                [arr[largest], arr[index]] = [arr[index], arr[largest]]
                heapify(arr, n, largest);
            }
        }
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) { // to build correct heap
            heapify(arr, n, i);
        }
        for (let i = n - 1; i >= 0; i--) {
            [arr[i], arr[0]] = [arr[0], arr[i]];// sorting
            heapify(arr, i, 0)
        }
        return arr;
    }

}


const maxHeap = new MaxHeap();
maxHeap.bindHeap([32, 34, 45, 546, 56, 23, 4234, 43]);
maxHeap.insert(180);
maxHeap.remove();
maxHeap.display();