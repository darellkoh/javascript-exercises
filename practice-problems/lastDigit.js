/*

Last Digit

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns `true` or `false` if they ahve the same last digit.

** Examples**

- INPUT: `lastDigit(22,32);`
- OUTPUT: `true`

- INPUT: `lastDigit(77, 999);`
- OUTPUT: `false`

- INPUT: `lastDigit(33,3);`
- OUTPUT: `true`
*/

// If both integers have the same last digit	
	// return "true"
// If both integers do not have the same last digit 
	// return "false"

function lastDigit(int1, int2) {
	var intStr1 = int1.toString();
	var intStr2 = int2.toString(); 
	if(intStr1.charAt(intStr1.length-1) === intStr2.charAt(intStr2.length-1)) {
		return "true"; 
	} else {
		return "false"; 
	}
	
}

// Tests
console.log(lastDigit(22, 32)); // true
console.log(lastDigit(77, 999)); // false 
console.log(lastDigit(33,3)); // true
