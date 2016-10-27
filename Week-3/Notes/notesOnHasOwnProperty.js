// Objects Review: When to use .hasOwnProperty with "for-in" loops

// Let's say we have a universe with various types of places each with their own animals:

var universe = {
	tundra: ['narwal', 'sheep'],
	jungle: ['moose', 'woman', 'mouse'],
	space: ['rock', 'planet', 'dust']
};

// Someone asks us to log out all the animals that live in a certain place, so we write this function:

function listAnimalsInPlace(place) {
	for (var i = 0; i < universe[place].length; i++) {
		console.log(universe[place][i]);
	}
}

// Try it:
listAnimalsInPlace('jungle'); // moose woman mouse

// But what happens if someone calls listAnimalsInPlace on a place not in our object?
// Try it: 
listAnimalsInPlace('underground');  // Error

// So we need to check whether universe[place] is defined before trying to loop through it.
// You can use hasOwnProperty, or you can just check if it's falsey, and if it is, return out of the function.
// Here's a better example of our function. Comment out the one above and try this one with a place that we don't know about:

function listAnimalsInPlace(place) {
	if (!universe.hasOwnProperty(place)) return 'that place isnt here';
	for (var i = 0; i < universe[place].length; i++) {
		console.log(universe[place][i]);
	}
}

// The check could also be this, since undefined is falsey (it evaluates to false in an if statement):

function listAnimalsInPlace(place) { 
if(!universe[place]) return 'That place does not exist!';
	for(var i = 0; i < universe[place].length; i++) {
		console.log(universe[place][i]); 
	}
}

// Now let's say we need to see where, if anywhere, a certain animal lives, and return the place.
// We'll write a new function:

function wheresItLive(animal) {
	for (var place in universe) {
		if (universe[place].indexOf(animal) >= 0) {
			return place;
		}
	}
	return 'dont know about that one';
}

// Try it:
console.log(wheresItLive('mouse')); // jungle

// In this case we don't need to check whether anything exists, sine we're only looping what we have and if we find the animal, cool and if we don't there's no risk of an error.
// Try looking for an animal we don't have - we're ok:
console.log(wheresItLive('glarseblatt')); // 'don't know about that one' 








