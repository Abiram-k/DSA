
// finding the largest and decresing the loop length by putting larger value at the end on each iteration 😃
const bubbleSort = (arr) => {
    let length = arr.length
    for (let i = length - 1; i >= 0; i--) {
        let swapped = false; // Track if a swap occurred, this makes to exit the program if it is in best case
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;

        }
        if (!swapped) break; // Exit early if no swaps were made
    }
    return arr 
}

const array = [64, 9, 25, 11, 12, 22, 8];

const sortedArray = bubbleSort(array);
console.log(sortedArray); 