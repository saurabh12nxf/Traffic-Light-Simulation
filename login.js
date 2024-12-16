function login() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;
    const loginMessage = document.getElementById('login-message');

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === emailInput && storedUser.password === passwordInput) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to traffic light page
        }, 2000);
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid email or password. Please try again.";
    }
}
