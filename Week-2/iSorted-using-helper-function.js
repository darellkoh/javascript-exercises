/*
Check if Array is Sorted
Complete the function isSorted, which takes an array as inputed and outputs a boolean indicating if the array's contents are in ascending order.

    isSorted([8,2,3,4])
    // -> false


    isSorted([2,3,4,8])
    // -> true

*/

// Using arr.sort method 
// first, change original arr to string
// then sort array and compare ot to original to return a boolean 

function sortNum(a, b) {
	return a - b; 
}

function isSorted(arr) {
	var originalArr = arr.toString(); 
	var sortedArr = arr.sort(sortNum).toString(); 
	return originalArr === sortedArr; 

}


console.log(isSorted([8,2,3,4])); // false 
console.log(isSorted([2,3,4,8])); // true 
console.log(isSorted([4,5,7,9])); // true
  
