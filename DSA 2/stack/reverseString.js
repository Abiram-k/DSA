// let string = 'abiram';
let result = [];
function reverseString(string) {
    if (!string.length) {
        return;
    }
    let item = string[0]
    reverseString(string.slice(1, string.length))
    result.push(item)
}
// reverseString(string);
// console.log(result)


let string = 'abiram';
function reverseUsingStack(string) {

    let stack = string.split("");

    let result = [];
    while(stack.length)
        result.push(stack.pop());

    return result.join("");
}
const resultStack = reverseUsingStack(string)
console.log(resultStack)



