//Animal constructor function
//We want each animal to have a species property and a call method that makes the animals sound
function Animal(species, call) {
	this.species = species;
	this.call = function() {
		return call; 
	};
}


//The Animals. Follow the design pattern to make as many as you want and add them to the zoo
var horse = new Animal('horse', 'neigh');
var lion = new Animal('lion', 'roar!');
var pig = new Animal('pig', 'oink');
var pidgeon = new Animal('pidgeon', 'coo');
var rats = new Animal('rat', 'squeak');
var hipster = new Animal('Clyde', 'Ugh whatever');
var narwhal = new Animal('narwhal', 'blub blub');
var snakes = new Animal('snake', 'hissss');

//Zoo object with nested exhibit objects
var zoo = {
	'exhibits': {
		"Farm" : {
			"animals" : [horse, pig, pidgeon, hipster],
			"open" : true
		},
		"Grasslands" : {
			"animals" : [lion, snakes],
			"open" : false
		},
		"Forest" : {
			"animals" : [snakes, rats, lion],
			"open" : true
		},
		"Arctic" : {
			"animals" : [narwhal],
			"open" : false
		}
	}
};

//Complete this function that will take an exhibit string as an input
// The funcion should "visit" the given exhibit (if it is open) and log out each of the animals "speaking". If the exhibit isn't open, the function should log a message telling the visitor to try another one

function visit(exhibit) {
	if(zoo['exhibits'].hasOwnProperty(exhibit)) {
		// If exhibit exists as a property, enter loop, or else, return "does not exist"
		var place = zoo['exhibits'][exhibit]; 
			if(place && place.open) {
			// needs to have place be truthy so that if you enter a property that is not in exhibits, it exits the "if" statement and does not enter the loop (an edge case!) 
				for(var i = 0; i < place['animals'].length; i++) {
					var eachAnimal = place['animals'][i]; 
					console.log(eachAnimal.call());
				}
			} else {
				return "Sorry, this exhibit is closed.";
			}
	} else {
		return "Sorry, this exhibit does not exist."; 
	}

}

console.log(visit('Arctic')); 
// Sorry, this exhibit is closed.

console.log(visit('Farm'));
// neigh
// oink
// coo
// Ugh whatever

console.log(visit('Forest'));
// hissss
// squeak
// roar!

console.log(visit('Grasslands'));
// Sorry, this exhibit is closed.

console.log(visit('Desert'));
// Sorry, this exhibit does not exist.
