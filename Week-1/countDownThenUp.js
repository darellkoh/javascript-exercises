/*
	UP & DOWN
	
	Create a function countUpThenDown() that takes a number n and logs all the numbers 0 to n and back to 0.
	
	eg)
		countUpThenDown(2) ==> 0 1 2 1 0
		countUpThenDown(11) ==> 0 1 2 3 4 5 6 7 8 9 10 11 10 9 8 7 6 5 4 3 2 1 0
*/

var countUpThenDown = function(n) {
	// count up from 0 to input 
	for(var i = 0; i <= n; i++){
		console.log(i); 
	}
	// count down from input to 0 
	for(var j = n - 1; j > -1; j--) {
		console.log(j); 
	}
}

countUpThenDown(10); 

