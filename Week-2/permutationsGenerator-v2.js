// Permutations Generator 
// Create a function that takes a string as input and returns an array of all possible permutations of that string 


function permutations(str) {
	// initialize 2 storage arrays
	var prev = [str[0]]; // stored first letter (initial index) in prev 
	// console.log(prev);  // t 
	var now = []; 
	
	// first loop to get second letter (first index), skip first letter as we already stored it in prev 
	for(var i = 1; i < str.length; i++) {
		// loop through prev so we can insert it between spaces for second letter 
		for(var j = 0; j < prev.length; j++) {
			for(var k = 0; k <= prev[j].length; k++) {
				now.push(prev[j].slice(0, k) + str[i] + prev[j].slice(k)); 
			}
		}
		prev = now;
		now = []; 
	}
	// use filter method to remove doubles
	// val is the value at index in the prev array
	// filter method always has to return something. if what you return is truthy, it keeps that element in the array. If it is falsey, it filters it out 
	var toReturn = prev.filter(function(val, index) {
		return prev.indexOf(val) === index; // returns index of the first recurring value in prev array 
	}); 
	return toReturn;
	
}

permutations('then');
// [ 'neht',
//   'enht',
//   'ehnt',
//   'ehtn',
//   'nhet',
//   'hnet',
//   'hent',
//   'hetn',
//   'nhte',
//   'hnte',
//   'htne',
//   'hten',
//   'neth',
//   'enth',
//   'etnh',
//   'ethn',
//   'nteh',
//   'tneh',
//   'tenh',
//   'tehn',
//   'nthe',
//   'tnhe',
//   'thne',
//   'then' ]

permutations('thnn'); 
// [ 'nnht',
//   'nhnt',
//   'nhtn', 
//   'hnnt',
//   'hntn',
//   'htnn',
//   'nnth',
//   'ntnh',
//   'nthn',
//   'tnnh',
//   'tnhn',
//   'thnn' ]

// ['t']  -- prev 
// ['ht', 'th']  --  new array (now), which will be assigned to prev 
// ['eht', 'het', 'hte', 'eth', 'teh', 'the']  -- new array (now)
