/*
	SHIFT DECK
	Create a function, deckShift() that takes a number and a direction ('left' or 'right) and returns an array of cards shifted that many spaces in that direction. This function should not mutate the original deck variable.
	
	Examples
		deckShift(4, 'left') => [6,7,8,9,10,'J','Q','A',2,3,4,5];
		deckShift(2, 'right') => ['K','A',2,3,4,5,6,7,8,9,10,'J','Q'];
*/

// Takes a number representing number of characters to move and a direction
// Return array shifted the above numnber of times in that direction 

// Sort by direction first 
// If left, slice X characters from front of array and store it in a var. 
	// Then, slice the remainder and store it in another var. 
	// Then, concat the two in order -- remainder first, then x characters from front of array. 
// Else, if right, slice X characters from back of array, store it in a var. // Then, slice remainder, store it in another var. 
	//	Then, concat the two in order -- x characters first, then remainder.  

var deck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A'];

var deckShift = function(index, direction) {
	var deckCopy = deck.slice(0);  // original array remains untouched since slice makes a shallow copy of it
	if (direction === 'left') {
		var sliceLeft = deckCopy.slice(0, index); 
		var remainderLeft = deckCopy.slice(index); 
		var newArr = [];
		newArr = newArr.concat(remainderLeft, sliceLeft);
		return newArr;
	} else { 	// if direction === 'right'
		var sliceRight = deckCopy.slice(-index);
		var remainderRight = deckCopy.slice(0, -index); 
		var newArr2 = [];
		newArr2 = newArr2.concat(sliceRight, remainderRight);
		return newArr2; 
	}
	
	
};
console.log(deckShift(4, 'left')); 
// [ 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5 ]

console.log(deckShift(5, 'left')); 
// [ 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6 ]

console.log(deckShift(1, 'right')); 
// [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ]

console.log(deckShift(2, 'right')); 
// [ 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q' ]






