class MinHeap {
    constructor() {
        this.heap = [];
    }
    buildHeap(array) {
        this.heap = [...array];
        for (let i = this._parent(this._size() - 1); i >= 0; i--) {
            this._HeapifyDown(i);
        }
    }
    _HeapifyDown(index) {
        let endIndex = this._size() - 1;
        let leftIndex = this._leftChild(index);
        while (leftIndex <= endIndex) {
            let rightIndex = this._rightChild(index);
            let indexToShift;
            if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex])
                indexToShift = rightIndex;
            else
                indexToShift = leftIndex;
            if (this.heap[index] > this.heap[indexToShift]) {
                this._swap(this.heap, index, indexToShift);
                index = indexToShift;
                leftIndex = this._leftChild(index);
            }else{
                break
            }
        }
    }
    _swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    _HeapifyUp(index) {
        let parentIndex = this._parent(index);
        while (index && this.heap[parentIndex] > this.heap[index]) {
            this._swap(this.heap, parentIndex, index);
            index = parentIndex;
            parentIndex = this._parent(index);
        }
    }
    insert(value) {
        this.heap.push(value);
        this._HeapifyUp(this._size() - 1);
    }
    remove() {
        this._swap(this.heap, 0, this._size() - 1);
        this.heap.pop();
        this._HeapifyDown(0);
    }

    _leftChild(index) {
        return (2 * index) + 1
    }
    _rightChild(index) {
        return (2 * index) + 2
    }
    _parent(index) {
        return Math.floor((index - 1) / 2);
    }
    _size() {
        return this.heap.length;
    }
    preOrderTraversal(root, index = 0) {
        if (index >= root.length) return []
        return [
            root[index],
            ...this.preOrderTraversal(root, 2 * index + 1),
            ...this.preOrderTraversal(root, 2 * index + 2)
        ]
    }
}



const heap = new MinHeap();
heap.insert(10);
heap.buildHeap([10,2243,234,435,34,5,345,43])
console.log(heap.heap)
// console.log(heap.preOrderTraversal(heap.heap))