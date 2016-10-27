// Recursion Exercises from recur(recur) : https://roman01la.github.io/recursion-exercises/#exponent

// Exercise #2: Exponentiation
// Find the result of 8 ^ 2 recursively.

function exponentCalc (exponent, base) {
	if(exponent === 0) {
		return 1; 
	} else if (exponent === 1) { 
		return base; 
	} else { 
		return exponentCalc(exponent - 1, base) * base; 
		
	}
}

console.log(exponentCalc(2, 8)); // 64 
console.log(exponentCalc(3, 5)); // 125
console.log(exponentCalc(4, 2)); // 16 

