/*10. Creating Custom Error Classes:
	• Create a custom error class InvalidAgeError that extends the built-in Error class.
	• Write a function checkAge that takes an age and 
		throws an InvalidAgeError if the age is less than 0 or greater than 120.
	• Demonstrate the usage of this function with both valid and invalid ages
*/
// Custom Error class InvalidAgeError
class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidAgeError';
    }
}

// Function to check age and throw InvalidAgeError if age is invalid
function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError('Age must be between 0 and 120.');
    }
    console.log(`Age ${age} is valid.`);
}

// Demonstrate usage of checkAge function

// Valid age
try {
    checkAge(25);   // Output: Age 25 is valid.
} catch (error) {
    if (error instanceof InvalidAgeError) {
        console.error('Invalid Age Error:', error.message);
    } else {
        console.error('Error:', error.message);
    }
}

// Invalid age
try {
    checkAge(150);  // Throws InvalidAgeError: Age must be between 0 and 120.
} catch (error) {
    if (error instanceof InvalidAgeError) {
        console.error('Invalid Age Error:', error.message);
    } else {
        console.error('Error:', error.message);
    }
}
