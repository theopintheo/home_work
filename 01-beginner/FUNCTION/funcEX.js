// 1. Write a function declaration called `calculateCircumference` that takes a `radius` as a parameter and returns the circumference of a circle (2 * PI * radius).
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
console.log(calculateCircumference(5));



// 2. Create an arrow function called `isPositive` that takes a number and returns `true` if the number is positive, `false` otherwise.
const isPositive = n => n > 0;
console.log(isPositive(3));
console.log(isPositive(-1));

// 3. Write a function called `createGreeting` that takes `name` and `timeOfDay` parameters. Use a default parameter for `timeOfDay` to be "morning". Return a greeting string like "Good morning, [name]!" or "Good [timeOfDay], [name]!".
function createGreeting(name, timeOfDay = "morning") {
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(createGreeting("Alice"));
console.log(createGreeting("Bob","evening"));


// 4. Explain, in comments in the code, the difference between `var`, `let`, and `const` in terms of scope using simple examples.

// `var` is function-scoped or globally-scoped and can be re-declared and updated.

var x = 1;
if (true) {
    var x = 2;
    console.log(x); // 2
}
console.log(x); 

// `let` is block-scoped and can be updated but not re-declared within the same scope.

let y = 1;
if (true) {
    let y = 2;
    console.log(y);
}
console.log(y); 

// `const` is block-scoped, cannot be re-declared, and cannot be updated (i.e., its value is constant).

const z = 1;
if (true) {
    const z = 2;
    console.log(z); 
}
console.log(z); 



