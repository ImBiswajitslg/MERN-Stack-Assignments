/*
E-commerce Order Processing
	Scenario: You're building an e-commerce platform, and you need to process a 
		list of orders to generate a report.
	Task:
	a. Write a function processOrders that accepts an array of orders. Each order 
		is an object with properties: id, amount, and status (which can be 'pending',
		'shipped', or 'delivered').
	b. Use map to create an array of order ids.
	c. Use filter to create an array of orders that have been delivered.
	d. Use reduce to calculate the total amount of all delivered orders.
	e. Combine these higher-order functions to generate a report object containing 
		the list of order ids, delivered orders, and the total delivered amount
*/

function processOrder (orders) {
	let orderIDs = orders.map(order => order.id);
	
	let deliveredItems = orders.filter(order => order.status === "delivered");
	
	let totalDelivered = orders.reduce((total, order) => total += order.amount, 0);
	
	return {
		orderIds : orderIDs,
		delivered : deliveredItems, 
		totalDeliveredAmount : totalDelivered
	}
}