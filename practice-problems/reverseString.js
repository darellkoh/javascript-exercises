// Reverse a String

// Fullstack Academy - JavaScript JumpStart


// - Description

// Create the function "reverseString" that reverses a string and returns the value of the reversed string. NOTE: Do NOT use the .reverse() method.

// INPUT: reverseString("hello");
// OUTPUT: "olleh";

//*** Write the reverseString Function below ***

// Use "for" loop and decrement it, starting from the final character in the strong 
function reverseString(string) {
	var finalStr = "";
	for(var i = string.length-1; i >= 0; i--) { // the reverse of the usual increment setup 
		finalStr = finalStr + string[i]; 
	}
	return finalStr; 
}

reverseString("hello"); // 'olleh'


