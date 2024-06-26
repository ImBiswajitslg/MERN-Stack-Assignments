/*1.Class Creation and Object Instantiation:
	•	Create a Person class with properties name, age, and gender.
	•	Add a method describe that returns a string with all the person's details.
	•	Instantiate three objects of the Person class and log their details 
		using the describe method*/

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

let person1 = new Person("Biswajit", 24, "Male" );
let person2 = new Person("Bikiran", 22, "Male");
let person3 = new Person("Nitesh", 24, "Male");
console.log(person1.describe());
console.log(person2.describe());
console.log(person3.describe());