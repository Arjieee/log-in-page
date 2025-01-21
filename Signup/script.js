document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const feedback = document.getElementById("feedback");

    // Validate password complexity
    function validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(password);
    }

    // Handle form submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Clear any previous feedback
        feedback.classList.remove("success", "error");
        feedback.style.display = "none";

        // Check if passwords match
        if (password !== confirmPassword) {
            showFeedback("Passwords do not match.", "error");
            return;
        }

        // Check password complexity
        if (!validatePassword(password)) {
            showFeedback("Password must be at least 8 characters long, include a number and a special character.", "error");
            return;
        }

        // Display success message after successful registration
        showFeedback("Registration successful! You can now log in.", "success");

        // Reset the form fields
        signupForm.reset();
    });

    // Show feedback message
    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.classList.add(type);
        feedback.style.display = "block";
    }
});