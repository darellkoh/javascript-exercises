// Test Divisors of 3 

// You will be given 2 parameters: a low number, and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

function test_divisors(low, high) {
	for(var i = low; i <= high; i++) { 
		console.log(i); 
			if(i % 3 === 0) {
				console.log("div3");
		}
	} 
}
test_divisors(2, 10); 

// 2
// 3
// div3
// 4
// 5
// 6
// div3
// 7
// 8
// 9
// div3
// 10
