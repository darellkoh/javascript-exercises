/*
	MARVEL CIVIL WAR
	
   Given an Array of superhero objects, create a function that check if the heroes with a true "is_registered" property also have a "secret_identity". If they are unregistered, or registered without their secret identity, add them to a "Government Watch" array and log their "testify" functions to the console.
*/

//Superhero Super-Class Constructor
var Superhero = function(name, identity, registered) {
	var hero = {
		hero_name: name,
		secret_identity : identity,
		is_registered: registered,
		testify : function() {
			return "My name is " + this.hero_name;
		}
	}
	return hero;
}

var ironMan = new Superhero('Iron Man', 'Tony Stark', true);
var spiderMan = new Superhero('Spider Man', 'Peter Parker', false);
var hawkeye  = new Superhero('Hawkeye', null, false);
var winterSoldier  = new Superhero('Winter Soldier', 'Bucky Barnes', false);
var captainAmerica = new Superhero('Captain America', 'Steve Rogers', false);
var theVision = new Superhero('The Vision', null, true);
var blackWidow  = new Superhero('Black Widow', 'Natasha Romanoff', false);
var blackPanther = new Superhero('Black Panther', "T'Challa", true);

var civilWar = [ironMan, spiderMan, hawkeye, winterSoldier, captainAmerica, theVision, blackWidow, blackPanther];


function check (arr) {
var govWatch = []; 
	// loop over whole array first 
	for(var i = 0; i < civilWar.length; i++) { 
		if(civilWar[i]["is_registered"] !== true || (civilWar[i]["is_registered"] === true && !civilWar[i].hasOwnProperty("secret_identity"))) {  // use .hasOwnProperty() to determine if superheroes have the "secret_identity" property
			govWatch.push(civilWar[i]["hero_name"], civilWar[i].testify());  // push to empty govWatch array 
		}
	}
	return govWatch;
} 
check(civilWar); 

// [ 'Spider Man',
//   'My name is Spider Man',
//   'Hawkeye',
//   'My name is Hawkeye',
//   'Winter Soldier',
//   'My name is Winter Soldier',
//   'Captain America',
//   'My name is Captain America',
//   'Black Widow',
//   'My name is Black Widow' ]



