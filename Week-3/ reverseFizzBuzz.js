//Complete Reverse FizzBuzz()
//The function should accept a number n, and console.log() all the numbers between 1-n. Any numbers divisible by 3 should say "Fizz", numbers divisible  by 5 should say "Buzz" and numbers divisble by 15 should say 'Fizzbuzz'

//eg FizzBuzz(16) => 16, FIZZBUZZ, 14, 13, FIZZ, 11, BUZZ, FIZZ, 8, 7, FIZZ, BUZZ, 4, FIZZ, 2, 1 

var FizzBuzz = function(n) {
for (var i = n; i >= 1; i--) { 
	//console.log(i); 
	if(i % 3 === 0 && i % 5 === 0) { // (if i % 15 === 0); 
		console.log("FizzBuzz"); 
	} else if (i % 5 === 0) {
		console.log("Buzz"); 
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
		}
	}
};

//tests
FizzBuzz(100); 

/*
Buzz
Fizz
98
97
Fizz
Buzz
94
Fizz
92
91
FizzBuzz
89
88
Fizz
86
Buzz
Fizz
83
82
Fizz
Buzz
79
Fizz
77
76
FizzBuzz
74
73
Fizz
71
Buzz
Fizz
68
67
Fizz
Buzz
64
Fizz
62
61
FizzBuzz
59
58
Fizz
56
Buzz
Fizz
53
52
Fizz
Buzz
49
Fizz
47
46
FizzBuzz
44
43
Fizz
41
Buzz
Fizz
38
37
Fizz
Buzz
34
Fizz
32
31
FizzBuzz
29
28
Fizz
26
Buzz
Fizz
23
22
Fizz
Buzz
19
Fizz
17
16
FizzBuzz
14
13
Fizz
11
Buzz
Fizz
8
7
Fizz
Buzz
4
Fizz
2
1 
*/
