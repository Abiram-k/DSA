
const quickSort = (arr) => {
    quickSortHelper(arr, 0, arr.length - 1);
    return arr
}
const quickSortHelper = function (arr, startIndex, rightIndex) {
    if (startIndex >= rightIndex)
        return;

    let pivot = startIndex;
    let left = startIndex + 1;
    let right = rightIndex;

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right);
            left++;
            right--
        }
        if (arr[left] <= arr[pivot])
            left++;
        if (arr[right] >= arr[pivot])
            right--;
    }

    swap(arr, right, pivot);
    quickSortHelper(arr, startIndex, right - 1);
    quickSortHelper(arr, right + 1, rightIndex);
}
const swap = function (arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp
}

const array = [22, 64, 25, 12, 1, 33];
const sortedArray = quickSort(array);
console.log(sortedArray);  