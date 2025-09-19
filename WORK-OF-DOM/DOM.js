// 1. Create a simple `index.html` file with a paragraph (`<p id="textChange">Hello World</p>`) and a button (`<button id="changeBtn">Change Text</button>`).

// 2. In `index.js`, select the paragraph by its ID and the button by its ID.
document.getElementById
// 3. Add a click event listener to the button. When clicked, change the `textContent` of the paragraph to "Text has been changed!".
// 4. Add another button (`<button id="colorBtn">Change Color</button>`). When this button is clicked, change the background color of the paragraph to a random color.
//    (Hint: You can generate random colors with `'#' + Math.floor(Math.random()*16777215).toString(16)`)
// 5. Create a new `div` element dynamically using JavaScript, give it some text and a class, and append it to the `body` of the HTML document.
// 6. Add a click listener to the dynamically created `div` that logs a message when clicked.