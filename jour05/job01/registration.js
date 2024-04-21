// Function to handle form submission and validation
async function handleRegistrationFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postalCode').value;

    // Validate each field
    const lastNameIsValid = validateField(lastName, 'lastNameError', 'Last name is required');
    const firstNameIsValid = validateField(firstName, 'firstNameError', 'First name is required');
    const emailIsValid = await validateEmail(email);
    const passwordIsValid = await validatePassword(password);
    const addressIsValid = validateField(address, 'addressError', 'Address is required');
    const postalCodeIsValid = validateField(postalCode, 'postalCodeError', 'Postal code is required');

    // If all fields are valid, proceed with registration process
    if (lastNameIsValid && firstNameIsValid && emailIsValid && passwordIsValid && addressIsValid && postalCodeIsValid) {
        // Perform the registration process (e.g., send data to the server)
        console.log('Registration successful');
    }
}

// Add event listener to form submission
document.getElementById('registrationForm').addEventListener('submit', handleRegistrationFormSubmit);

// Asynchronous functions to validate email and password
async function validateEmail(email) {
    // Use a regex to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    const errorElement = document.getElementById('emailError');
    errorElement.textContent = isValid ? '' : 'Invalid email address';
    return isValid;
}

async function validatePassword(password) {
    // Define password criteria (e.g., minimum length, special characters, etc.)
    const minLength = 8;
    const isValid = password.length >= minLength;
    const errorElement = document.getElementById('passwordError');
    errorElement.textContent = isValid ? '' : 'Password must be at least 8 characters long';
    return isValid;
}

// Function to validate a generic field and display error message
function validateField(value, errorElementId, errorMessage) {
    const isValid = value.trim() !== '';
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = isValid ? '' : errorMessage;
    return isValid;
}
