/*3. Map Operations:
	• Create a map to store student names and their corresponding scores.
	• Write functions to add a student, remove a student, and get a student's score.
	• Demonstrate the usage of these functions.
*/

let student = new Map();
// set() is used to add elements in the Map data-structures.
student.set("Biswajit", 8.00);
student.set("Bikiran", 7.92);
student.set("Akash", 8.60);
// get() is used to retrive value of the given key.
console.log("Score of Biswajit is ",student.get("Biswajit"));
// delete() is used to remove a key, value pair. 
student.delete("Biswajit");
student.forEach((value, key) => {
	console.log(value, key);
})