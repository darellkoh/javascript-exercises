/*
Count by m
Write a function that takes three arguments: n (number), m(number) and direction (string). The function should count to n by intervals of m. If the direction string is "Up", the function should count up to n, if the string is "Down", it should count down. You can assume that both n and m will be greater than 0. Do not print numbers greater than n.
 
Please complete the problem in 2 ways:
1. Using a for loop
2. Using while a loop
 
    count(10, 2, "Up")
    // 2
    // 4
    // 6
    // 8
    // 10

    count(11, 2, "Down")
    // 11
    // 9
    // 7
    // 5
    // 3
    // 1

*/

// Function that takes in 3 arguments, n (number), m(number), direction(string)
// Function counts to n by m intervals 
	// If string direction = "Up"
		// Function counts up to n
	// If string direction = "Down"
		// Function counts down to 1
		
// 1. For Loop

function count(n, m, direction) {
	if(direction === "Up") {
		for(var i = m; i <= n; i += m) {
			console.log(i); 
			// var arrVal = n[i] + m; 
			// count.push(arrVal); 
		}
	} else {
		for(var j = n; j >= 0; j -=m) {
			console.log(j); 
				// var arrVal2 = n[j] - m; 
				// count.push(arrVal2); 
			}
		}
}

// Tests 
count(10, 2, "Up");   
	  // 2
    // 4
    // 6
    // 8
    // 10
count(11, 2, "Down"); 
	  // 11
    // 9
    // 7
    // 5
    // 3
    // 1


// 2. While Loops

function count(n, m, direction) {
	if(direction === 'Up') {
		var i = m;
		while (i <= n) {
			console.log(i);
			i += m;
		}
	} else {
		var j = n;
		while (j >= 0) {
			console.log(j);
			j -= m;
		}		
	}
  
}

// Tests 
count(10, 2, "Up");
	  // 2
    // 4
    // 6
    // 8
    // 10
count(11, 2, "Down"); 
	  // 11
    // 9
    // 7
    // 5
    // 3
    // 1
