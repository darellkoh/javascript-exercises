/*

Max Of Three

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

The function takes three number arguments and returns the highest number out of three.

**Examples*

- INPUT: `maxOfThree(5,4,10);`
- OUTPUT: `10`

- INPUT: `maxOfThree(7,7,4);`
- OUTPUT: `7`

Write Code Below
*/

// Function that takes in three num arguments, returns largest out of the three 

function maxOfThree(num1, num2, num3) { 
	if ((num1 > num2) && (num1 > num3)) { 
		return num1; 
	} else if ((num2 > num3) && (num2 > num1)) {
		return num2; 
	} else {
		return num3; 
	}
}


// Tests 
console.log(maxOfThree(11,8,4)) // 11
console.log(maxOfThree(7,8,4)) // 8
console.log(maxOfThree(5,4,10)) // 10
