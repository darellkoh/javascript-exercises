/*
	Anagramatic
	
	Write a function that takes in two strings and determines if they are anagrams of each other. Something is an anagram of something else if it is made up of the same characters.
	
	For example ekez is an anagram of zeke. zkee is also an anagram of zeke.
	
	Your function should return true or false.
	
	    anagram('zeke', 'hello world');
	    // -> false
	
	    anagram('nick', 'ncki');
	    // -> true
*/

// first, check if they are the same length. 
// if yes, move into next loop
// if not, return false 
		// if they are the same length and are anagrams of each other, return true
		// if they are the same length but are not anagrams of each other return false 

function anagram(str1, str2) {
	if(str1.length === str2.length) {
		var word1Arr = str1.split('');   // change into array firt, then sort alphabetically 
		var word2Arr = str2.split(''); 
		var word1Sorted = word1Arr.sort().join(''); 
		var word2Sorted = word2Arr.sort().join(''); 
		// console.log(word1Sorted); 
		// console.log(word2Sorted); 
			if (word1Sorted === word2Sorted) { 
				return true; 
			} else {
				return false; 
			}
	} else {
		return false; 
		
	}
}


console.log(anagram('zeke', 'ezek'));  // true
console.log(anagram('meow', 'woem')); // true
console.log(anagram('zeke', 'hello world')); // false 
console.log(anagram('meow', 'kittykat'));  // false 

