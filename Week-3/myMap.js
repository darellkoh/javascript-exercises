/*
	MAP IT
	
	JavaScript is a cool language for so many reasons. One reason is how it treats functions as "First Class" citizens. This means you can pass functions as arguments to other functions!
	
	Check out how myFunc is defined and invoked below with console.log 
*/
/*	function myFunc(a, b) {
		return a(b)
	}
	
	myFunc(console.log, 'Hello world')
	
*/
/*	
	Your job is to create two functions: myMap() and myFlatten()
	
	The function myMap() that takes 2 arguments as input: an array and a function. myMap() should return a new array of all the items in the input array with the function argument applied to each of them
	
	ex
		var addTwo = function(b) {
			return 2 + b; 
		}
		
		myMap([1,2,3], addTwo) ===> [3,4,5]
		
		var addTwoToo = function(b) {
			return b.toString() + "two";
		}
		
		myMap([1,2,3], addTwoToo) ==> [1two, 2two, 3two]
*/

// myMap(); 
// Need to return a new array of all items in original array with function applied to it 


var addTwo = function(b) {
	return 2 + b; 
}; 

addTwo();  

// Using normal loops 
function myMap(arr, fn) { 
var emptyArr = [];
	// check if inout is an array or not
	if (Array.isArray(arr) === false) {
		return "This is not an array"; 
	} else { 
		// loop over array
		for(var i = 0; i < arr.length; i++) {
		// call addTwo on arr[i] 
		var newArr = fn(arr[i]); 
		emptyArr.push(newArr); 
		}
	return emptyArr;
	}
}
console.log(myMap([1, 2, 3], addTwo)); // [ 3, 4, 5 ]
console.log(myMap("hello", addTwo)); // This is not an array


// Using Recursion
function myMap(arr, fn) { 
var newArr = [];
	// check if input is an array or not
	for(var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			newArr.push(myMap(arr[i], fn)); 
		} else if (typeof arr[i] === 'number') {
			newArr.push(fn(arr[i])); 
		} else {
			return "This is not a number or an array."; 
		}
	}
	return newArr; 
}

console.log(myMap([1,2,3,[4,5,[6]]], addTwo)); 
// [ 3, 4, 5, [ 6, 7, [ 8 ] ] ]
console.log(myMap([5,7,9,[1,4,[3]]], addTwo));
// [ 7, 9, 11, [ 3, 6, [ 5 ] ] ]
console.log(myMap("hello", addTwo)); 
// This is not a number or an array.



	
