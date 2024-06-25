/*Given an array of numbers, write a function that 
returns the index of the first number that is greater than 10. 
If no such number exists, return -1.*/
function greaterThanTen(arr) {
	for(let i=0; i < arr.length; i++){
		if(arr[i]>10)
			return i;
	}
	return -1;
}

const arr = [8,6,3,4,1,25,47];
if(greaterThanTen(arr) != -1)
	console.log("Index of the number is ",greaterThanTen(arr));
else
	console.log("All numbers are less than 10");