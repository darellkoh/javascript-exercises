/*
	PSEUDOKU GET ROW 
	
	Write a function that consumes a Pseudoku board and an integer n (1-9). The function should return the nth row of that Pseudoku board

	ex)
	
	
    var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                 [ 2,7,1,9,6,3,4,8,5 ],
                 [ 4,6,3,5,8,1,7,9,2 ],
                 [ 9,3,4,6,1,7,2,5,8 ],
                 [ 5,1,7,2,3,8,9,6,4 ],
                 [ 6,8,2,4,5,9,3,7,1 ],
                 [ 1,5,9,8,7,4,6,2,3 ],
                 [ 7,4,6,3,2,5,8,1,9 ],
                 [ 3,2,8,1,9,6,5,4,7 ]];
    
    getRow(puzzle, 3) --> [ 4, 6, 3, 5, 8, 1, 7, 9, 2 ] // n = index - 1
*/

// function should return the nth row 
// puzzle is inside one big array. loop over this big array
// once in big array, loop over individual child arrays, return array at index n 
 var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                 [ 2,7,1,9,6,3,4,8,5 ],
                 [ 4,6,3,5,8,1,7,9,2 ],
                 [ 9,3,4,6,1,7,2,5,8 ],
                 [ 5,1,7,2,3,8,9,6,4 ],
                 [ 6,8,2,4,5,9,3,7,1 ],
                 [ 1,5,9,8,7,4,6,2,3 ],
                 [ 7,4,6,3,2,5,8,1,9 ],
                 [ 3,2,8,1,9,6,5,4,7 ]];
                 
// My version 
function getRow(board, n) {
	for(var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length; j++) {
			if(j === n) return board[n - 1]; 
		}
	}
}

// Fullstack's version
function getRow(board, n) {
	return board[n - 1]; 
}

getRow(puzzle, 3); // [ 4, 6, 3, 5, 8, 1, 7, 9, 2 ]
