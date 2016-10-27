/*
Find Missing Number in Array

	The function findMissing should take in an unsorted array and return an integer. The array will contain a range of integers starting at 1 and ending at an random value. A single value will be missing. Your function's job is to identify the missing integer and return it.


    findMissing([1,2,4,5,6,7,8,9])
    // -> 3 
    
    findMissing([4,6,3,2,5,1])
    // -> 7 
     findMissing([4,6,3,2,5])
    // -> 1

*/

// takes in an unsorted array, return an integer
// array takes in a range starting at 1, ending at a random value. 
// a single value will be missing
// identity missing integer and return it 

function sort(a, b) {
	return b - a; 
}

function findMissing(arr) {
var newArr = arr.sort(); 
//console.log(newArr);
	if(newArr[0] === 2) {
		return 1;
	} else {
		for(var i = 0; i < newArr.length; i++) {
			if(newArr[i + 1] !== newArr[i] + 1)
				return newArr[i] + 1;
		}
	}

}
console.log(findMissing([1,2,4,5,6,7,8,9])); // missing number is 3 
console.log(findMissing([4,6,3,2,5,1])); // missing number is 7 
console.log(findMissing([4,6,3,2,5]));  // edge case, missing number is 1



