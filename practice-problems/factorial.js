/*

[Factorial] - Exercise Link

Create the function factorial(num) that returns the factorial of the parameter.

Not sure what the factorial is? Check this [link for a refresher!](http://www.rapidtables.com/math/algebra/Factorial.htm)

**Example:**

- INPUT: `factorial(4);`
- Return Value: `24`
// 4 * 3 * 2 * 1
*/

// Function to return factorial of the number parameter
// n! = n - (n-1)!

function factorial(num) {
var numFactorial = 1;

	for(num; num > 1; num--) {
		numFactorial = numFactorial * num;
	}
	return numFactorial; 
}

console.log(factorial(4)); // 24 
console.log(factorial(6)); // 720



