//Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.
const arr1 = [1,2,3,4,5];

const arr2 = [6,7,8];

const mergeArr = [9, ...arr1, ...arr2];

console.log("Merged array",mergeArr);