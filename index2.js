// Select the element where you want to display the quote
const quoteElement = document.getElementById('love-quote');

// Your developer quote
const loveQuote = "Code never lies, comments sometimes do.";

// Set the quote and center it
if (quoteElement) {
    quoteElement.textContent = loveQuote;
    quoteElement.style.textAlign = 'center';
    quoteElement.style.fontSize = '1.5em';
    quoteElement.style.marginTop = '40px';
}