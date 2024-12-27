
// its like a window approach , were size increased based on i and sort the whole window before going to next window
const insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let j = i - 1;
        let key = arr[i]
        while (j >= 0 && arr[j] > key) { // j is basically traverse back and swapping after comparing.
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;//when we are swapping , we are just re-assaigning the value, so we should keep the key to re assaign again, if you are confused and then just swap inside the while loop rather than re assaigning.
    }
    return arr;
}

// in this the first loop is using for to get the value of the i, because we need a window the consecutively increasing by one , and we need that window to be sorted in order to make the whole array to be sorted 🧑🏻‍🎄

const array = [64, 9, 25, 11, 22, 8];

const sortedArray = insertionSort(array);
console.log(sortedArray);

// JUST THING THE 'I' LOOP FOR GETTING VALUE AND 'J' IS DOING THE SWAPPING FROM 'I' VALUE TO '0' .
