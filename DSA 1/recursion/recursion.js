
const factorial = (n) => {
    if (!n) {
        return "Specify some value 😐"
    }
    if (n <= 1)
        return 1;

    return n * factorial(n - 1);
}
// const fact = factorial(5);
// console.log(fact);

const fibanocci = (value, sequence = [0, 1]) => {

    if (sequence.length >= value + 1)
        return sequence;

    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

    return fibanocci(value, sequence);

}
// console.log(fibanocci(5));


const sumOfArray = (arr, sum = 0) => {

    if (arr.length == 0)
        return sum;

    return sumOfArray(arr.slice(1), sum + arr[0])
}

// const sumArray = sumOfArray([1, 2, 3, 4, 5]);
// console.log(sumArray);


const reverseString = (string, result = "") => {

    if (!string) {
        return result;
    }
    result += string[string.length - 1];
    return reverseString(string.slice(0, string.length - 1), result);
}

// const reversedString = reverseString("hello");
// console.log(reversedString);


const greatestCommonDivisor = (a, b) => {

    if (b == 0)
        return a;
    
    return greatestCommonDivisor(b, a % b)

}

const commonDivisor = greatestCommonDivisor(48, 18);

console.log("Greatest common Divisor is: ", commonDivisor);

