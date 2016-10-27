// Consonant Check - remove all vowels from a string, return only consonants 

// Version 1: using arrays
function consonantCheck(str) {
	var vowels = ["a", "e", "i", "o", "u"]; 
	var result = ""; 
	for(var i = 0; i < str.length; i++) {
		if(vowels.indexOf(str[i]) === -1) {  // if characters in string is not found in the corresponding vowel string, then add to loop 
			result += str[i]; 
			console.log(str[i], vowels.indexOf(str[i])); 
		}
	}
	 return str; 
}
consonantCheck("chocolate"); 

// c -1
// h -1
// c -1
// l -1
// t -1
// => 'chclt'


// Version 2: using strings 
function removeVowels(str) {
var result = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
			result += str[i];
			}
		}
	return result;
}

removeVowels("chocolate");  // 'chclt'


