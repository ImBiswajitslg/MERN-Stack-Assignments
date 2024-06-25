/*Given an array of objects representing users with name and age properties, write a function 
that returns an array of names of users who are over18.*/
function nameOfAdults(users){
	const name = [];
	users.map((users) => {if(users.age >= 18) name.push(users.name)});
	return name;
}
const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 15 }
];
console.log("Users over 18 ",nameOfAdults(users));
