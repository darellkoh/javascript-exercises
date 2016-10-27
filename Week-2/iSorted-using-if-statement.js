/*
Check if Array is Sorted
Complete the function isSorted, which takes an array as inputed and outputs a boolean indicating if the array's contents are in ascending order.

    isSorted([8,2,3,4])
    // -> false


    isSorted([2,3,4,8])
    // -> true

*/

// function that takes an array 
// outputs boolean indicating if array's contents are in ascending order 

// Using "if" statements 

function isSorted(arr) {
 	if(arr[3] > arr[2] && arr[2] > arr[1] && arr[1] > arr[0]) {
 		return "true"; 
 	} else { 
 		return "false "
	}
}

console.log(isSorted([8,2,3,4])); // false 
console.log(isSorted([2,3,4,8])); // true 
console.log(isSorted([4,5,7,9])); // true
