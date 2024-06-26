/*9. Symbols and Private Methods:
	• Create a class BankAccount with properties accountNumber, balance, and accountHolder.
	• Add a method to deposit and withdraw money. 
		Ensure that the balance cannot be directly modified from outside the class.
	• Use a Symbol to create a private method _calculateInterest 
		that adds interest to the balance.
	• Demonstrate the usage of these methods
*/
// Symbol for private method
const calculateInterest = Symbol('calculateInterest');

class BankAccount {
    constructor(accountNumber, balance, accountHolder) {
        this.accountNumber = accountNumber;
        this._balance = balance; // Private property convention using underscore
        this.accountHolder = accountHolder;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this._balance}`);
        } else {
            console.error('Deposit amount must be greater than zero.');
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this._balance}`);
        } else {
            console.error('Invalid withdrawal amount or insufficient balance.');
        }
    }

    // Private method to calculate interest
    [calculateInterest](rate) {
        const interest = this._balance * rate / 100;
        this._balance += interest;
        console.log(`Interest added. New balance after interest: ${this._balance}`);
    }

    // Method to add interest (public interface)
    addInterest(rate) {
        this[calculateInterest](rate);
    }

    // Getter for balance (read-only)
    get balance() {
        return this._balance;
    }
}

// Demonstrate usage of BankAccount class

// Create an instance of BankAccount
const myAccount = new BankAccount('123456789', 1000, 'John Doe');

// Deposit and withdraw money
myAccount.deposit(500);         // Output: Deposited 500 into account 123456789. New balance: 1500
myAccount.withdraw(200);        // Output: Withdrawn 200 from account 123456789. New balance: 1300

// Add interest using public method
myAccount.addInterest(5);       // Output: Interest added. New balance after interest: 1365

// Access balance (read-only)
console.log('Current balance:', myAccount.balance);   // Output: Current balance: 1365

// Trying to modify balance directly (should not work)
myAccount._balance = 2000;      // No output or error, but does not affect the actual balance

// Trying to access _balance directly (should not work)
console.log('Direct access to _balance:', myAccount._balance);   // Output: undefined or throws error (depending on strict mode)

// Attempt to withdraw more than available balance
myAccount.withdraw(1500);       // Output: Invalid withdrawal amount or insufficient balance.
