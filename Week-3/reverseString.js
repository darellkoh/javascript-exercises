/*
	REVERSE STRING
	
	Create a function that takes a string of any length as input and returns that string reversed. 
	
	Use recursion ;)
*/

function reverseStr(str) {
	//console.log(str);
	if(typeof str !== 'string' || str === "") {
		return "Please enter in a string"; // exception
	} else { 
		if(str.length === 1) { 
			return str[0]; // base case 
		} else {
			//console.log(reverseStr(str.slice(0, str.length-1)));
			return str[str.length-1] + reverseStr(str.slice(0, str.length-1));
		}
	}
	
}
console.log(reverseStr("darell")); // "llerad" 
console.log(reverseStr("hello")); // "olleh"
console.log(reverseStr("")); // "Please enter in a string"
console.log(reverseStr(90101)); // "Please enter in a string"
