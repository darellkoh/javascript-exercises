// Count down from integer n to 0 in intervals of 5 using recursion 

function num(n, arr) {
	arr = arr || [];
	arr.push(n);
	if (n === 0) {
		return arr;	
	} else {
		return num (n-5, arr);
	}
}

// num(20); // [ 20, 15, 10, 5, 0 ]

// Count up from 0 to n in intervals of 5 

function num(n, count, arr) {
	arr = arr || [];
	count = count || 0;
	arr.push(count);
	if (count === n) {
		return arr;	
	} else {
		return num(n, count + 5, arr);
	}
}
num(20); // [ 0, 5, 10, 15, 20 ]
