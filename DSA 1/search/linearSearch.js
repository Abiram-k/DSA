const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 4;

const linearSearch = (arr, target) => {
    let count = 0;
    for (const ele of arr) {
        
        if (target == ele)
            return `Postion of ${target} is: ${count} 😃`;

        count++
    }
    return `Element Not found!😐`
}

const position = linearSearch(arr, target);
console.log(position);