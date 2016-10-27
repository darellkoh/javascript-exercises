/*
	FIBONACCI
	
	Create a function that takes a number n and returns the nth number in the Fibonacci sequence.
	
	The Fibonacci sequence is a series of numbers, where each number is the sum of the two numbers preceding it.
	
	Ex)
		1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233... 
		
*/

// takes in the number n, returns the nth number in Fibonnaci, cannot use loop (hurrah!!!!!)
// Base case = 0 or 1, returns 0 or 1 itself (n)
// Note: it's not asking for the two integers that add up to the Fib number, it's asking the nth number in the sequence 
// Pattern for Fib numbers: 
// 1 = 0 + 1  (base case) 
// 2 = 1 + 1 (n-1) + 1;  (base case?)
// 3 = 2 + 1 (n-1) + ((n-1)-1)
// 5 = 3 + 2 
// 8 = 5 + 3  
// 13 = 8 + 5  

// use an array, create fib numbers up to n
// then indicate the exact nth number using array[index + 1]

var fib = function(n) {
	if(n < 0) {
		return "Please enter a positive integer"; 
	} else if (n === 0 || n === 1) {
		return n;
	} else {
		return fib(n-1) + fib(n-2); 
	}
};


console.log(fib(-1)); // Please enter a positive integer 
console.log(fib(0)); // 0 
console.log(fib(1)); // 1 
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(8)); // 21
console.log(fib(13)); // 233
console.log(fib(20)); // 6765
