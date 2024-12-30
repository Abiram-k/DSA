
// select the smallest value and then put it on the starting of the array 😃

const selectionSort = (arr) => {
    let length = arr.length
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {

            if (arr[min] > arr[j])
                min = j
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}
 
const array = [64, 25, 11, 12, 22];
const sortedArray = selectionSort(array);
console.log(sortedArray); 