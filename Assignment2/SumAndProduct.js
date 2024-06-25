/*Write a function that takes an array of numbers and returns an object with two properties: 
sum, the sum of all the numbers, and
product, the product of all the numbers using reduce method.*/
function sumAndProduct(arr) {
	const obj = {};
	var sum = 0;
	var prod = 1;
	arr.map((val) => sum+=val);
	obj.sum = sum;
	arr.map((val) => prod*=val);
	obj.product = prod;
	return obj;
}

const array = [1,2,3,4,5,6];
console.log("Sum and Product of the array is ",sumAndProduct(array));



