// Write a program to find the total number of duplicate elements in an array. 

// Note: it is not the total amount of occurences 
// The total returned from [1, 2, 2, 2, 3, 4, 3]) should be 2 (for the duplicate values of 2 and 3), not 5. 

function countDuplicates (arr) {
var duplicates = []; 
var i; 
var j; 
	for(i = 0, j = arr.length; i < j; i++) { 
		if(duplicates.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i + 1) !== -1) {
			duplicates.push(arr[i]);
		}
		
	}
	return duplicates.length;
}


console.log(countDuplicates([1, 2, 2, 2, 3, 4, 3])); // 2
console.log(countDuplicates([1, 2, 1, 2, 3, 4, 3, 5, 5, 5])); // 5
