// 2. In `index.js`, select the paragraph by its ID and the button by its ID.
const paragraph = document.getElementById("textChange");
const changeBtn = document.getElementById("changeBtn");

// 3. Add a click event listener to the button. When clicked, change the `textContent` of the paragraph to "Text has been changed!".
changeBtn.addEventListener("click", () => {
    paragraph.textContent = "Text has been changed!";
});


// 4. Add another button (`<button id="colorBtn">Change Color</button>`). When this button is clicked, change the background color of the paragraph to a random color.
//    (Hint: You can generate random colors with `'#' + Math.floor(Math.random()*16777215).toString(16)`)
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.backgroundColor = randomColor;
}); 


// 5. Create a new `div` element dynamically using JavaScript, give it some text and a class, and append it to the `body` of the HTML document.
const newDiv = document.createElement("div");
newDiv.textContent = "I am a dynamically created div!";
newDiv.className = "dynamic-div";
document.body.appendChild(newDiv);


// 6. Add a click listener to the dynamically created `div` that logs a message when clicked.
newDiv.addEventListener("click", () => {
    console.log("Dynamically created div was clicked!");
});
