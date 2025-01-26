// function heapSort(array) {
//   const n = array.length;
//   function heapify(arr, n, i) {
//     let largest = i;
//     const left = 2 * i + 1; 
//     const right = 2 * i + 2; 
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
//     if (largest !== i) {
//       [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
//       heapify(arr, n, largest); // Recursively heapify the affected subtree
//     }
//   }
//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(array, n, i);
//   }
//   for (let i = n - 1; i > 0; i--) {
//     // Move the current root (largest element) to the end
//     [array[0], array[i]] = [array[i], array[0]];
//     heapify(array, i, 0);
//   }
//   return array; // Sorted array
// }
















function HeapSort(arr) {
  let n = arr.length
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, n, largest)
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, i, 0)
  }
  return arr
}

let arr = [10, 1, 8, 3, 7, 2, 5]
console.log(HeapSort(arr))