function isSumTen(arr, target) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[i] + arr[j] == target)// Time complexity is : o(n2)
        //         result.push(arr[i], arr[j])// space complexity is : o(1)
        // }
        map.set(arr[i])
        const match = target - arr[i];
        if (map.has(match)) 
            result.push(arr[i], match)// Time complexity is : o(1)
                                      // space complexity is : o(n)
    }
    return result
}

const array = [9, 22, 1];
const target = 10;
const result = isSumTen(array, target);
console.log(result);

