/*5.Advanced Class Features:
	•	Create a Library class with properties name and books (an array of book objects).
	•	Each book object should have title, author, and year.
	•	Add methods to Library class to add a book, remove a book by title, 
		and find a book by title.
	•	Demonstrate these features with a few books.
*/
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Define the Library class
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
	// method to add books
	addBook(title, author, year) {
		let newBook = new Book(title, author, year);
		this.books.push(newBook);
		console.log(`${newBook.title} is added in ${this.name} library`);
	}
	// Method to remove a book by title
    removeBook(title) {
        let indexToRemove = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove !== -1) {
            let removedBook = this.books.splice(indexToRemove, 1)[0];
            console.log(`Removed book: ${removedBook.title}`);
        } else {
            console.log(`Book with title '${title}' not found.`);
        }
    }
	
	findBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return this.books[i];
            }
        }
        return null;
    }
	listBooks() {
        console.log(`Books in ${this.name}:`);
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (${book.year})`);
        });
    }

}
let myLibrary = new Library("Vidyasagar Library");
myLibrary.addBook("Python Tricks", "Dan Bader", 2017);
myLibrary.addBook("Deep Learning", "Ian Goodfellow et al.", 2016);
myLibrary.addBook("Clean Code", "Robert C. Martin", 2008);

myLibrary.listBooks();

myLibrary.removeBook("Python Tricks");

myLibrary.listBooks();