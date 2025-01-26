class Heap {
    constructor(array = []) {
        this.heap = [];
        if (Array.isArray(array) && array.length > 0) {
            this.buildHeap(array);
        }

    }

    buildHeap(array) {
        this.heap = array
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {// start from the last parent
            this.shiftDown(i);
        }
    }

    shiftDown(index) {
        let endIndex = this.heap.length - 1;
        let lefIndex = this.leftChild(index);
        while (lefIndex <= endIndex) { // if left is there, then the child is there right in heap .
            let rightIndex = this.rightChild(index);
            let indexToShift;
            if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[lefIndex]) {
                indexToShift = rightIndex;
            } else {
                indexToShift = lefIndex;
            }
            if (this.heap[index] > this.heap[indexToShift]) {
                [this.heap[index], this.heap[indexToShift]] = [this.heap[indexToShift], this.heap[index]]
                index = indexToShift;
                lefIndex = this.leftChild(index);
                // in this case of building , we continously picking values based on the array index and putting it on correct position,thats it it will work automatically
            } else {
                return;
            }
        }
    }
    _shiftUp(index) {
        let parentIndex = this.parent(index);
        while (index && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = this.parent(index);
        }
    }
    peek() {
        if (!this.heap.length)
            return;
        return this.heap[0];
    }
    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.pop();
        this.shiftDown(0);
    }
    insert(value) {
        this.heap.push(value);
        this._shiftUp(this.heap.length - 1);
    }

    parent(position) {
        return Math.floor((position - 1) / 2);
    }
    leftChild(position) {
        return (position * 2) + 1;
    }
    rightChild(position) {
        return (position * 2) + 2;
    }
    display() {
        this.heap.forEach((node) => console.log(node));
    }
}

const heap = new Heap();
heap.buildHeap([10, 20, 30, 30, 1, 4, 5, 21]);
heap.insert(1000);
heap.remove(10); // only delete top
heap.display();