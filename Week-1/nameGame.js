/*
	NAME GAMES
	
	Create two functions, sayMyName() and playNameGame()
	
	sayMyName() will take 2 arguments: a first name and a last name. It will log out the string "My name is FIRSTNAME LASTNAME"
	
	sayMyName("Dan", "The Man") ==> "My name is Dan The Man"
	
	playNameGame() will take a person's first name. It will log out a string of the name game song
	
	playNameGame("Daniel") ==> "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"
	
*/

function sayMyName(firstName, lastName) { 
	console.log("My name is " + firstName + " " + lastName); 
}
sayMyName("Darell", "Koh"); // My name is Darell Koh

function playNameGame(firstName) {
	console.log(firstName + " " + firstName + " " + "Bo " + "B" + firstName.slice(1, firstName.length) + " " + "Banana " + "Fana " + "Fo " + "F" + firstName.slice(1, firstName.length) + " " + "Fee " + "Fi " + "Mo " + "M" + firstName.slice(1, firstName.length) + " " + firstName); 
}

playNameGame("Ziggy"); // Ziggy Ziggy Bo Biggy Banana Fana Fo Figgy Fee Fi Mo Miggy Ziggy
