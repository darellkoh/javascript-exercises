/* 
Fullstack Academy - JavaScript JumpStart

Challenge - under_score to camelCase

Write a function to convert a variable name from under_score format to camelCase.
Make sure you support an unlimited number of underscores in the input!
*/

// Examples:

// underToCamel("first_name"); // should return firstName
// underToCamel("income_tax"); // should return incomeTax

// Write Code Below

function underToCamel(string) {
var arr = string.split("_");
var newStr = ""; 

	for (var i = 1; i < arr.length; i++) {
		var firstWord = arr[0]; 
		var subWord = arr[i]; 
		var firstLtrFirstWord = firstWord[0].toLowerCase();  // make sure first letter of first word is in lowercase 
		var firstWordRemainder = firstWord.slice(1); // slice out first character of first word, return remainder 
		var firstLtrSubWord = subWord[0].toUpperCase(); // make sure first letter of second word is in uppercase 
		var subWordRemainder = subWord.slice(1); // slice out first character of second word, return remainder 
		word1 = firstLtrFirstWord + firstWordRemainder; 
		newStr = newStr + firstLtrSubWord + subWordRemainder; 
	}
	return word1 + newStr; 
}

console.log(underToCamel("first_name")); // firstName
console.log(underToCamel("Grace_hopper_academy_Is_Great")); // graceHopperAcademyIsGreat
console.log(underToCamel("have_a_Great_Day")); // haveAGreatDay
