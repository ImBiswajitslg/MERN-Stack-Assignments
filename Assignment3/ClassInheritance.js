/*2. Class Inheritance:
	• Create a Student class that inherits from the Person class.
	• Add an additional property studentID and
		a method study that returns a string stating the student is studying.
	• Instantiate an object of the Student class and 
		demonstrate the inherited and new properties/methods.
*/
class Person {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	
	describe = () => {
		return `${this.name} ${this.age} ${this.gender}`;
	}
}

class Student extends Person {
	constructor(name, age, gender, studentID) {
		super(name, age, gender);
		this.studentID = studentID;
	}
	
	study = () => {
		return `${this.name} with student id ${this.studentID} is studying`;
	}
}

let student = new Student("Biswajit", 24, "Male", 19);
console.log(student.describe());
console.log(student.study());