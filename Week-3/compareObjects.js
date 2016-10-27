/*
Compare Objects
	Consider the following example.
	
	    { name: 'zeke' } === { name: 'zeke' }
	
	What do you think the output will be? You might assume `true`. It is, however, false. This isn't a mistake, its intentional. Every object is unique from every other object. The usefulness of this will become clear over time. But, it does make it difficult to know if objects contain the same data.
	
	Right now you're going to write a function that determines if two objects contain the same data.
	
	    compareObjects({ name: 'giselle' }, { name: 'zeke' })
	    // -> false
	
	    compareObjects({ name: 'nick' }, { name: 'nick' })
	    // -> true
	
	In order for the function to return true, ALL the properties that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties in object 2 must exist and be equal to those in object 1.
*/

// Version 1: the unoptimzed way 

function compareObjects(obj1, obj2) {
	for(var prop in obj1) {
		if(!obj2.hasOwnProperty(prop) || obj1[prop] !== obj2[prop]) { 
			return false;
		}
	}
	for(var prop2 in obj2) {
		if(!obj1.hasOwnProperty(prop2) || obj1[prop2] !== obj2[prop2]) {
			return false; 
		}
	}
	return true; 
}
console.log(compareObjects({ name: 'giselle' }, { name: 'nick'})); // false 
console.log(compareObjects({ name: 'giselle' }, { name: 'giselle'})); // true 
console.log(compareObjects({ name: 'giselle' }, { name: 'giselle', age: 25})); // false;  


// Version 2: using a helper function

function compare(obj1, obj2) {
	for(var prop in obj1) {
		if(!obj1.hasOwnProperty(prop) || obj1[prop] !== obj2[prop]) { 
		return false; 
		}
	}
	return true; 
}

function compareObjects(obj1, obj2) {
	return compare(obj1, obj2) && compare(obj2, obj1); 
}

console.log(compareObjects({ name: 'giselle' }, { name: 'nick'})); // false 
console.log(compareObjects({ name: 'giselle' }, { name: 'giselle'})); // true 
console.log(compareObjects({ name: 'giselle' }, { name: 'giselle', age: 25})); // false;  
