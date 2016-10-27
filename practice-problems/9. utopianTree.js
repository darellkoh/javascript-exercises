// Utopian Tree

// The utopian tree goes through 2 cycles of growth every year: 1) The first growth cycle occurs during monsoon, where it doubles in height 2) The second growth cycle occurs during summer, where the height increases by 1 meter 

// A new utopian tree sapling is planted at the onset of monsoon, where its height is 1 meter. Find the height of the tree after N growth cycles.

// 1 is always the initial height. 
// 1st cycle = height * 2, height = 2; 2nd cycle = height + 1, height = 3; 3rd cycle = height * 2, height = 6. 


function getHeight (n) {
var height = 1; 
	for(var i = 1; i <= n; i++) { //starting at 1, we don't want to count the initial cycle 
	
		// if odd, height * 2 
		if(i % 2 === 1) { 
			height *= 2;  
		// if even, height increments by 1 
		} else {
			height++; 
		}
	}
	return height; 
}

console.log(getHeight(3)); // 6 
console.log(getHeight(4)); // 7
console.log(getHeight(5)); // 14 
