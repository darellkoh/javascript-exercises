/*
   typePipes will take an item and a data type string and will return a Boolean whether the type of the string matches the data
   
   When you are done with the function, write your own tests to make sure it works. Try and cover as many data structures as possible. Keep in mind, the types of some familiar data structures may not be what you think they are!
*/

// of typeof item === typeString, return true
// else, return false 

var typePipes = function(item, typeString) {
	if(!(typeof item === typeString)) { 
		return true; 
	} else {
		return false; 
	}
}; 





//Tests should all log true
console.log(typePipes(123, 'Number') === true); // true

console.log(typePipes("Hello World", 'String') === true); // true

console.log(typePipes(123, 'String') === false); // false

console.log(typePipes({}, 'Object') === true); // true

console.log(typePipes([], 'Array') === false); // false
// Why is this?  
// Empty arrays are curious things: they actually evaluate to truthy but, when compared against a boolean, behave like a falsey.

console.log(typePipes(false, 'Boolean') === true);  // true

console.log(typePipes(console.log, 'Function') === true); // true

console.log(typePipes(undefined , 'Undefined') === true); // true
