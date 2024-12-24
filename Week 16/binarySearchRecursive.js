const binarySearchRecursive = (arr, target) => {

    const binaryRecursiveHelper = (arr, target, startIndex, endIndex) => {

        if (startIndex > endIndex)
            return -1;

        const middle = Math.floor(startIndex + (endIndex - startIndex) / 2);
        if (target === arr[middle])
            return middle;
        if (arr[middle] < target)
            return binaryRecursiveHelper(arr, target, middle + 1, endIndex);
        if (arr[middle] > target)
            return binaryRecursiveHelper(arr, target, startIndex, middle - 1);
        
    }
    return binaryRecursiveHelper(arr, target, 0, arr.length - 1)
}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 4;
const position = binarySearchRecursive(arr, target);
console.log(position);

