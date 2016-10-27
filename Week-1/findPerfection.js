/*
	PERFECT NUMBERS
	
	A 'Perfect' number is a number whose sum of their divisors equals exactly that number. The divisors do not include the number itself
	
    ex) 
    	6 is perfect because 1 + 2 + 3 === 6
    	16 is not perfect because 1 + 2 + 4 + 8 === 15
    	
    An "Abundant" number is a number whose sum of their divisors (exluding itself) is greater than that number
    
    ex) 
    	20 is abundance because 1 + 2 + 4 + 5 + 10 === 22 and 22 > 20
    	
    A "Deficient" number is a number whose sum of their divisors (excluding itself) is less than that number
    
    ex)
    	16 is deficiant because 1 + 2 + 4 + 8 === 15 and 15 < 16
    	
    	
    Create a function findPerfect() that takes a number as input and returns "Perfect" if the number is perfect, "Abundance" if it is abundant and "Deficient" if it is deficient
    
    ex)
    	findPerfect(6) --> "Perfect"
    	findPerfect(20) --> "Abundant"
    	findPerfect(16) --> "Deficient"
*/


// Strategy: push individual digits of input number to an array using "for" loops. Then, use "for" loops to sum up digits and feed them to an "if else" statement.

// Create a function that takes a number as input 
// Find a way to get divisors of input number

function findPerfect(n) {  
var divisorsArr = []; 
	for (var i = 1; i < n; i++) {
		if (n % i === 0) {
		divisorsArr.push(i); 
		}
	}

// Find a way to sum up divisors of input number 
var divisorsTotal = 0; 
	for(var j = 0; j < divisorsArr.length; j++) {
		divisorsTotal += divisorsArr[j]; 
	}
		// Return "Perfect" if the sum of divisors equals input number
		if(divisorsTotal === n) {
			return "Perfect"; 
			
		// Return "Abundance" if sum of divisors > input number
		} else if(divisorsTotal > n) {
			return "Abundance"; 
			
		// Return "Deficient" if sum of divisors < input number
		} else if(divisorsTotal < n) {
			return "Deficient"; 
		}
	}
	

// Tests 
console.log(findPerfect(6)); // Perfect 
console.log(findPerfect(20)); // Abundance 
console.log(findPerfect(16)); // Deficient 


