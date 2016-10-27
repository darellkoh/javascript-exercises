// Create a function that accepts two arguments, an array and an integer value (steps). 
// Rotate the given array by a certain number of steps. 


// Version 1 - using array methods 
function rotate(arr, steps) {
	
	// write a small function that rotates once 
	function rotateOnce(arr) { 
	var endItem = arr.pop(); // removes one item from end of array 
	arr.unshift(endItem); // adds one item to front of array 
	//console.log(arr); 
	}
	
	for(var i = 0; i < steps; i++) {
		rotateOnce(arr); // call function 
	}
	return arr; 
}

// rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3];
rotate([3, 9, 1, 7, 4], 3); // [ 1, 7, 4, 3, 9 ]


// Version 2 - using .slice()
function rotate(arr, steps) {
	var first = arr.slice(0, arr.length - steps);
	var last = arr.slice(arr.length - steps); 
	return arr; 
}

// rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3];
rotate([3, 9, 1, 7, 4], 3); // [ 1, 7, 4, 3, 9 ]

