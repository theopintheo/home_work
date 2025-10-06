// 1. Declare a `const` variable called `myName` and assign your name to it.
const myname = "theopin";
console.log(myname);

// 2. Declare a `let` variable called `myAge` and assign your age. Then, re-assign `myAge` to your age next year.
let myAge = 18;
myAge = 19;
console.log(myAge);

// 3. Declare a `var` variable called `oldCar` and assign a car brand. Try to re-declare it and re-assign it.
var oldCar = "Toyota";
var oldCar = "Honda";
console.log(oldCar);

// 4. Create variables for each primitive data type and log their values and `typeof` results to the console
const myString = "Hello, World!";
const myNumber = 42;
const myBoolean = true;
const myUndefined = undefined;
const myNull = null;
const mySymbol = Symbol("mySymbol");    
const myBigInt = 9007199254740991n;
const obj={name:"theo", age:18};
const arr=[1,2,3,4,5];

console.log(myString, typeof myString); 
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);
console.log(mySymbol, typeof mySymbol);
console.log(myBigInt, typeof myBigInt);
console.log(obj, typeof obj);
console.log(arr, typeof arr);


// 5. Experiment with `const` for an array and an object, adding elements/properties and observing the behavior.
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); 

const myObject = { name: "theo",
                   age: 18 };
myObject.city = "Chennai";
console.log(myObject); 