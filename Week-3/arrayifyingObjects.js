//Complete the function so that it takes an object of arrays and returns a 2-d array

var sampleObj = {
   	animals : ["dogs", "cats", "pigs"],
   	sopranos : ["Tony", "Carmella", "AJ", "Meadow"],
   	guitars : ["Stratocaster", "Telecaster", "Gibson Flying-V"],
   	empty : []
  }; 

function arrayifier() {
var arr = []; 
	for(var prop in sampleObj) {
		if(sampleObj.hasOwnProperty(prop)) {
				arr.push([prop, sampleObj[prop]]); 
			}
		}
	return arr;
}

arrayifier(sampleObj); 

// [ 
// [ 'animals', [ 'dogs', 'cats', 'pigs' ] ],
// [ 'sopranos', [ 'Tony', 'Carmella', 'AJ', 'Meadow' ] ],
// [ 'guitars', [ 'Stratocaster', 'Telecaster', 'Gibson Flying-V' ] ],
// [ 'empty', [] ] 
// ]



//Tests
/* Line below should log
   [
   	["animals" , ["dogs", "cats", "pigs"]],
   	["sopranos" , ["Tony", "Carmella", "AJ", "Meadow"]],
   	["guitars" , ["Stratocaster", "Telecaster", "Gibson Flying-V"]],
   	["empty" , []]
   ]
*/


