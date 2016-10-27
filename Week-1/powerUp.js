/*
	Power Up!
	
	Create a function powerUp() that takes an integer as input. It should return a new number, created by summing each digit raised by a consecutive power
	
	ex)
		powerUp(761) --> 7^1 + 6^2 + 1^3  === 44
		powerUp(100) --> 1^1 + 0^2 + 0^3 === 1
*/


// function that takes integer as argument (num) 
function powerUp (num) { 
	
// convert integers to string, access each character with a method (charAt/bracket) using "for" loop. 
var numStr = num.toString(); 
var total = 0; 
	for (var i = 0; i < numStr.length; i++) {
		var newNumStr = numStr.charAt(i); 
		total += Math.pow(newNumStr, (i+1)); // exponent method in JS 
	}
	return total; // return new number (sum of each individual digit raised by a consecutive power)
}

powerUp(761); // 44
powerUp(100); // 1
