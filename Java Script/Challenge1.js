let random = Math.random();
console.log(random);
let num1 = parseInt(prompt("Enter 1st number"));
let opera = prompt("Enter operation");
let num2 = parseInt(prompt("Enter 2nd number"));

let obj={
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "*"
}

if(random > 0.1){
    console.log(`The result is ${eval(`${num1} ${opera} ${num2}`)}`)
}

else{
    opera=obj[opera]
    console.log(`The result is ${eval(`${num1} ${opera} ${num2}`)}`)
}