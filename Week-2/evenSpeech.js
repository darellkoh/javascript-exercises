/*
	EVEN SPEECH
	
	Create a function that takes a string of words (no punctuation, each word is seperated by a space) and returns the string with only words of an even length. Any words with an odd length should have their last letter duplicated to even it out
	
	eg)
		evenIt('Hello my name is Karen') ==> 'Helloo my name is Karenn'

*/

// function that takes a string of words
	// Returns string with only words of an even length 
	// Words with an odd length will have last letter duplicated. 
	
	// Use .split() to push string into an array 
	// a for loop over the sentence array to loops over words 
	// an if-else statement 	
		// even numbers = 0, 2, 4, 8, 10, 12 (divisible by 2, modulus of 0) 

 	
function evenIt(string) {
	var sentenceArr = []; 
	sentenceArr = string.split(' '); 
	// console.log(sentenceArr); 
 	
 	// loop over each word in the sentence array 
 	for(var i = 0; i < sentenceArr.length; i++) {
 		// for even numbers, return word itself 
 		if(sentenceArr[i].length % 2 === 0) { 
 			console.log(sentenceArr[i]);
 		} else {
 			// for odd numbers, duplicate last letter 
 			var oddWords = sentenceArr[i]; 
 			console.log(sentenceArr[i] + (oddWords[oddWords.length-1])); 
 		}
	}
}

evenIt("Hello my name is Karen"); // Helloo my name is Karenn
evenIt("I think The Power Broker is an amazing book"); // II thinkk Thee Powerr Broker is an amazingg book
