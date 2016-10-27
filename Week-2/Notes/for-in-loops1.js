// Bootcamp Prep - Looping over Properties with "For...In" Loops

var obj = {a: 1, b: 2, c: 3};

for(var prop in obj) {
	console.log("obj." + prop + " = " + obj[prop])
}
