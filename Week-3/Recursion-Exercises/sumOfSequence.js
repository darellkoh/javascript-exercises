// Recusion Exercise 

// Find the sum of a sequence of numbers recursively.

function sum(n, ...args) {
	if(args.length === 0) {
		return n; 
	} else { 
		return n + sum(...args); 
	}
}
sum(10, 89, 4); // 103 

