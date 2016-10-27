// CS50: Recursion exercise 

// Create a function that takes in a number that returns sum of all conscecutive positive integers from n to 1
// eg. sum(0) = 0, sum(1) = 1, sum(2) = 3, sum(3) = 6, sum(4) = 10; 

// The manual labor way >:( 
	// sum(4) = n + (n-1) + ((n-1) - 1) + (((n-1) - 1) - 1) + ((((n-1) -1) - 1) -1);
	// sum(4) = n + (n-1) + (n-2) + (n-3); 
	// sum(5) = n + (n-1) + (n-2) + (n-3) + (n-4); 

function sum(n) {
	if(n === 0 || n === 1) {  // base case, always identity this first as it should be the easiest case to pin down. 
		return n; 
	} else {
		return n + sum(n - 1); 
	}
}
console.log(sum(0)); // 0
console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(3)); // 6 
console.log(sum(4));  // 10 
console.log(sum(5)); // 15 
