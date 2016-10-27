/*
	FILTER FUN
	
	Create a function myFilter(arr, filter) that takes an array of letters and a 'filter' character.
	The function should return a new ordered array of every element in the input array that is after the 'filter' alphabetically. You can assume the characters will always be lower case
	
	ex
		myFilter(['b', 'w', 'a', 'p', 'v'] , 'c') ==> ['p', 'v', 'w']
*/

// Create an array containing all letters in the alphabet 
// Find the index of the filter character
// Create new empty array 
// Use "for" loop to loop through alphabetList and given array
// Use "if" statement to push elements found in both arrays that come after the filter character to the new empty array. 

function myFilter(arr, filter) {
var alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var filterIndex = alphabetList.indexOf(filter); 
var newArr = []; 

	for(var i = 0; i < alphabetList.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(i > filterIndex && alphabetList[i] === arr[j]) {
				newArr.push(alphabetList[i]);
			} 
		}
	}
	return newArr.sort(); 
}

console.log(myFilter(["b", "w", "a", "p", "v"], "c")); // [ 'p', 'v', 'w' ]
console.log(myFilter(["z", "e", "d", "m", "r", "c", "s", "a"], "f")); // [ 'm', 'r', 's', 'z' ]
