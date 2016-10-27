/*
	Advanced Counting
	
	We're going to rewrite our countdown function, but this time let's support negative numbers. If you pass the function a positive number, it counts down to 1. If you pass the function a negative number, it should count up to -1. You can assume the function will never be passed 0.
	 
	Please complete this problem in 2 ways.
	1. With a while loop
	2. With a for loop
	
	    count(4)
	    // 1
	    // 2
	    // 3
	    // 4
	    
	    count(-4)
	    // -4
	    // -3
	    // -2
	    // -1
	
*/

// Function that takes in a positive and negative number 
	// If positive, count down to 1 (loop, decrement)
	// If negative, count up to -1 (loop, increment)
	
// With a "for" loop 
function count(n) {
	if (n > 0) {
		for(var i = n; i > 0; i--) {
			console.log(i); 
		}
	} else {
		for(var j = n; j < 0; j++) {
  		console.log(j); 
  	}
}

count(4); 
// 4
// 3
// 2
// 1

count(-4)); 
// -4
// -3
// -2
// -1


// With a "while" loop
function count(n) {
	var i = n;
	while (i !== 0) {
		console.log(i);
		if (n > 0) {
			i--;
		} else if (n < 0) {
			i++; 
		}
  	}
}

console.log(count(4)); 
// 4
// 3
// 2
// 1
console.log(count(-4)); 
// -4
// -3
// -2
// -1





