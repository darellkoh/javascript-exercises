/*
	SHORT STACK
	
	create a function shorten() that takes a number and an array of single-digit integers. shorten() should return the input number, with every digit from the array removed
	
	ex)
		shorten(1023, [1,2]) --> 03 
		shorten(1245267194821, [2,3,4]) --> 15671981
*/

function checkNum(numStr) {
	var myNum = Number(numStr);
	console.log(arr)
	if(arr.indexOf(myNum) != -1) {
		return true;
	}
}

function shorten(num, arr) {
	var numArray = num.toString().split(""); // first, convert number to array.
	// Use filter function to filter numArr by elements in arr. 
	// Passed a callback function, an anonymous function passed in as an argument to another function. 
	// This function is what we call on for each element of numArr. 
	// If function returns true, we will add this to a new array. 
	var newArray = numArray.filter(function(numStr) {
		var myNum = Number(numStr); // Convert it back to a number.
		return arr.indexOf(myNum) === -1; // -1 indicates a value that is not in the array. 
	});
	return Number(newArray.join('')); // Use join method to join all elements in the array together. 
}

shorten(13023, [1,2]); //303 
