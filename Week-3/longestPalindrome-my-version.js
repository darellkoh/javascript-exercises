/*
	LONGEST PALINDROME
	
	A Palindrome is a word that is spelled the same forwards and backwards.
	
	Write a function that takes an array of strings, and returns the longest string that is a Palindrome (case insensitive)
	
	ex)
		var myArr = ['sonar', 'raCecAr', 'bubb', '201BoB102'] 
		longestP(myArr) --> '201BoB102'

*/

// Strategy: 
// Need to check if it is even an array 		
// If it is not an array, return "Please enter in an array "
	// If it is, need to check if the elements in array are strings 
		// If it is not a string, return "it's not a string"
		// If it is a string, need to check it's a palindrome
			// If it is a palindrome, check if there are any more palindromes. 
					// If there are no more palindromes, return string itself
					// If there are more palindromes, compare lengths to see which palindrome is longer, then return longer one.
			// If is it not a palindrome, return "this is not a palindrome"
			
// Write little functions for each task to make it easier 


// Helper function to check if the string is a palindrome 
function isPalindrome(str) { 
var newStr = ""; 
	if(typeof str === 'string') { 
		for(var k = str.length - 1; k >= 0; k--) {
			newStr += str[k];
		}
		if(str === newStr) {
			return true; 
		} else {
			return false; 
		}
	}
}
isPalindrome("meow"); 


function longestPalindrome (arr) {
	// if it is not an array 
	if(!Array.isArray(arr)) {
		return "Please enter in an array."; 
	}  
	var longest = ""; 
	// If element in array is not a string 
	for (var i = 0; i < arr.length; i++) {
		if(typeof arr[i] !== 'string') { 
			return "Element in array is not a string!"; 
		// If element in array is a string, compare lengths 
		} else { 
			var arrIndex = arr[i]; 
			if(isPalindrome(arrIndex.toLowerCase()) && arrIndex.length > longest.length) { 
				longest = arrIndex;
			}
		}
	}
	if(longest) {
		return longest;
	} else {
		return "No palindromes in array."; 
	}
} 
	 

longestPalindrome(['sonar', 'raCeCar', 'bubb', '201BoB102']); // '201BoB102'
// longestPalindrome([9011]); // 'Element in array is not a string'
//longestPalindrome(['sonar', 'bubb']); // 'No palindromes in array'
