
// its like a window approach , were size increased based on i and sort the whole window before going to next window
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            // arr[j + 1] = arr[j];
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            j--; 
        }
        // arr[j + 1] = key; // this is because , when the loops ends the j points to the value that lower than key
    }
    return arr;
}

const array = [64, 9, 25, 11, 22, 8];
const sortedArray = insertionSort(array);
console.log(sortedArray);
// Output: [ 8, 9, 11, 22, 25, 64 ]
// Time Complexity: O(n^2)


// JUST THING THE 'I' LOOP FOR GETTING VALUE AND 'J' IS DOING THE SWAPPING FROM 'I' VALUE TO '0' .
