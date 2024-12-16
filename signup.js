function signup() {
    const nameInput = document.getElementById('signup-name').value;
    const phoneInput = document.getElementById('signup-phone').value;
    const emailInput = document.getElementById('signup-email').value;
    const passwordInput = document.getElementById('signup-password').value;
    const signupMessage = document.getElementById('signup-message');

    // Store user data in local storage
    const user = {
        name: nameInput,
        phone: phoneInput,
        email: emailInput,
        password: passwordInput
    };

    localStorage.setItem('user', JSON.stringify(user));
    signupMessage.style.color = "green";
    signupMessage.textContent = "Signup successful! Redirecting to login...";

    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 2000);
}
