/*
	FOREIGN LOOPS
	
	Create a function that takes an animal name and iterates over the petSounds array and logs all the international sounds that animal makes to the console along with the country of origin. The log should follow the format "[animal]s in [country] say [sound]"
	
		eg)
			makeNoise('dog') ==> 'Dogs in America say Woof! Woof',
								 'Dogs in Germany say Wau! Wau',
								 ....
								 'Dogs in Algeria say Wuaf Wuaf!'
	
	Like many programming problems, this exercise is simple but tricky. When faced with uncertainty, programmers will often look up their languages documentation for further insight.
	
	Think careful about what kind of for loop to use. Check out the 'Iterations' section of the MDN JavaScript documentation for different loop styles: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterations
*/


// function that takes an animal name 
// loops over petSounds array 
// checks all animal string inputs to see if they are in the array 
	// console.logs all animal sounds and country of origin 
	// console.log("[animal]s in [country] say [sound]"); 


var petSounds =	[
		{ "dog": {
			"America" : "Woof! Woof!",
			"Germany" : "Wau Wau!",
			"England" : "Bow wow!",
			"Uruguay" : "Jua jua!",
			"Afrikaans" : "Blaf!",
			"Korea" : "Mong mong!",
			"Iceland" : "Voff voff!",
			"Albania" : "Ham!",
			"Algeria" : "Ouaf ouaf!"
			}
		 },
		 { "cat": {
			"America" : "Meow",
			"Germany" : "Miauw!",
			"England" : "mew mew",
			"Uruguay" : "Miau Miau!",
			"Afrikaans" : "Purr",
			"Korea" : "Nyaong!",
			"Iceland" : "Kurnau!",
			"Albania" : "Miau",
			"Algeria" : "Miaou!"
			}
		 },
		 { "chicken": {
			"America" : "Cluck cluck",
			"Germany" : "tock tock tock",
			"England" : "Cluck Cluck",
			"Uruguay" : "gut gut gdak",
			"Afrikaans" : "kukeleku",
			"Korea" : "ko-ko-ko",
			"Iceland" : "Chuck-chuck!",
			"Albania" : "Kotkot",
			"Algeria" : "Cotcotcodet"
			}
		 }
 	];

function makeNoise(animal) { 
	// loops over petSounds array 
	for(var i = 0; i < petSounds.length; i++) {
		// checks all animal string inputs to see if they are in the array
		if(animal in petSounds[i]) {  // we can use a "for" loop here, but we need a way to check for ALL animal inputs. "for" loop only lets you access one animal value at a time. 
			for(var country in petSounds[i][animal]) {
				console.log(animal.slice(0,1).toUpperCase() + animal.slice(1, animal.length) + "s" + " " + "in" + " " + country + " " + "say" + " " +  petSounds[i][animal][country]); 
			}
		}
	}
}
		

makeNoise("chicken"); 
// Chickens in America say Cluck cluck
// Chickens in Germany say tock tock tock
// Chickens in England say Cluck Cluck
// Chickens in Uruguay say gut gut gdak
// Chickens in Afrikaans say kukeleku
// Chickens in Korea say ko-ko-ko
// Chickens in Iceland say Chuck-chuck!
// Chickens in Albania say Kotkot
// Chickens in Algeria say Cotcotcodet

