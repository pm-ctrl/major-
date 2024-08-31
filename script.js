document.addEventListener("DOMContentLoaded", () => {
    const navAuth = document.getElementById("nav-auth");
    const userName = localStorage.getItem("userName"); // Retrieve the user's name from local storage
    
    if (userName) {
        navAuth.innerHTML = `Welcome, ${userName} <a href="#" id="logout-btn">Logout</a>`;
    } else {
        navAuth.innerHTML = `<a href="login.html">Login</a>`;
    }

    // Logout function
    document.getElementById("logout-btn")?.addEventListener("click", () => {
        localStorage.setItem("loggedin","false"); // Clear the logged-in status from local storage
        localStorage.removeItem("userName"); // Clear the user's name from local storage
        window.location.href = "index.html"; // Redirect to home page
    });
});
