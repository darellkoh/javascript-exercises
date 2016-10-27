/*
	TRANSPOSE MUSIC
	
	In music a keyboard has the following notes
		[A, A#, B, C, C#, D, D#, E, F, F#, G, G#]
		
		A # is "sharp" notation. A# or A sharp, is in between A and B
		
		
	Create a function transpose() that takes an array of notes and a string with the number of steps. The function should return an array with all the notes in the array transposed up that many steps
	
	ex)
		transpose(['E', 'F'], '1 step') -> ['F', 'F#']
		transpose(['G'], '5 steps') -> ['C']
*/

// Function that takes an array of notes and a string w. number of steps 
	// need to extract number from string
	// use for loop to loop through array 
	
	// Return array with all the notes in the array, transposed up w. no. of steps specified in step. 

// 1. Using Nested "For" Loops	
function transpose(arr, str) {
var allNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; 
var newArr = []; 

var num = Number(str.charAt(0)); // 1 in number form 


	for(var i = 0; i < arr.length; i++) { // array's index 
	// transpose up numFromStr
		var currentNote = arr[i]; 
			for (var j = 0; j < allNotes.length; j++) {
			//var noteIndex = allNotes.indexOf(arr[i]); 
				if(allNotes[j] === currentNote) {
				var noteIndex = j; 
				var newKey = noteIndex + num;
				
				if(newKey > 12) {
					newKey = newKey % 12; // use modulo to get remainder so we can loop back to index[0] if index > 12
				}
				newArr.push(allNotes[newKey]);
			}
		}
	}
	return newArr;
}


// Tests 
console.log(transpose(['E', 'F'], '1 step'));  // ['F', 'F#']
console.log(transpose(['G'], '5 steps'));  // ['C']
