
//Bool School

//Look at all the truthy/falsey values nested in the if statement. We want the truthCheck() function to evalutate to true. For any values that need to change, put a ! in front of them to flip their Boolean value

// eg !true === false  and !false === true


var truthCheck = function() {  // want this to evaluate to true 
	
	if(!(1 && true && '' && false && 0 && -0 && "" && NaN && [] && "false" && null && undefined && {} && console.log)) {
		return true;
	} else {
		return false; 
	}
}

console.log(truthCheck() === true); // true LOL 

//Part 2
//Create your own Boolean mish-mash inside the if statement below. The most complicated function to return true wins!

var myTruth = function() {
	if(!false && !!true && !'' && !((5 > 2 * 8 / 2) || (2 < Math.random())) && !NaN && {fruit1: "apple", fruit2: "orange", fruitc: "banana"}) {  
	 	return true; 
	} else { 
		return false; 
	}
}

console.log(myTruth()); //true 
