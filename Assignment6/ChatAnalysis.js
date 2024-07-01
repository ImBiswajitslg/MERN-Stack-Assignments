/*
Real-Time Chat Application
Scenario: You're developing a real-time chat application and need to manage messages.
	Task:
		a. Write a function manageMessages that accepts an array of messages. Each 
			message is an object with properties: content and sender.
		b. Use map to create an array of message contents.
		c. Use filter to find messages sent by a specific user (e.g., 'Alice').
		d. Use reduce to count the total number of messages.
		e. Combine these higher-order functions to generate a chat summary object 
			containing the list of message contents, messages by a specific user, and
			the total number of messages.
*/
function manageMessages (messages) {
	
	let contents = messages.map(message => message.content);
	
	let findMessages = messages.filter(message => message.sender === "Alice");
	
	let totalMessages = messages.length;
	
	return {
		messegeContents : contents,
		sender : findMessages,
		total : totalMessages 
	}
}