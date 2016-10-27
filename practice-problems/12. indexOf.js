// INDEX OF 

// Find the "index" of a value in a string. The indexOf method will accept 2 arguments, string (the string to search) and seachQuery (the value to search). You may not use the string.prototype.indexOf or array.prototype.indexOf methods
// If searchQuery is found, return the index value of its location. If it is not found, return -1 
// If a value is present more than once, return the index of the first value 


function indexOf(str, searchQ) {
	for(var i = 0; i <= str.length - searchQ.length; i++) {
		for(var j = 0; j < searchQ.length; j++) {
			if(str[i + j] !== searchQ[j]) { 
				break; 
			}
			if(j === searchQ.length - 1) { 
				return i;  
			}
		}
	}
	return -1; 
}

console.log(indexOf('hea', 'e')); // 1
console.log(indexOf('helloWorld', 'World')); // 5
