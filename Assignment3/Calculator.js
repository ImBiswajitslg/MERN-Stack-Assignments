/*6. Object Methods:
	• Create an object calculator with methods for add, subtract, multiply, and divide.
	• Each method should take two numbers and return the result.
	• Demonstrate the usage of these methods
*/
class Calculator {
	add(a, b){
		return (a+b);
	}
	
	substact(a, b){
		return a-b;
	}
	
	multiply(a, b){
		return a*b;
	}
	
	divide(a, b){
		if(b === 0) console.log("Can't be divided with zero");
		else
			return a/b;
	}
}

let calculator = new Calculator();
console.log(calculator.add(6,9)); // outputs 15
console.log(calculator.substact(25, 6)); //outputs 19
console.log(calculator.multiply(5, 4)); // outputs 20
console.log(calculator.divide(500, 5)); //outputs 100