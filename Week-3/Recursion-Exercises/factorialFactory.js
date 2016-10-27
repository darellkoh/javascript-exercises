// Recursion: Factorial exercise

// Eg: the factorial for 5 will be 120 (5 * 4 * 3 * 2 * 1)  
// Base case = 0 or 1, will just return 0 or 1 itself 
// Otherwise, normal pattern will be n * (n-1)! 
// n * (n-1) * ((n -1) -1) * (((n-1) - 1) - 1) * ((((n-1) - 1) - 1) -1) 
// n * (n-1) * (n-2) * (n-3) * (n-4); 

function factorialFactory(n) {
	if(n === 0 || n === 1) {
		return n; 
	} else {
		return n * factorialFactory(n-1); 
	}
}

console.log(factorialFactory(0)); // 0
console.log(factorialFactory(1)); // 1
console.log(factorialFactory(2)); // 2
console.log(factorialFactory(3)); // 6
console.log(factorialFactory(4)); // 24
console.log(factorialFactory(5)); // 120
console.log(factorialFactory(6)); // 170
