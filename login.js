// Simulated user data
const users = [
    { username: "admin", password: "password123", email: "admin@example.com" }
];

// Show form based on user action
function showForm(formId) {
    const forms = document.querySelectorAll(".form");
    forms.forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("loginError").style.display = "block";
        document.getElementById("loginError").textContent = "Invalid username or password.";
    }
}

// Handle sign up
function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById("signUpUsername").value;
    const password = document.getElementById("signUpPassword").value;
    const email = document.getElementById("signUpEmail").value;

    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
        document.getElementById("signUpError").style.display = "block";
        document.getElementById("signUpError").textContent = "Username or email already exists.";
    } else {
        users.push({ username, password, email });
        alert("Sign up successful! Please log in.");
        showForm("loginForm");
    }
}

// Handle forgot password
function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElement}
