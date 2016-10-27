/*
	Permutations Generator - with repeating characters 
	
	Create a function that takes a string as input and returns an array of all possible permutations of that string. 
	
	Note: Make sure you don't count identicle permutations twice
*/

// Function that takes a string input
// Returns array[keyword] of all possible permutations of that string 

// 'the' - original string
// create new empty array 
// ['t'] - store first letter of string in a an array 
// ['ht', 'th'] - loop over string, insert second character into the space between the first (and each subsequent character)
// ['eht', 'het', 'hte', 'eth', 'teh', 'the'] - continue looping over string, insert third (and subsequent character) into spaces between each character 
	
function permutations(str) {
	
	var prev = [str[0]]; 
	var now = []; 
	
	for (var i = 1; i < str.length; i++) {  // var i = 1 because we already isolated first character and stored it in prevLtr 
		for (var j = 0; j < prev.length; j++){
			// put str[i] into every space in prev[j] 
			for (var k = 0; k <= prev[j].length; k++) {
				now.push(prev[j].slice(0,k) + str[i] + prev[j].slice(k)); 
			}
		}
		prev = now; // reassign prev to now, create a new now array to loop
		now = []; 
	}
	var final = []; 
	
	// to identify repeating characters 
	for (var x = 0; x < prev.length; x++) {
		if(prev.indexOf(prev[x]) === x) { //JS always takes the character index that appears first 
			final.push(prev[x]); 
		}
	}
	return final; 
}
permutations('thnn'); 

/*
 [ 'nnht',
  'nhnt',
  'nhtn',
  'hnnt',
  'hntn',
  'htnn',
  'nnth',
  'ntnh',
  'nthn',
  'tnnh',
  'tnhn',
  'thnn' ]
  */
