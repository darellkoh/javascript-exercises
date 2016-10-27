// Create a function palindrome(str) that returns the string "true" if the parameter is a palindrome, otherwise, return the string "false". 

function palindrome(str) {
var finalStr = ""; 
var string = str.toLowerCase(); 

	for(var i = 0; i < string.length; i++) {
	var results1 = ""; 
	results1 = results1 + string[i]; 
	}
	for(var j = string.length-1; j >= 0; j--) {
	var results2 = ""; 
	results2 = results2 + string[j]; 
	//console.log(results2); 
	}
	
  	if(results1 === results2) { 
	  	return "true";
  	} else { 
		  return "false"; 
	}
}
