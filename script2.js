// localStorage.setItem("loggedin","false");
// document.getElementById("login-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const loggedin='false';
//     localStorage.setItem("loggedin","false");

//     // Simple check for predefined credentials (replace with your actual logic)
//     if (username === "user" && password === "pass") {
//         localStorage.setItem("userName", username); // Store username in local storage
//         localStorage.setItem("loggedin","true"); // Set loggedin status to true in local storage
//         window.location.href = "index.html"; // Redirect to the homepage
//     } else {
//         alert("Invalid credentials, please try again.");
//     }
// });
// document.getElementById("login-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Simple check for predefined credentials (replace with your actual logic)
//     if (username === "user" && password === "pass") {
//         localStorage.setItem("userName", username); // Store username in local storage
//         localStorage.setItem("loggedin", "true"); // Set loggedin status to true in local storage
//         window.location.href = "index.html"; // Redirect to the homepage
//     } else {
//         alert("Invalid credentials, please try again.");
//     }
// });
// Predefined users with name, username, and password
const predefinedUsers = [
    { name: "Alice", username: "user1", password: "pass1" },
    { name: "Bob", username: "user2", password: "pass2" },
    { name: "Charlie", username: "user3", password: "pass3" }
    // Add more users as needed
];

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered credentials match any predefined user
    const user = predefinedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("userName", user.name); // Store user's name in local storage
        localStorage.setItem("loggedin", "true"); // Set loggedin status to true in local storage
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        alert("Invalid credentials, please try again.");
    }
});
