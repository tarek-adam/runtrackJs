// Function to handle form submission and validation
async function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Asynchronous validation for email
    const emailErrorElement = document.getElementById('emailError');
    const emailIsValid = await validateEmail(email);
    emailErrorElement.textContent = emailIsValid ? '' : 'Invalid email address';

    // Asynchronous validation for password
    const passwordErrorElement = document.getElementById('passwordError');
    const passwordIsValid = await validatePassword(password);
    passwordErrorElement.textContent = passwordIsValid ? '' : 'Password is too weak';

    // If both email and password are valid, proceed with login process
    if (emailIsValid && passwordIsValid) {
        // Perform the login process (e.g., send data to the server)
        console.log('Login successful');
    }
}

// Add event listener to form submission
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);

// Asynchronous functions to validate email and password
async function validateEmail(email) {
    // Use a regex to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

async function validatePassword(password) {
    // Define password criteria (e.g., minimum length, special characters, etc.)
    const minLength = 8;
    return password.length >= minLength;
}
