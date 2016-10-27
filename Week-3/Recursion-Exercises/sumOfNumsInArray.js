// Create a recursive function that returns the sum of all the numbers in an array

// 1) Define the base case
// 2) Define the recursive case
// 3) Test the function with simple inputs

function sumArray(arr) {
	// Base case 
	if (arr.length <=1) {
		return arr[0]; 
	// Recursive Case 
	} else { 
	// Recursive case 
		return arr[0]+ sumArray(arr.slice(1)); 
	}
}

sumArray([1, 3, 5]);

// 1 + 8 = 9, last function in call stack 
// 3 + 5 = 8, second last function in call stack 
