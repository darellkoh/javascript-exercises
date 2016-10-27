// Converting numbers to arrays. 

// Numbers are hard to iterate, so we have to convert them to either a string or an array.

function shorten(num, array) {
	var numArr = num.toString().split(""); // chained a split function to the array to split in for individual elements. 
	return numArr; 
}
shorten(5120390, [1, 2, 3, 4, 5]) // [ '5', '1', '2', '0', '3', '9', '0' ]
