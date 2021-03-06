//Complete FizzBuzz()
//The function should accept a number n, and console.log() all the numbers between 1-n. Any numbers divisible by 3 should say "Fizz", numbers divisible  by 5 should say "Buzz" and numbers divisble by 15 should say 'Fizzbuzz'

//eg FizzBuzz(16) => 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ,BUZZ, 11, FIZZ, 13, 14, FIZZBUZZ, 16 

// accept a number n 
var FizzBuzz = function(n) {
	for(var i = 0; i <= n; i++) {
		// Output "FizzBuzz" if divisible by 15. 
		if (i % 15 === 0) {
			console.log("FizzBuzz");
		// Output "Buzz" if divisible by 3. 
		} else if (i % 3 === 0) { 
			console.log("Buzz"); 
		// Output "Fizz" if divisible by 5. 
		} else if (i % 5 === 0) {
			console.log("Fizz"); 
		// Output number itself if neither of the above. 
		} else { 
			console.log(i); 
		}
	}
};


//tests
FizzBuzz(99); 

/*FizzBuzz
1
2
Buzz
4
Fizz
Buzz
7
8
Buzz
Fizz
11
Buzz
13
14
FizzBuzz
16
17
Buzz
19
Fizz
Buzz
22
23
Buzz
Fizz
26
Buzz
28
29
FizzBuzz
31
32
Buzz
34
Fizz
Buzz
37
38
Buzz
Fizz
41
Buzz
43
44
FizzBuzz
46
47
Buzz
49
Fizz
Buzz
52
53
Buzz
Fizz
56
Buzz
58
59
FizzBuzz
61
62
Buzz
64
Fizz
Buzz
67
68
Buzz
Fizz
71
Buzz
73
74
FizzBuzz
76
77
Buzz
79
Fizz
Buzz
82
83
Buzz
Fizz
86
Buzz
88
89
FizzBuzz
91
92
Buzz
94
Fizz
Buzz
97
98
Buzz
Fizz
*/
