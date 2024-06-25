/*Write a function that removes the third element from an array and 
returns a new array with the removed element.Do not modify the original array.*/
function missingThird(arr){
	var arr1;
	if (arr.length < 4)
		return;
	else
		arr1 = [...arr.slice(0,2), ...arr.slice(3, arr.length)];
	return arr1;
}

const arr = [3,4,8,6,7,1,2,5];
console.log("New array is ", missingThird(arr));