//Write a function that concatenates two arrays without using the concat method.  
function concateArray(arr1, arr2){
	let newArr;
	newArr = [...arr1, ...arr2];
	return newArr;
}

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];
console.log("New array is ",concateArray(arr1, arr2));