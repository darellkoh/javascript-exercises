/*
	ZERO DARK THIRTY
	
	Create a function removeZero() that takes a number as input and returns that number with all the 0's removed. If only a 0 is passed in, removeZero() should return 30.
	
	ex)
		removeZero(1023002) ==> 1232
		removeZero(6006606.203) ==> 6666.23
		removeZero(0) ==> 30
*/


function removeZero(n) {
	// if 0 is entered, return 30 
	if (n === 0) { 
		return 30;
	// or else, return number entered with all 0's removed.
	} else { 
		// change number to string
		var numString = n.toString();
		// if i is not 0, add each iterative index to empty string 
		var zerosRemoved = ""; 
		for (var i = 0; i <= numString.length; i++) {
			if(numString.charAt(i) != "0") {  // "0" is passed as a string bc it is currently in string form.
				zerosRemoved += numString.charAt(i); 
			}
		}
	return Number(zerosRemoved); //change the string back to numbers using Numbers() function.
	}
} 

console.log(removeZero(1023002)); // 1232
console.log(removeZero(6006606.203)); // 6666.23
console.log(removeZero(0)); // 30
