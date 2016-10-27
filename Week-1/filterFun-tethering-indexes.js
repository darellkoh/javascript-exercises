
/*
	FILTER FUN
	
	Create a function myFilter(arr, filter) that takes an array of letters and a 'filter' character.
	The function should return a new ordered array of every element in the input array that is after the 'filter' alphabetically. You can assume the characters will always be lower case
	
	ex
		myFilter(['b', 'w', 'a', 'p', 'v'] , 'c') ==> ['p', 'v', 'w']
*/

// Using one "for" loop

// Create an array containing all letters in the alphabet, alphabetList
// Find the index of the filter character
// Create new empty array 
// Use "for" loop to loop through given array
// "Tether" index of given array to that of alphabetList's elements 
// Use "if" statement to push elements in given array that come after filterIndex to new array


// if statements to push elements found in both arrays that come after the filter character to the new empty array. 


function myFilter(arr, filter) {
var alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var filterIndex = alphabetList.indexOf(filter); 
var newArr = [];


		for (var i = 0; i < arr.length; i++) { 
		var arrValueIndex = alphabetList.indexOf(arr[i]); 
				if (arrValueIndex > filterIndex) {
					newArr.push(arr[i]); 
				}
			}
	return newArr.sort(); 
}

console.log(myFilter(["b", "w", "a", "p", "v"], "c")); // [ 'p', 'v', 'w' ]
console.log(myFilter(["z", "e", "d", "m", "r", "c", "s", "a"], "f")); // [ 'm', 'r', 's', 'z' ]


