let factorial = num => {
    if (num === 0) return 1;
    if (num === 1) return 1;
    if (num < 0 || num > 100) return;
    if (num % 1 !== 0) {
        num = parseInt(num);
    }
    return num * factorial(num - 1);
}
var num=5;
var result =factorial(num);
console.log("Factorial of "+num+" is "+result );
//OR
console.log(`Factorial of ${num} is ${result}`);












