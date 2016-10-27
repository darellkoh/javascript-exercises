// Function Hoisting - Javascript will take variables that are declared and move them to the top of the code to where it is declared.

function sayHello() {
	var x;  // hoisting is akin to declaring a var here but not having any value 
	console.log(x);
	x = 'Hello'; 
	
	
	console.log(x);
	x = 'Hello'; 
}
sayHello(); 

// Some people prefer function expressions becsause you see exactly where the function is declared. 
// With function declarations, the function will get hoisted to the top, and we might not want that in long programs. 
