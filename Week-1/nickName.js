/*
	NICKNAME GENERATOR
	
	Write a naive nickname generator function that takes a name and returns the first 3 or 4 letters (4 letters if the 3rd is a vowel)
	
	eg  nickName("daniel") ==> 'dan'
		nickName("Beowulf") ==> 'Beow'
*/

function nickName (name) {
var vowels = ["a", "e", "i", "o", "u"]; 
for(var i = 0; i < vowels.length; i++) {
	if (name[2] === vowels[i]) { 
		return name.slice(0, 4); 
	} else {
		return name.slice(0, 3); 
		}
	}
}

console.log(nickName("Dhani Harrison")); // Dhan 
console.log(nickName("John Lennon")); // Joh
