const num = parseInt(prompt("Enter a number to find its factorial:"));
const factorial = num => num ? num * factorial(num - 1) : 1;
console.log(factorial(num));
