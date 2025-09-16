let book={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    year:1925,
    summary: getsummary = function() {
        return `${this.title} was published in ${this.year}.`;
    } 
    
};
console.log("Exercise 1 Object:", book);

book.genre="Classic Literature";
console.log("Updated Genre:", book.genre);
console.log("Exercise 2 Object:", book);

book.year=1926;
console.log("Updated Year:", book.year);
console.log("Exercise 3 Object:", book);

delete book.author;
console.log("After Deleting Author:", book);
console.log("Exercise 4 Object:", book);

console.log("Book Summary:", book.summary());
console.log("exercise 5 Object:", book);

console.log("All Keys in Book Object:", Object.keys(book));
console.log("Exercise 6 Object:", book);

console.log("All Values in Book Object:", Object.values(book));
console.log("Exercise 7 Object:", book);



