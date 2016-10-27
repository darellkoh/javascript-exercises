/*
	DEBUG HUNT
	
	Debug the functions and get the code to run perfectly. Use the error messages in the console on the right to guide your debugging
*/

var debugHunt = function() {
	var hello1 = function(step){
		console.log("Step 1");	
	};
	
	hello1("Step 1"); 

	var hello2 = function(msg) {
		console.log("Hello, " + msg);
	};
	
	hello2("Andy Warhol");
	
	var hello3 = function(a, b) {
		console.log(a + " " + b); 
	}; 
	
	hello3("Getting", "better");
	
	var hello4 = function(first, last) {
		console.log(first + " " + last);
	};
	
	hello4("So far,", "so good."); 
	
	var hello5 = function(num) {
		console.log("!!"); 
	}; 
	
	hello5(5); 
}; 

debugHunt(); 
// Step 1
// Hello, Andy Warhol
// Getting better
// So far, so good.
// !!
