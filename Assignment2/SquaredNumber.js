//Write a function that returns a new array with each number squared using the map method
function squaredValues(arr) {
	var squaredArr = [];
	arr.map((num) => squaredArr.push(num*num));
	return squaredArr;
}

const array = [5,1,4,3,9,6,7];
var arr = squaredValues(array);
console.log(arr);