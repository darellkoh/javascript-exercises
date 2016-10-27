/*
	PSEUDOKU GET 3x3 Grids
	
	Write a function that consumes a Pseudoku board and returns an array of each of the board's 9 3x3 grids, each represented by nested arrays.
	
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

     
    
    getGrids(puzzle) -->
    [	
    	[
    		[8,9,5],
    		[2,7,1],
    		[4,6,3]
    	],
    	[
    		[7,4,2],
    		[9,6,3],
    		[5,8,1]
    	],
    	[
    		[1,3,6],
    		[4,8,5],
    		[7,9,2]
    	],
    	[
    		[9,3,4],
    		[5,1,7],
    		[6,8,2]
    	],
    	[
    		[6,1,7],
    		[2,3,8],
    		[4,5,8]
    	],
    	[
    		[2,5,8],
    		[9,6,4],
    		[3,7,1]
    	],
    	[
    		[1,5,9],
    		[7,4,6],
    		[3,2,8]
    	],
    	[
    		[8,7,4],
    		[2,3,5],
    		[1,9,6]
    	],
    	[
    		[6,2,3],
    		[8,1,9],
    		[5,4,7]
    	]
    ]
*/
// one loop to go over big array 
// one loop to go either horizontally or vertically 

var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

// Write helper function to print 3x3 grid out 
function makeGrid(board, x, y) {
	var grid = [];  // need a way to create grid segments for each section of board 
	for(var i = x; i < x + 3; i++) {  // horizontal axis 
		var row = []; 
		for(var j = y; j < y + 3; j++) { // vertical axis
			row.push(board[i][j]); 
			// console.log(board[i][j]);
		}
		grid.push(row);
	}
	return grid; 
}   
makeGrid(puzzle, 0, 3); 
// [ [ 7, 4, 2 ], [ 9, 6, 3 ], [ 5, 8, 1 ] ]
makeGrid(puzzle, 0, 0); 
// [ [ 8, 9, 5 ], [ 2, 7, 1 ], [ 4, 6, 3 ] ]


function getGrids(board) {
	var gridsArr = []; 
	for(var x = 0; x < 9; x += 3) {
		for(var y = 0; y < 9; y += 3) {
			gridsArr.push(makeGrid(board, x, y)); 
		}
	}
	return gridsArr; 
} 
getGrids(puzzle); 

// [ [ [ 8, 9, 5 ], [ 2, 7, 1 ], [ 4, 6, 3 ] ],
//   [ [ 7, 4, 2 ], [ 9, 6, 3 ], [ 5, 8, 1 ] ],
//   [ [ 1, 3, 6 ], [ 4, 8, 5 ], [ 7, 9, 2 ] ],
//   [ [ 9, 3, 4 ], [ 5, 1, 7 ], [ 6, 8, 2 ] ],
//   [ [ 6, 1, 7 ], [ 2, 3, 8 ], [ 4, 5, 9 ] ],
//   [ [ 2, 5, 8 ], [ 9, 6, 4 ], [ 3, 7, 1 ] ],
//   [ [ 1, 5, 9 ], [ 7, 4, 6 ], [ 3, 2, 8 ] ],
//   [ [ 8, 7, 4 ], [ 3, 2, 5 ], [ 1, 9, 6 ] ],
//   [ [ 6, 2, 3 ], [ 8, 1, 9 ], [ 5, 4, 7 ] ] ]
