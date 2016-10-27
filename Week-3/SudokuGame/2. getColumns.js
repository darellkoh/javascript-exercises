/*
	PSEUDOKU GET COLUMN
	
	Write a function that consumes a Pseudoku board and an integer n (1-9). The function should return the nth column of that Pseudoku board

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
    
    getCol(puzzle, 3) --> [ 5,1,3,4,7,2,9,6,8]
*/

  var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                 [ 2,7,1,9,6,3,4,8,5 ],
                 [ 4,6,3,5,8,1,7,9,2 ],
                 [ 9,3,4,6,1,7,2,5,8 ],
                 [ 5,1,7,2,3,8,9,6,4 ],
                 [ 6,8,2,4,5,9,3,7,1 ],
                 [ 1,5,9,8,7,4,6,2,3 ],
                 [ 7,4,6,3,2,5,8,1,9 ],
                 [ 3,2,8,1,9,6,5,4,7 ]];
                 
                 
function getCol (board, n) {
var arr = []; 
	for(var i = 0; i < board.length; i++) {
			arr.push(board[i][n - 1]); 
	}
	return arr; 
}

getCol(puzzle, 3); // [ 5, 1, 3, 4, 7, 2, 9, 6, 8 ]
