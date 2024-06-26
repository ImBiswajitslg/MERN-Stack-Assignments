/*7.Custom Error Classes:
	• Create a custom error class ValidationError that extends the built-in Error class.
	• Write a function validateUser that takes a user object and 
		validates its properties 
		(e.g., name must be a string, age must be a number and non-negative).
	• Throw ValidationError with an appropriate message if validation fails.
	• Write a function to call validateUser and handle any exceptions, 
		printing an appropriate message.
*/
// Custom Error class ValidationError
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Function to validate user object
function validateUser(user) {
    if (typeof user.name !== 'string' || user.name.trim().length === 0) {
        throw new ValidationError('Name must be a non-empty string.');
    }
    if (typeof user.age !== 'number' || user.age < 0 ) {
        throw new ValidationError('Age must be a non-negative integer.');
    }
}

// Function to call validateUser and handle exceptions
function validateAndHandle(user) {
    try {
        validateUser(user);
        console.log('User validation successful:', user);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('Validation Error:', error.message);
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Valid user object
let validUser = {
    name: 'John Doe',
    age: 30
};

// Invalid user object
let invalidUser = {
    name: '',
    age: '30'
};

// Testing valid user
validateAndHandle(validUser);

// Testing invalid user
validateAndHandle(invalidUser);
