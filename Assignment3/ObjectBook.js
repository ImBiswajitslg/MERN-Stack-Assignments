/*8.Advanced Object Methods:
	• Create an object book with properties title, author, and year.
	• Add methods to get and set each property.
	• Add a method getSummary that returns a string summarizing the book details.
	• Demonstrate the usage of these methods
*/
const book = {
    title: '',
    author: '',
    year: '',

    // Method to set title
    setTitle: function(title) {
        this.title = title;
    },

    // Method to get title
    getTitle: function() {
        return this.title;
    },

    // Method to set author
    setAuthor: function(author) {
        this.author = author;
    },

    // Method to get author
    getAuthor: function() {
        return this.author;
    },

    // Method to set year
    setYear: function(year) {
        // Check if year is a valid number
        if (typeof year === 'number' && year >= 0) {
            this.year = year;
        } else {
            console.error('Invalid year format. Year must be a non-negative number.');
        }
    },

    // Method to get year
    getYear: function() {
        return this.year;
    },

    // Method to get summary
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

// Demonstrate usage of methods

// Set properties using set methods
book.setTitle('The Catcher in the Rye');
book.setAuthor('J.D. Salinger');
book.setYear(1951);

// Get properties using get methods
console.log('Title:', book.getTitle());     // Output: The Catcher in the Rye
console.log('Author:', book.getAuthor());   // Output: J.D. Salinger
console.log('Year:', book.getYear());       // Output: 1951

// Get summary of the book
console.log(book.getSummary());             // Output: The Catcher in the Rye was written by J.D. Salinger in 1951.
