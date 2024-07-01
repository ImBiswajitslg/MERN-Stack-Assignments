/*
User Data Analysis
	Scenario: You need to analyze user data for a social media platform.
	Task:
		a. Write a function analyzeUsers that accepts an array of users. Each user is
			an object with properties: name, age, and posts (which is an array of post
			objects, each having title and likes).
		b. Use map to create an array of user names.
		c. Use filter to find users who have at least one post with more than 100 likes.
		d. Use reduce to calculate the average age of these active users.
		e. Combine these higher-order functions to generate a summary report containing
			the list of user names, active users, and the average age of active users.
*/
function analyzeUsers(users) {
	
	let averageAge = 0;
	
	let userNames = users.map(user => users.name);
	
	let activeUsers = users.filter(user => {
		return user.posts.some(post => post.likes > 100);
	});
	
	let totalAge = users.reduce((total, user) => total += user.age, 0);
	if (activeUsers.length !== 0) {
		let averageAge = totalAge / activeUsers.length;
	}
	
	return {
		userNames : userNames,
		activeUsers : activeUsers,
		averageAge : averageAge
	}
}