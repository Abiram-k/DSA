const string = 'Malayalam';

let stack = string.split('');
let flag = false;
for (let i = 0; i < stack.length / 2; i++) {
    if (stack[i].toLowerCase() != stack.pop().toLowerCase()) {
        console.log("Not Palindrome")
        flag = true;
        break;
    }
}
if (!flag) console.log(" Palindrome")

