 /*
	MAP IT
	
	JavaScript is a cool language for so many reasons. One reason is how it treats functions as "First Class" citizens. This means you can pass functions as arguments to other functions!

	
	Your job is to create two functions: myFlatten()

		The function myFlatten() that takes 1 multidimensional array as input. myFlatten() should return a flat (single-dimensional) array containing all the elements of the input array
		
		ex
		    var myArr = [[1,2],['a','b','c'], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]
			myFlatten(myArr)  ==> [1,2,'a','b','c',{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]
			
*/ 

// myFlatten(); 
// Takes 1 multidimensional array as input, returns a 1D array containing all elements of the input array 
// Loop over array once
// Loop over it again to access arr[i][j]
// Create new empty array
// Push arr[i] to new empty arr 

// Method 1: Nested loops 
function myFlatten(arr) {
var newArr = []; 
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr[i].length; j++) {
			//console.log(arr[i]); 
			newArr.push(arr[i][j]); 
			//console.log(newArr); 
		}
		
	}
	return newArr; 
}
myFlatten([[1,2],['a','b','c'], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]); 
[ 1, 2, 'a', 'b', 'c', { name: 'Sally Bowls' }, { name: 'Alex Hamilton' } ]

// // Method 2: Concatenating Arrays 
function myFlatten(arr) {
var newArr = []; 
	for(var i = 0; i < arr.length; i++) {
	newArr = newArr.concat(arr[i]); 
	
	}
	return newArr; 
}

myFlatten([[1,2],['a','b','c'], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]);
// [ 1, 2, 'a', 'b', 'c', { name: 'Sally Bowls' }, { name: 'Alex Hamilton' } ]

/*
			
		These can both be done iteratively (using a loop). But, what if our input had many nested elements?? 
		
		ex 	myMap([1,2,3,[4,5,[6]]], addTwo) ===> ???
		
		Our iterative functions can't do this!! But we can do it using recursion!
			
		myRecursiveMap([1,2,3,[4,5,[6]]], addTwo) ===> [3, 4, 5,[6,7,[8]]]
		
		Similarly, myFlatten can only take a single dimensional array. If we want to also flatten out the nested elements, we will need to use recursion.
		
		ex var myArr = [[1,2,['z',['8']]],['a','b','c',['hello']], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]
		myFlatten(myArr)  ==> [1,2,'z','8',a','b','c','hello',{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]
*/

// myFlatten() using Recursion 
function myFlatten(arr) {
var newArr = []; 
	for(var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) { 
			newArr = newArr.concat(myFlatten(arr[i]));
		} else { 
			newArr = newArr.concat(arr[i]);
		} 
	}
	return newArr; 
}
console.log(myFlatten([[1,2,['z',['8']]],['a','b','c',['hello']], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]])); 

// [ 1, 2,'z','8','a','b','c','hello', { name: 'Sally Bowls'}, { name: 'Alex Hamilton' } ] 
  
console.log(myFlatten([1,2,3,[4,5,[6]]])); // [ 1, 2, 3, 4, 5, 6 ]




