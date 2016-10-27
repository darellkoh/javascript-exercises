/*
Sum Of Digits- Exercise Link

Create the function sumOfDigits that adds individual digits of a number and return the sum.


**Example:**

- INPUT: `sumOfDigits(414);`
4+1+4
- Return Value: `9`

- INPUT: `sumOfDigits(2913);`
- Return Value: `15`




TIP:

You may need to use the following methods or operators in your solution, reference the workshop page for additional information.

*/

// Function that takes in a number
// Adds individual digits in that number
// Returns sum of digits 

function sumOfDigits(num) {
	var numTotal = 0;
	
	while(num > 0) {
		numTotal += num % 10; 
		num = Math.floor(num/10); // get rid of the modulo each time the number loops
	}
	return numTotal; 
}

function sumOfDigits(num) {
var numTotal = 0;
var numStr = num.toString(); // convert num to a string to we can use loops on it 
 	for(var i = 0; i < numStr.length; i++) {
 		numTotal += +numStr[i]; 
 	}
	return numTotal;
}
sumOfDigits(414); // 9 
