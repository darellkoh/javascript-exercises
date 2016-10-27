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

// 2. Using a Helper Function

function findNoteOnScale(allNotes, currentNote) {
	for(var j = 0; j < allNotes.length; j++) {
		if(allNotes[j] === currentNote) {
			return j; 
		}
	}
}
function transpose(arr, str) {
	var allNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; 
	var newArr = []; 
	var num = Number(str.charAt(0)); // 1 in number form 


	for(var i = 0; i < arr.length; i++) { // array's index 
		var currentNote = arr[i]; 
		var noteIndex = findNoteOnScale(allNotes, currentNote); 
		// generate key of transposed note 
		var newKey = noteIndex + num;
		
		if(newKey > 12) {
			newKey = newKey % 12; // use modulo to get remainder so we can loop back to index[0] if index > 12
		}
		newArr.push(allNotes[newKey]);
	}
	return newArr;
}


// Tests 
console.log(transpose(['E', 'F'], '1 step'));  // ['F', 'F#']
console.log(transpose(['G'], '5 steps'));  // ['C']
