// Write a function that takes an array of numbers and returns the first and last elements of the array.
function firstAndLast (arr){
	var first = arr[0];
	var last = arr[arr.length-1];
	return [first, last];
}

const arr = [5,1,4,3,9,6,7];
var [first, last] = firstAndLast(arr);
console.log(`First and Last element of the array is ${first} and ${last} respectively`);