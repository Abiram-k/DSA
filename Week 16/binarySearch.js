const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 4;

const binarySearch = (arr, target) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        // optimized way to find middle of two values
        let middle = Math.floor(startIndex + (endIndex - startIndex) / 2);

        if (arr[middle] == target) {
            return `Postion of ${target} is: ${middle} 😃`;
        } else if (target > arr[middle]) {
            startIndex = middle + 1;
        } else {
            endIndex = middle - 1;
        }
    }
    return `Element Not found!😐`
}

const position = binarySearch(arr, target);
console.log(position); 


