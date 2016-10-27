/*
	Frequency Analysis
	
	Write a function that takes a string of text (containing ONLY lowercase letters)
	and returns an object containing the normalized frequency for each letter.
	
	To find a letter's normalized frequency, divide the number of that letter's occurence by the total character length of the string.
	
	Example
		var testStr = 'abca';
		frequencyAnalysis(testStr) ==> 	{
											a : 0.5,  //(2/4 = 0.5)
											b : 0.25, //(1/4 = 0.5)
											c : 0.25  //(2/4 = 0.5) 
										}
*/

// Function that takes a string of text 
// change text string to only lowercase characters - use .toLowerCase()
// Returns object containing normalized frequency for each letter (formula: number of occurences/total character length) - use str.length 

// Function that takes a string of text 
// change text string to only lowercase characters - use .toLowerCase()
// Returns object containing normalized frequency for each letter (formula: number of occurences/total character length) - use str.length 


// Version 1: the more efficient solution 
var frequencyAnalysis = function (str) {
var frequency = {};
	for(var i = 0; i < str.length; i++) {
		if(!frequency[str[i]]){
			frequency[str[i]] = 1;
		} else {
			frequency[str[i]]++;
	
		}
	}
	for (var prop in frequency) {
		frequency[prop] = frequency[prop] / str.length;
	}
	return frequency;
}

frequencyAnalysis('abca'); // { a: 0.5, b: 0.25, c: 0.25 }

// Alternative: creating a string with all 26 letters of the alphabet, looping over both strings and adding number of occurences to a couner.
