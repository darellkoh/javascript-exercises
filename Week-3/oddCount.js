/*
	Odd Count
	
	Create a function that takes a number as input. The function should log all the odd numbers between 0 and the input (positive or negative)
	
	You may not use and control flow within the body of any loops
*/

// Count Up 

function isOdd(n) {
	return n % 2 !== 0; 
}

function oddCount(n) { 
	if(n > 0 ) {
		for(var i = 1; i < n; i+= 2) {
			console.log(i);
		}
	} else if (n < 0) {
		// check if n is odd or even 
		if(isOdd(n)) {
			q = n; 
		for(var j = n; j < 0; j += 2) {
			console.log(j);
		}
	} else {
		for(var k = n + 1; k < 0; k += 2) {
		console.log(k);
		
		}
	}
	} else {
		console.log(0); 
	}
}
oddCount(10); // 1 3 5 7 9 


// Count Down 

function isOdd(n) {
	return n % 2 !== 0;
}

function oddCount(n) {
	if(n > 0) {
		for(var i = 1; i < n; i += 2) {
			console.log(i);
		}	
	} else if (n < 0) {
		//check if n is odd
		var q;
		if(isOdd(n)) {
			q = n;
		} else {
			q = n +1
		}
		for(var k = q; k < 0; k += 2) {
			console.log(k);
		}
	} else {
		console.log(0);
	}
}

oddCount(-10) // -9 -7 -5 -3 -1 




