class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isEmpty())
            console.log("Stack is empty!");
        else
            return this.stack.pop()
    }
    isEmpty() {
        return this.size() == 0
    }
    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return
        }
        return this.stack.map(ele => ele)
    }
    peek() {
        if (this.isEmpty())
            console.log("Stack is empty!");
        console.log("Peek is: ", this.stack[this.size() - 1])
    }
    size() {
        return this.stack.length
    }
    reverseTheString() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return
        }
        let newStack = [];
        let i = this.size() - 1;
        while (i >= 0) {
            newStack.push(this.pop())
            i--;
        }
        console.log(newStack)
    }
}
const stackInstance = new Stack();
stackInstance.push("the")
stackInstance.push("sky")
stackInstance.push("is")
stackInstance.push("blue")
// stackInstance.reverseTheString()




// Valide parenthisis Problem 

const validParenthisis = function (input) {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char == '[' || char == '{' || char == '(')
            stack.push(char);
        else if (char == ']' || char == '}' || char == ')') {
            if (stack.length == 0)
                return false;
            const top = stack.pop();
            if (char === ")" && top !== "(" || char == "]" && top !== '[' || char == "{" && top !== "}")
                return false;
        }

    }
    return stack.length == 0
}

const result = validParenthisis("[{{}}]");
result ? console.log("Valid parenthesis") : console.log("Invalid parenthesis")