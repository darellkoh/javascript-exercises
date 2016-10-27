// Print Stars

// Function returns a string representing right triangle using "*"
// The argument "rows" represents the number of rows the triangle composed of stars will have,  

function rightTriangle (rows) {
// loop through every row 5,4,3,2,1 
// loop through again to get num of stars, which will correspond to the rows, use row number to get the numbers of stars needed  
var triangle = ""; 
	// loop through number of rows 
	for(var i = rows; i > 0; i--) {
		// loop to make print out number of stars 
		for(var j = 0; j < i; j++) {  
			triangle +=  "*"; 
			
		}
		// print out newline 
		triangle += "\n"; 

	}
	return triangle; 
}


console.log(rightTriangle(2)); 
// **
// *

console.log(rightTriangle(5)); 
// *****
// ****
// ***
// **
// *
