document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.style.display = "none";

    // Emailis validacia
    if (!email.includes("@") || !email.includes(".") || email.lastIndexOf(".") < email.indexOf("@") + 2) {
        errorMessage.textContent = "Invalid email format.";
        errorMessage.style.display = "block";
        return;
    }

    // Parolis validacia
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.display = "block";
        return;
    }

    alert("Registration successful!");
});