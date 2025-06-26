document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('LoginForm');
    const regForm = document.getElementById('RegForm');
    const loginBtn = document.getElementById('loginBtn');
    const regBtn = document.getElementById('regBtn');
    const indicator = document.getElementById('Indicator');

    // Initially show login form
    loginForm.style.transform = 'translateX(0)';
    regForm.style.transform = 'translateX(100%)';
    indicator.classList.add('move-login');

    function showLoginForm() {
        loginForm.style.transform = 'translateX(0)';
        regForm.style.transform = 'translateX(100%)';
        indicator.classList.remove('move-register');
        indicator.classList.add('move-login');
    }

    function showRegForm() {
        loginForm.style.transform = 'translateX(-100%)';
        regForm.style.transform = 'translateX(0)';
        indicator.classList.remove('move-login');
        indicator.classList.add('move-register');
    }

    // Event listeners for buttons
    loginBtn.addEventListener('click', showLoginForm);
    regBtn.addEventListener('click', showRegForm);

    // Form submissions (dummy logic for demonstration)
    function validateLoginForm() {
        var username = document.getElementById("loginUsername").value.trim();
        var password = document.getElementById("loginPassword").value.trim();

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Dummy check for valid credentials
        if (username !== "testuser" || password !== "password") {
            alert("Invalid username or password.");
            return false;
        }

        // For demonstration purposes, prevent actual form submission
        alert("Login successful!");
        return false;
    }

    function validateRegForm() {
        var username = document.getElementById("regUsername").value.trim();
        var email = document.getElementById("regEmail").value.trim();
        var password = document.getElementById("regPassword").value.trim();

        if (username === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Dummy email validation
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Dummy password validation
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        // For demonstration purposes, prevent actual form submission
        alert("Registration successful!");
        return false;
    }

    function isValidEmail(email) {
        // Basic email validation (you can add more specific checks if needed)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateLoginForm();
    });

    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateRegForm();
    });
});
