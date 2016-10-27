/*
	PRIME CHECK
	A prime number is a positive number whos only divisors are itself and 1. 
	
	Create a function that takes a number as an input and returns true if the input is prime and false if it isn't

*/

// Function should return true if prime (if-else statement) (num % i === 0) 
// Else, return false 


function primeCheck(num) {
	if(num > 0 && num < 4) return true; 
		
	for (var i = 2; i < num; i++) {
		if(num % i === 0) {
			return false;
		} else {
			return true; 
		}
	}
}

console.log(primeCheck(-2)); // undefined
console.log(primeCheck(2)); // true
console.log(primeCheck(4)); // false 
console.log(primeCheck(5)); // true
console.log(primeCheck(7)); // true
console.log(primeCheck(13)); // true

