// Recursion Exercises from recur(recur) : https://roman01la.github.io/recursion-exercises/#exponent

// Exercise #3: Fibonacci Sequence 
// The first two numbers in the Fibonacci sequence are 0 and 1 and each subsequent number is the sum of the previous two. Produce the sequence recursively.


function fibonacci(n){
   if (n < 1) {
  	return [];
  
  } else if (n === 1) {
    	return [0];
    
  } else if (n === 2) {
	return [0, 1];
	
  } else {
    var prev = fibonacci(n-1);
    prev[n-1] = prev[n-2] + prev[n-3];
	 return prev;
  }
}

(fibonacci(5), [0, 1, 1, 2, 3]);
