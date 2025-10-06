// 1. Write a function `checkPassword` that takes a password string. Use a `try...catch` block.
//    - If the password is less than 8 characters, `throw new Error("Password too short.")`.
//    - If the password contains "password" (case-insensitive), `throw new Error("Password cannot contain 'password'.")`.
//    - Otherwise, log "Password is valid."
//    Call this function with valid and invalid passwords.
function checkPassword(password) {
    try {
        if (password.length < 8) {
            throw new Error("Password too short.");
        }
        if (/password/i.test(password)) {
            throw new Error("Password cannot contain 'password'.");
        }
        console.log("Password is valid.");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

checkPassword("short");
checkPassword("mypassword123");
checkPassword("validPass123");
// 2. Create a custom error class called `NetworkError` that extends `Error`. It should have a `statusCode` property.
class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// 3. Write an `async` function `fetchDataWithError` that simulates a network request. Inside a `try...catch` block:
//    - If a `simulateFailure` flag is true, `throw new NetworkError("Failed to fetch data.", 500)`.
//    - Otherwise, `resolve` with some data.
//    Catch the `NetworkError` and log its `message` and `statusCode`.
async function fetchDataWithError(simulateFailure) {
    return new Promise((resolve, reject) => {
        try {
            if (simulateFailure) {
                throw new NetworkError("Failed to fetch data.", 500);
            }
            resolve({ data: "Sample data" });
        } catch (error) {
            if (error instanceof NetworkError) {
                console.error("NetworkError:", error.message, "Status Code:", error.statusCode);
            } else {
                console.error("Error:", error.message);
            }
        }
    });
}