/*4. Set Operations:
	• Create a set to store a collection of unique courses.
	• Write functions to add a course, remove a course, 
		and check if a course exists in the set.
	• Demonstrate the usage of these functions */
let courses = new Set();
courses.add("DBMS");
courses.add("Operation System");
courses.add("Networking");
courses.add("Java");
courses.forEach((values) => console.log(values));
courses.delete("Networking");
console.log("After deletion");
courses.forEach((values) => console.log(values));
console.log("Does the course offer C. Architecture ", courses.has("Computer Architecture"));