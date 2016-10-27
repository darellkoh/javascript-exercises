/*
	BUBBLE SORT
	
	The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):

	[9,7,5,3,1,2,4,6,8]
	To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes:
	
	[7,9,5,3,1,2,4,6,8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
	
	You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When you reach the end of the list, it is said that you have completed 1 complete pass.
	
	Create your own version of the Bubblesort algorithm that takes 2 inputs: an array of unsorted integers and a string "ASC" or "DESC". For "ASC", sort the array in ascending order, and descending order for DESC
	
	ex) 
		bubble([2,1,0,5], 'DESC') ==> [5,2,1,0]
		bubble([2,1,0,5], 'ASC') ==> [0,1,2,5]

*/

// Bubblesort sorts a similar list of items into either ascending or descending order depending on the second argument input string 
// Bubblesort function takes 2 inputs (array of unsorted integers, string)
	// Sort array in ascending order if string is 'ASC'
	// Sort string in descending order if string is 'DESC'

// Cheat method: using .sort(); 
function bubble (arr, str) {
 // if statements to check if str = "ASC" or "DESC"
	if (str === "ASC") {
		// loop through array and sort ascending 
		var ascArr = arr.sort(); 
		return ascArr; 
	} else { 
		// loop through array and sort descending 
		var sortedArr = arr.sort();
		var descArr = sortedArr.reverse(); 
		return descArr; 
	}
}

// [ 5, 2, 1, 0 ]
// [ 0, 1, 2, 5 ]
// [ 1, 2, 2, 3, 3, 5, 5, 6 ]
// [ 6, 5, 5, 3, 3, 2, 2, 1 ]

// Bubblesort method 
function bubble (arr, order) { 
var i; 
var current, next; 
var wasASwap = true; 
var shouldSwap; 

	if (order === 'ASC') {
		shouldSwap = function(a, b) {
			return a > b; 
		}; 
	} else if (order === 'DESC') {
		shouldSwap = function(a, b) {
			return a < b; 
		};
	}
	while(wasASwap === true) { 
		
		wasASwap = false; 
		
		for(i = 0; i < arr.length; i++) {
			current = arr[i]; 
			next = arr[i + 1]; 
			
			if(shouldSwap(current, next)) {
				arr[i] = next; 
				arr[i + 1] = current; 
				wasASwap = true;
			}
		}
	}
	return arr; 
} 


// Tests
console.log(bubble([2,1,0,5], 'DESC'));
console.log(bubble([2,1,0,5], 'ASC'));
console.log(bubble([5, 6, 1, 2, 3, 5, 2, 3], 'ASC'));
console.log(bubble([5, 6, 1, 2, 3, 5, 2, 3], 'DESC'));

// [ 5, 2, 1, 0 ]
// [ 0, 1, 2, 5 ]
// [ 1, 2, 2, 3, 3, 5, 5, 6 ]
// [ 6, 5, 5, 3, 3, 2, 2, 1 ]
