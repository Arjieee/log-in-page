// Simulated user data for authentication
const users = [
    { email: "student1@example.com", password: "Password123" },
    { email: "student2@example.com", password: "SecurePass456" }
];

// Validate login form
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedback-text");

    // Reset feedback styles and text
    feedback.style.display = "none"; // Hide initially
    feedback.className = "feedback-message"; // Reset classes

    // Simulate authentication
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        feedbackText.textContent = "Login successful!";
        feedback.classList.add("success");
        feedback.style.display = "block";
    } else {
        feedbackText.textContent = "Incorrect email or password.";
        feedback.classList.add("error");
        feedback.style.display = "block";
    }
});

// Function to close feedback
function closeFeedback() {
    const feedback = document.getElementById("feedback");
    feedback.style.display = "none";
}
