/*
	Pattern Master
	
	create a function patternMaker() that takes two arguments: an integer n and a piece of data of any type. patternMaker() should return an array of the second argument, repeated n times
	
	ex)
		patternMaker(5, 'Boo') --> ['Boo', 'Boo', 'Boo', 'Boo', 'Boo']
		patternMaker(3, ['cat', 'dog']) --> [['cat', 'dog'], ['cat', 'dog'], ['cat', 'dog']]
*/

function patternMaker(n, item) {
	var myArray = [];
	for(var i = 0; i < n; i++) { 
	myArray.push(item);
	}
	return myArray; 
}
patternMaker(5, "Meow"); // [ 'Meow', 'Meow', 'Meow', 'Meow', 'Meow' ]
