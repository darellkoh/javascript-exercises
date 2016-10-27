/*
	ZERO DARK THIRTY
	
	Create a function removeZero() that takes a number as input and returns that number with all the 0's removed. If only a 0 is passed in, removeZero() should return 30.
	
	ex)
		removeZero(1023002) ==> 1232
		removeZero(6006606.203) ==> 6666.23
		removeZero(0) ==> 30
*/

// function takes a number as input 
function removeZero(n) {
	// converts it to string so we can access .length method.
	var num = n.toString(); 
	for(var i = 0; i < num.length; i++) {
		// console.log(num[i]); to verify that it works
		if(num === "0"){  // if 0 is passed in, return 30
			return 30; 
		} else if(num !== "0") {  // if num does not equal to 0 but has 0's in it, remove 0's and return num without 0's. 
			newString = num.split("0").join(""); 
			return newString; 
		} else {   // if num does not have any zeros, return num itself.
			var result = num; 
			return result; 
		}
	}
}

removeZero(901010201); // 91121
removeZero (999999); // 999999
removeZero(0); // 30
