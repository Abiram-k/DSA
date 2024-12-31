
// Divide and merge ⛷️ using recursive approach.

const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;

    let middle = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middle);
    let secondHalf = arr.slice(middle, arr.length)

    return join(mergeSort(firstHalf), mergeSort(secondHalf))
}

const join = function (firstHalf, secondHalf) {
    let newArray = [];
    let j = 0;
    let i = 0;

    while (i < firstHalf.length && j < secondHalf.length) // PUSHING ALL THE ELEMENTS FROM FIRST AND SECOND ARRAYS..
    
        if (firstHalf[i] < secondHalf[j])
            newArray.push(firstHalf[i++]);
        else
            newArray.push(secondHalf[j++]);

    while (i < firstHalf.length)  // to check for edge case were, first half have some additional elements , so basically it is already sorted so we can directly put that in to new Array
        newArray.push(firstHalf[i++])

    while (j < secondHalf.length)
        newArray.push(secondHalf[j++])

    return newArray;
}

let array =[1,2,3,4,5,433,3,3,322,3];

const sortedArray = mergeSort(array); 
console.log(sortedArray); 

// Output: [ 11, 12, 22, 25, 64 ]
// Time Complexity: O(n log n)
// Space Complexity: O(n)
