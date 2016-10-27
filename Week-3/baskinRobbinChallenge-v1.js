//Baskin Robbins 31 is a popular game in Korea
//Players sit in a circle and hold out 1-5 fingers and begin counting them.
//The player holding the 31st finger wins.

//Complete this function. You should assign a random # of 1-5 to each player and nest it in the array next to them. Starting with Ayanna, determine who is holding up the 31'st finger and return their name

 
// Assign a random number from 1-5 to each name in array - use Math.random 
// Need to loop over this new object, access the value of of each key and sum it up 
// If < 31, do the "for in" loop again 
// If > 31, return the key containing name of person 
// Find out who is holding up 31st finger, return name

var baskinRobbins31 = function () {
	var players = ['Ayanna', 'Ben', 'Ceren', 'Dan', 'Eric'];
	var obj = {};
	var sum = 0;
	
var looping = function() { // you can also put it as a function declaration 
		for(var i = 0; i < players.length; i++) {
			var num = (Math.round(Math.random() * 5)); 
			var name = players[i]; 
			obj[name] = num;
			sum += num;
			//console.log("name", name, "num", num, "sum", sum);
			if (sum >= 31) {
				console.log(name);
				return name;
			}  
		}
	}; 
	while(sum < 31) { 
		looping();
	}
}; 

// //Tests

console.log(baskinRobbins31()); // Eric
console.log(baskinRobbins31()); // Ayanna
console.log(baskinRobbins31()); // Ceren 
