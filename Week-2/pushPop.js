/*
	PUSH POP
	
	Write your own versions of Push and Pop
	
	Push takes two arguments, an array, and a value to to that array. The function should return the array modified to include the new value.

    push([8,2,3,4], 5)
    // -> [8,2,3,4,5] 
    
    Pop is a function that manipulates an array. You can think of it like the opposite of push. It takes the last thing off the array and returns it

    var arr = [1,2,3,4];
    pop(arr)
    // -> 4

	While it returns the last thing in the array, it also removes it from the array. If you inspect `arr` after calling pop, it will be `[1,2,3]`.
*/


// Push method substitution   

// turn input array into string
// create new empty string, concat value to string
// use .split method to split them all 

// 1. Using arr.concat method 
	function push(arr, val) {
	var newArr = arr.concat(val); 
	return newArr; 
}

push([8,2,3,4], 5); // [ 8, 2, 3, 4, 5 ]

// 2. Using array bracket assignment 
function push(arr, val) { 
	arr[(arr.length-1) + 1] = val; 
	return arr; 
} 

push([8,2,3,4], 5); // [ 8, 2, 3, 4, 5 ]


// Pop method substitution 

// Removes last item from arr
// Returns last item from arr 

// 1. Using arr.slice method 
function pop(arr) {
	var newArr = arr.slice(arr.length-1, arr.length);  
	return newArr;
}

pop([1,2,3,4]); // [4]

// 2. Using arr.splice method 
function pop(arr) {
	var newArr = arr.splice(arr.length-1, 1);  
	return newArr;
}

pop([1,2,3,4]); // [4]



