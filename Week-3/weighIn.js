/*
	Weigh In
	
	Create a function that iterates over the "Wrestlers" multidimensional array and returns a flat array of objects containing the names and weights of all wrestlers > 90kg
*/

// if you see nested if statements, one after the other, combine them!!! Save lines 

// typeof is essential for this function to run!

// loop over parent array first
// loop over array again to access child arrays to check if weight is > 90kg (use slice method) 
// make new object and push name + weight into new object 

var wrestlers = [
	['Stone Cold Steve Austin', {specialMove : 'Stun Gun'}, '92kg'],
	['John Cena', '82kg'],
	['The Rock', {retired : true}, '100kg'],
	['CM Punk', '75kg']
]; 

function weighIn() {
var newArr = []; 
	// loop over parent array 
	for(var i = 0; i < wrestlers.length; i++) {
		// loop over child array in parent array to access length. check if input is string 
		for(var j = 0; j < wrestlers[i].length; j++) {
			if(typeof wrestlers[i][j] === 'string' && wrestlers[i][j].slice(-2) === 'kg' && Number(wrestlers[i][j].slice(0, wrestlers[i][j].length - 2)) > 90) {
				var obj = {}; 
				var name = wrestlers[i][0];
				var weight = wrestlers[i][j]; 
				obj[name] = weight;
				newArr.push(obj); 
				
			}
			
		
		}
	}

	return newArr; 
}
weighIn(); 
