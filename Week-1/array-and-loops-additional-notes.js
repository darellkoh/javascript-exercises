// Additional notes on arrays and "for" loops

// Values can be pushed to arrays and strings using empty arrays/strings stored into variables. 
// Totals of input numbers can be added up if you set a variable = 0 and loop values into it. 

function calculate(num) {
	var str = []; 
	// var str = ""; // strings 
	for (var i = 1; i < num; i++) {
		if (num % i === 0) {
			// str += "," + i; strings 
			str.push(i);  // this is for arrays 
		}
	}
	return str;
}
calculate(16); // [1, 2, 4, 8]

