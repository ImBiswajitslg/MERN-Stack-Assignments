/*
Advanced Closure with Configuration
	a. Create a function createCounter that takes an initial value and step
		size as parameters.
	b. The function should return an object with 
		methods: increment, decrement, reset, and getValue.
	c. The increment method should increase the counter by the step size.
	d. The decrement method should decrease the counter by the step size.
	e. The reset method should reset the counter to the initial value.
	f. The getValue method should return the current value of the counter.
	g. Demonstrate the closure by creating a counter with an initial value of
		10 and step size of	5
*/

function createCounter (initValue, stepSize) {
	let value = initValue;
	return {
		increment : function() {
			value += stepSize;
		},
		decrement : function() {
			value -= stepSize;
		},
		reset : function() {
			value = initValue;
		}, 
		getValue : function() {
			return value;
		}
	}
}

let counter = createCounter(10, 5);
counter.increment(); // will make the value 15
counter.increment(); // will make the value 20
counter.reset(); // will make the value again 10
counter.decrement(); // decrese the value by 5
console.log(counter.getValue()); //current value i.e. 5 