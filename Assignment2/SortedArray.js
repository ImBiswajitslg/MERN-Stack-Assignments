//Write a function that returns the array sorted by the length of each string, 
//in ascending order
function sortByStringLength(arr){
	arr.sort((a, b) => a.length-b.length);
	return arr;
}

const arr = ["Siliguri", "Institute", "of", "Technology"];
console.log("Sorted array ",sortByStringLength(arr));