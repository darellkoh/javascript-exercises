// Find the first repeating letter in a string, return the repeating letter in a string 
// case senstitive, a !== A


// Using nested "for" loops; 
function firstRepeatingLetter (str) {
	
	for (var i = 0; i < str.length-1; i++) {
		for(var j = 0; j < str.length; j++) {	
			if (str[i] === str[j]) {
				if (i !== j) {
				}
			}
		}
	}
	return str[i]; 
}



console.log(firstRepeatingLetter("Grace Hopper")); // "r"
console.log(firstRepeatingLetter("Darell")); // "l"
