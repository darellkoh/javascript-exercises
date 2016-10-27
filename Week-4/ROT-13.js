/*
	ROT13
	
	ROT13 is a simple cryptographic cypher (Rotate 13 letters) https://en.wikipedia.org/wiki/ROT13
	
	
	By moving each letter in the alphabet 13 letters over 
	
	Create at least 2 different flavors of the ROT13 cypher. Each function should take a string, rotate every letter in the string 13 letters over (A -> N, B -> O, etc) and return the new encrypted string. 
*/
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


function findIndex(alphabet, currentLtr) {
	for(var j = 0; j < alphabet.length; j++) {
		if(alphabet[j] === currentLtr) {
			return j; 
		}
	}
}

var ROT13_1 = function(str) {
var arr = []; 
	if(typeof str !== 'string') {
		return "Please enter in a string."; 
	}  
	var strLower = str.toLowerCase(); 
	var strArr = strLower.split(''); 
		for(var i = 0; i < strArr.length; i++) {
		var currentLtr = strArr[i]; 
		var currentIndex = findIndex(alphabet, currentLtr); 
		var newIndex = currentIndex + 13; 
			if(currentIndex >= 13) {
				newIndex = currentIndex - 13; 
			}
			arr.push(alphabet[newIndex]); 	
		}
		return arr; 
}; 

// var ROT13_2 = function(str) {
	
// }

//Tests
console.log(ROT13_1('hello')); // [ 'u', 'r', 'y', 'y', 'b' ]
console.log(ROT13_1('OTheLlo')); // [ 'b', 'g', 'u', 'r', 'y', 'y', 'b' ]
console.log(ROT13_1(90)); // "Please enter in a string."

