
const numsOnLast = (arr, num) => {
    let k = 0 ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) { // o(n)
           arr[k++] = arr[i]
            // arr.push(...arr.splice(i, 1))
        }
    }
    for (let j = k ; j < arr.length; j++) {
        arr[j] = num;//0(n)
    } // this loop is filling the remaining space with num that is 2 😐
    return arr;
}

const array = [2, 1, 2, 3, 2, 4, 5, 2, 6]
const num = 2
const result = numsOnLast(array, num); // o(n)T o(1)S
console.log(result);