/*
   Complete the two functions below. Both take 3 Numbers. getMedian() will return the Median (middle value) of the 3 numbers, while getMean will return the average. If not all the arguments are numbers, the function should return an error message, prompting the user to try again with proper inputs.
*/

var checkIfNumber = function (a, b, c, func) {
	if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
		return func(a, b, c);
	} else {
		return "Give me something good"
	} 
	
}

var getMedian = function(a, b, c) {
	return checkIfNumber(a, b, c, function() {
		var nums = [a, b, c];
		
		nums.sort(function(a, b){
			return a > b;
		});
		return nums[1];
	})
}

var getMean = function(a, b, c) {
	if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
		return (a + b + c) / 3
	} else {
		return "Give me something good"
	}
}


//Tests - should all return true
console.log(getMean(1,2,3) === getMedian(1,2,3))

console.log(getMean(102,5,40) === getMedian(49,50,3));
 
console.log(getMedian(0,-10, 10) === getMedian(0, -10, 10));
