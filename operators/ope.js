// 1. Calculate the area of a rectangle with length = 15 and width = 8 using arithmetic operators.
const length = 15;
const width = 8;
const area = length * width;
console.log("Area of the rectangle:", area); 


// 2. Use assignment operators to double a variable `score` (initial value 50) and then subtract 10 from it.
let score = 50;
score *= 2; 
score -= 10; 
console.log("Final score:", score);


// 3. Compare two numbers (e.g., 25 and "25") using both `==` and `===`. Explain the difference in output.
let a=25
let b="25"
console.log(a == b); //check in data similarity
console.log(a === b); //cheack in data and type


// 4. Create two boolean variables, `isSunny` and `isWeekend`. Write an expression using logical operators to check if it's a good day for a picnic (sunny AND weekend).
let isSunny = true;
let isWeekend = false;
let goodForPicnic = isSunny && isWeekend; 
console.log("Is it a good day for a picnic?", goodForPicnic);


// 5. Use the ternary operator to determine if a number `num` is even or odd.
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(`${num} is ${result}`);