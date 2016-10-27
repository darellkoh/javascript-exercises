/*
	PSEUDOKU CHECK BOARD
	
	Write a function that consumes a Pseudoku board and returns a boolean representing whether the board passes the rules of  Pseudoku

	ex)
	
	
    var validPuzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

	var invalidPuzzle = [[ 8,4,5,7,4,4,1,3,6 ],
                  [ 2,7,3,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,4 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,6,2,4,5,9,3,7,1 ],
                  [ 4,5,9,8,9,4,6,2,3 ],
                  [ 7,4,6,3,2,1,8,1,9 ],
                  [ 3,2,4,1,9,6,5,4,7 ]];
                  
     
    
    checkBoard(validPuzzle) --> true
    checkBoard(invalidPuzzle) --> false
*/
   var validPuzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

	var invalidPuzzle = [[ 8,4,5,7,4,4,1,3,6 ],
                  [ 2,7,3,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,4 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,6,2,4,5,9,3,7,1 ],
                  [ 4,5,9,8,9,4,6,2,3 ],
                  [ 7,4,6,3,2,1,8,1,9 ],
                  [ 3,2,4,1,9,6,5,4,7 ]];

var theGame = { 
	getRow: function (board, n) {
		return board[n-1]; 
	}, 

	getCol: function (board, n) {
		var returnArr = []; 
		for(var i = 0; i < 9; i++) {
			returnArr.push(board[i][n - 1]); 
		}
		return returnArr; 
	}, 
	checkNum: function(arr) { 
		for(var i = 1; i <= 9; i++) {
			if(arr.indexOf(i) === -1) {
				return false;
			}
		}
		return true; 
	}, 

    getGrid: function (board, x, y) {
		var grid = [];  // need a way to create grid segments for each section of board 
		for(var i = x; i < x + 3; i++) {  // horizontal axis 
			var row = []; 
			for(var j = y; j < y + 3; j++) { // vertical axis
				row.push(board[i][j]); 
				}
				grid.push(row);
			}
			return grid; 
		},  
		
	getGrids: function (board) {
		var gridsArr = []; 
		for(var x = 0; x < 9; x += 3) {
			for(var y = 0; y < 9; y += 3) {
				gridsArr.push(this.getGrid(board, x, y)); 
			}
		}
		return gridsArr; 
	}, 
       
    checkGrid: function (grid) { 
    	var flatGrid = []; 
    	// push rows and columns
    	for(var i = 0; i < 3; i++) {
    		for (var j = 0; j < 3; j++) {
    			flatGrid.push(grid[i][j]); 
    		}
    	}
    	return this.checkNum(flatGrid);
    }, 
 	
	checkBoard: function (board) { 
		var toCheck = []; 
		for(var i = 1; i <= 9; i++) {
			toCheck.push(this.getRow(board, i)); 
			toCheck.push(this.getCol(board, i)); 
		}
		// check each row and column
		for(var j = 0; j < toCheck.length; j++) {
			if(!this.checkNum(toCheck[j])) {
				return false; 
			}
		}
		// push grids 
		var grids = this.getGrids(board);
		// check grids 
		for(var k = 0; k < grids.length; k++) {
			if(!this.checkGrid(grids[k])) {
				return false; 
			}
		}
		// return true if all tests pass 
		return true; 
	}
}; 

theGame.checkBoard(validPuzzle); // true
theGame.checkBoard(invalidPuzzle); // false 

