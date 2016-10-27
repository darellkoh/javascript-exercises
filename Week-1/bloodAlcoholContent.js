/*
	BLOOD ALCOHOL CALC
	
	An individual's BAC may be calculated as follows:
		BAC% = (A × 5.14 / W × r) - .015 × H 

		A: Total alcohol consumed, in ounces (oz)
		W: Body weight, in pounds (lbs)
		r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
		H: Time passed since drinking, in hours
		
		
	create a function getBAC(weight, gender, drinks, drinkType, hours) that takes the following:
			weight - a person's body weight, 
			gender - their gender as a string "M" or "F", 
			drinks - the number of drinks they've had
			drinkType - a string "beer" or "whiskey" representing the type of drinks
			hours - hours since last drink	
			
	Note: 
		Beers are 8oz and 4% alcohol by volume
		Whiskeys are 4oz and 32% alcohol by volume
*/

function getBAC(weight, gender, drinks, drinkType, hours) {
	// First, determine which calculations we would need to perform. 
	// Gender determines distribution ratio (r). 
	var distRatio; // Assign a null variable so it can contain different values. 
	if (gender === "F") {
		distRatio = 0.73;
	} else { 
		distRatio = 0.66; 
	}
	// Drink type detetermines total alcohol consumed (A). A = drinkType * hours * alcohol by volume.
	var totalAlcoholConsumed;
	if (drinkType === "beer") {
		totalAlcoholConsumed = 8 * 0.04 * drinks; 
	} else {
		totalAlcoholConsumed = 4 * 0.32 * drinks; 
	}
	// BAC% = (A × 5.14 / W × r) - .015 × H 
	var BAC = ((totalAlcoholConsumed * 5.14) / (weight * distRatio)) - (0.015 * hours); 
	
	return BAC; 
}
	

var x = getBAC(104, "F", 6, "beer", 3);
console.log("BAC of a 104-pound female who drank a six-pack of beer 3 hours ago is", x); 
// BAC of a 104-pound female who drank a six-pack of beer 3 hours ago is 0.08498946259220229

var y = getBAC(180, "M", 3, "whiskey", 3); 
console.log("BAC of an 180-pound male who took 3 shots of whiskey 3 hours ago is", y); 
// BAC of an 180-pound male who drank 3 shots of whiskey 3 hours ago is 0.12114141414141409
