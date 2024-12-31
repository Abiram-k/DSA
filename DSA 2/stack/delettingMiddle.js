const stack = [1, 2, 3, 4, 5, 6];

const removeMiddle = function (stack) {
    let middle = Math.floor(stack.length / 2)
    removeMiddleHleper(middle);
}
const removeMiddleHleper = (index) => {
    if (index == 0) {
        stack.pop();
        return;
    }

    let poppedElement = stack.pop();
    removeMiddleHleper(index - 1);
    stack.push(poppedElement);
}
// removeMiddle(stack);
console.log(stack);


const removeFirst = (stack) => {
   
    let temp = stack.pop();
    if (stack.length == 0) {
        return;
    }
    removeFirst(stack)
    stack.push(temp);
}
removeFirst(stack);
console.log(stack)