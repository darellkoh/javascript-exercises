/* 

Vowel Count

Fullstack Academy - JavaScript JumpStart

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
the string contains (ie. "Fullstack Academy" would return 5).  

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */

// Function that takes in a string 
	// Returns number of vowels in the string 

// Method 1 
function vowelCount(str) {
	var vowels = "aeiou";  
	str = str.toLowerCase(); // change all characters in input string to lower case as it is case sensitive  
	var numOfVowels = 0; 
	for(var i = 0; i < str.length; i++) {
		if(vowels.indexOf(str[i]) >= 0) {  // to indicate that it is in the array. If an element is not in an array, it has an infex of -1.
			numOfVowels += 1;
		} else {
			numOfVowels += 0; 
		}
	}
	return numOfVowels; 
}

console.log(vowelCount("Fullstack Academy")); // 5
console.log(vowelCount("Good Job")); // 3 

// Method 2: Nested "for" loops using strings
function vowelCount(str) {
var lowerStr = str.toLowerCase(); 
var vowels = "aeiou"; 
var count = 0;
	for(var i = 0; i < lowerStr.length; i++) {
		for(var j = 0; j < vowels.length; j++) { 
			if (vowels[j] === lowerStr[i]) {
				count += 1; 
				
			}
		}
	} 
	return count; 
}

vowelCount('Good Job'); // 3

// Method 3: Nested "for" loops using arrays 
function vowelCount(str) {
var lowerStr = str.toLowerCase(); 
var vowels = ['a', 'e', 'i', 'o', 'u']; 
var count = 0;
	for(var i = 0; i < lowerStr.length; i++) {
		for(var j = 0; j < vowels.length; j++) { 
			if (vowels[j] === lowerStr[i]) {
				count += 1; 
				
			}
		}
	} 
	return count; 
}

vowelCount('Good Job'); // 3
