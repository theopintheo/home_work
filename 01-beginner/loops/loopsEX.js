// 1. Use a `for` loop to print all even numbers from 0 to 10.
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// 2. Use a `while` loop to calculate the sum of numbers from 1 to 5.
let sum = 0;
let num = 1;
while (num <= 5) {
    sum += num;
    num++;
}
console.log(sum);


// 3. Use a `do...while` loop to repeatedly ask the user for a number until they enter a number greater than 10 (you'll need a way to get user input, for now assume `prompt()` exists or simulate with a variable).

// let userInput;
// userInput =0
// do {
//     userInput = parseInt(prompt("Enter a number greater than 10: "), 10);
// } while (userInput <= 10);
// console.log("You entered: " + userInput);



// 4. Write a `for` loop that iterates from 1 to 7. Use `break` to stop the loop when the number is 4.
for (let i = 1; i <= 7; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}


// 5. Write a `for` loop that iterates from 1 to 5. Use `continue` to skip printing the number 3.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }   
    console.log(i);
}