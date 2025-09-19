// 1. Write an if-else if-else statement to categorize a student's grade (e.g., A, B, C, D, F) based on a score out of 100.

let score = 85;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score < 90) {
    console.log("Grade: B");
} else if (score >= 70 && score < 80) {
    console.log("Grade: C");
} else if (score >= 60 && score < 70) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}  


// 2. Use a switch statement to print a message based on a given `month` (e.g., "January" -> "Winter month", "July" -> "Summer month"). Handle at least 3 different months and a default case.
let month = "July";
switch (month) {
    case "January":
        console.log("Winter month");
    case "July":
        console.log("summer month");
}
      