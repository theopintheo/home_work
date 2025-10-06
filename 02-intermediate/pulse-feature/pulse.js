// 1. Use array destructuring to extract the first and third elements of an array `['apple', 'banana', 'orange', 'grape']` into variables `fruit1` and `fruit3`.
const fruits = ['apple', 'banana', 'orange', 'grape'];
const [fruit1, , fruit3] = fruits;
console.log(fruit1);
console.log(fruit3);

// 2. Use object destructuring to extract `firstName` and `lastName` from an object `{ firstName: 'Jane', lastName: 'Doe', age: 28 }`. Also, rename `firstName` to `fName`.
const person = { firstName: 'theopin', lastName: 'theo', age: 18 };
const { firstName: fName, lastName } = person;
console.log(fName);
console.log(lastName);


// 3. Combine two arrays `[10, 20]` and `[30, 40]` into a new array `[10, 20, 30, 40]` using the spread operator.
const arry1=[10,20];
const arry2=[30,40];
const combinedArray=[...arry1,...arry2,50,60];
console.log(combinedArray);


// 4. Write a function `logDetails` that accepts a `type` argument and then uses the rest operator to accept any number of additional `items`. Log the `type` and then each `item`.
function logDetails(type, ...items) {
    console.log("Type:", type);
    items.forEach(item => console.log("Item:", item));
}   
logDetails("Fruits", "Apple", "Banana", "Orange");
logDetails("Numbers", 1, 2, 3, 4, 5);

// 5. Create a class `Rectangle` with a constructor that takes `width` and `height`. Add a method `getArea()` that returns the area. Create an instance and test it.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }}
    const myRectangle = new Rectangle(5, 10);
    console.log("Area of Rectangle:", myRectangle.getArea());
    
    
// 6. Create a `Map` and add key-value pairs for different countries and their capitals. Iterate over the Map and print each country and capital.
const countryCapitalMap = new Map();
countryCapitalMap.set("USA", "Washington, D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Japan", "Tokyo");
countryCapitalMap.forEach((capital, country) => {
    });
    console.log(`${country}: ${capital}`);
        
 // 7. Create a `Set` from an array with duplicate numbers (e.g., `[1, 2, 2, 3, 4, 4, 5]`) to get only unique numbers. Convert the Set back to an array and print it.
const numbers = [1, 2, 2, 3, 4, 4, 5];    
const uniqueNumbersSet = new Set(numbers);
const uniqueNumbersArray = Array.from(uniqueNumbersSet);
console.log("Unique Numbers:", uniqueNumbersArray);  