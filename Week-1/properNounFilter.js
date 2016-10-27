// Complete properNounFilter()
// The function should return true if the word argument is a proper Noun (first letter is capitalized). It should return false if the word isn't a proper Noun, if the word is mixed case or if it is all caps

var properNounFilter = function(word) {
	// Return "True" is word is a proper noun.
	// Return "False" if word !== proper noun.

		if (word[0] === word.charAt(0).toLowerCase()) {
			return "False";	
		} else {
			for (var i = 1; i < word.length; i++) {  // iterate at index = 1 to skip the first letter.
				if (word[i] === word.charAt(i).toUpperCase()) {
					return "False";
				}
			}
		}
	return "True";
}
properNounFilter("Tesla"); // Tesla 


//Tests
console.log("this should be false: " + properNounFilter('euphoria')); // this should be false: False
console.log("this should be true: " + properNounFilter('Einstein')); // this should be true: True 
console.log("this should be true: " + properNounFilter('Nebraska')); // this should be true: True
console.log("this should be false: " + properNounFilter('ZOMGLOL')); // this should be false: False 
console.log("this should be false: " + properNounFilter('apOLLo')); // this should be false: False
