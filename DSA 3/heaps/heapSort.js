
const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const heapSort = (array) => {
    const length = array.length;

    for (let i = findParentHelper(length - 1); i >= 0; i--) {
        heapify(array, i, length);
    }

    for (let i = length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, 0, i);
    }

}
const convertToMaxHeap = (array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
    for (let i = findParentHelper(array.length - 1); i >= 0; i--) {
        heapify(array, i, array.length);
    }
    console.log(array)
    return array;
}

const heapify = (array, index, size) => {
    let lefIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let largest = index;
    if (lefIndex < size && array[lefIndex] > array[largest]) {
        largest = lefIndex;
    }
    if (rightIndex < size && array[rightIndex] > array[largest]) {
        largest = rightIndex;
    }
    if (largest != index) {
        [array[index], array[largest]] = [array[largest], array[index]];
        heapify(array, largest, size);
    }
}
const findParentHelper = (index) => Math.floor((index - 1) / 2);

convertToMaxHeap();

heapSort(array);
console.log(array)