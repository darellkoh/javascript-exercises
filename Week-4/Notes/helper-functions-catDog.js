// Helper functions - invoking functions in definition of another, make code more readable and reusable. 

function isOdd(n) {
	for(var i = n; i > 0; i--) { 
		if(i % 2 === 0) {
			console.log("Dog"); 
		} else {
			console.log("Cat"); 
		}
	}
}

function countCatDog (n) {
	if(n % 2 === 0) {
		return isOdd(n); 
	} else {
		return isOdd(n); 
	}
}
countCatDog(12); 

/*
Dog
Cat
Dog
Cat
Dog
Cat
Dog
Cat
Dog
Cat
Dog
Cat */
