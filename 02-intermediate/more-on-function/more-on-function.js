// 1. Create a higher-order function `createGreeter` that takes a `greeting` string (e.g., "Hello", "Hi") and returns a new function. The returned function should take a `name` and return the full greeting (e.g., "Hello, Alice!").
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

// 2. Simulate an asynchronous operation (e.g., fetching user data) using `setTimeout`. Use a callback function to process the fetched data.
function fetchUserData(callback) {
    setTimeout(() => {
        const userData = { id: 1, name: "reman" };
        callback(userData);
    }, 1000);
}

fetchUserData((data) => {
    console.log("Fetched User Data:", data);
});


// 3. Implement a simple counter function using a closure. The counter should have `increment` and `getValue` methods.
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log("Counter Value:", counter.getValue());
counter.increment();
console.log("Counter Value:", counter.getValue());
// 4. Create an object `dog` with a `name` property and a method `bark` that logs "Woof! My name is [dog's name]!". Then, create a separate function `genericBark` that just logs "Woof!". Use `call()` or `apply()` to make `genericBark` bark with the `dog`'s name.
const dog = {
    name: "Buddy",
    bark: function() {
        console.log(`Woof! My name is ${this.name}!`);
    }
};

function genericBark() {
    console.log("Woof!");
}

dog.bark();
genericBark.call(dog);

// 5. Explain in comments how `this` behaves differently in a regular function vs. an arrow function when defined inside an object.
const cat = {
    name: "Whiskers",
    regularFunction: function() {
        console.log(`Meow! My name is ${this.name}!`);
    },
    arrowFunction: () => {
        console.log(`Meow! My name is ${this.name}!`);
    }
};

cat.regularFunction();
cat.arrowFunction();

// In a regular function, `this` refers to the object that calls the function.
// In an arrow function, `this` is lexically bound, meaning it refers to the enclosing scope.   