/*
	HOLY CRAPS
	
	We're creating a simplified verison of the popular casino game craps.
	A player rolls 2 dice. If the total of those dice is 7 or 11, the player wins,
	otherwise he or she must add more money to the betting pool and roll again
	
	Complete the while loop and run your code to play some craps!
*/

var bettingPool = 0;

function roll() {
	//We use Math.random() to generate a random number between 0 and 1. Using Math.floor() and some arithmetic lets us simulate rolling a 6-sided die. 
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	
	console.log("I rolled a " + d1 + " and a " + d2);
	
	// create var so that condition is true. 
	var iWin = ((d1 + d2 === 7) || (d1 + d2 === 11)); 
	// add additional losing functionality. 
	var iLose = ((d1 + d2 === 2) || (d1 + d2 === 3) || (d1 + d2 === 12));
	
	// if iWin and iLose fail, enter While loop and roll again.
	while(iWin === false && iLose === false) {  
		console.log("Roll Again!")
		bettingPool += 100;
		d1 = Math.floor(Math.random() * 6) + 1;
		d2 = Math.floor(Math.random() * 6) + 1;
		console.log("I rolled a " + d1 + " and a " + d2);
		iWin = ((d1 + d2 === 7) || (d1 + d2 === 11)); 
		iLose = ((d1 + d2 === 2) || (d1 + d2 === 3) || (d1 + d2 === 12));
	}
	// if iWin and iLose are true, log out message and bettingPool amount. 
	if(iWin === true){
		console.log("Woohoo! I won " + bettingPool);
	} else if (iLose === true) {
		console.log("Crap out! You lost " + bettingPool + "!"); 
	}
}

roll(); 

/*
	When you're done, see if you can add more craps rules. Totals of 7 and 11 are winning,
	but 2,3,12 will make you "crap out" and lose. How can you add losing functionality to this game?
*/
