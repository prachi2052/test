const numbers = [2, 3, 1, 4, 5, 1, 2, 3, 1, 2]; // example 10 numbers

const product = numbers.reduce((acc, num) => acc * num, 1);

console.log("Product of 10 numbers:", product);
