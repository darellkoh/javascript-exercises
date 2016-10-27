// *** TALES OF TRUTHY AND FALSEY ***

// As you know, conditional statments are a fundamental part of programming:

if (condition) {
	do this;
} else {
	do that;
}

if (true) {  // will inherently evaluate to a Boolean 
	console.log('I love it');
} else {
	console.log('This is no fun');
}

// Mathamatical comparisons result in booleans, and are often used as conditions:

var hoursSlept = 4;
var hoursDesired = 7;

if (hoursSlept >= hoursDesired) {
// 	console.log('I love it');
} else {
// 	console.log('This is no fun');
}

// Comparisons like these comparisons result in booleans:
console.log(hoursSlept >= hoursDesired);
console.log(hoursSlept === hoursDesired);

// Let's explore further...

var otherObj = {
	key1: false,
	key2: 'val'
};

// // This shouldn't surprise you
if (otherObj.key1) {   // inherently true despite the "false" value
	console.log('otherObj.key evaluated to false');
} else {   // inherently false 
 	console.log('otherObj.key evaluated to true');
}

// This one might
if (otherObj.key2) {  // keys that have a value are inherently true 
	console.log('otherObj.key evaluated to true');
} else {
	console.log('otherObj.key evaluated to false!');
}

//  In JavaScript, data types that are not booleans actually evaluate to booleans when used as a condition in an 'if' statement. Thus, we say everything in JavaScript is either 'truthy' or 'falsey'.

// An easy way to check whether something is truthy or falsey without an 'if' statement is to use 'bang-bang'.

// Check this:
console.log(!true); // false. That makes sense, since '!' means 'not', and false is the opposite of true
console.log(!!true); // 'not not true' = true
console.log(!otherObj.key2);  // false. The opposite of otherObject.key's corresponding boolean value
console.log(!!otherObj.key2);  // true. otherObj.key is truthy! It's just a string, so that means strings are truthy


// Knowing what's truthy and what's falsey in JavaScript allows you to be much more fluid and less wordy in your program flow. Here are a bunch of data of various types. Let's see which are truthy and which are falsey! Try for yourself: 

console.log(!false); // true 

console.log(!!false); // false 

console.log(!!0); // true [false] 

console.log(!!1); // true 

console.log(!!""); // false

console.log(!!" How about now?? "); // true 

console.log(!!{}); // objects are inherently true, contents don't matter 

console.log(!!{ key: false });  // true. It's an object; contents don't matter

console.log(!!undefined); // false 

console.log(!!"undefined");  // true. It's a string; doesn't matter what it says

console.log(!!null); // false 
 
console.log(!!NaN); // false 

console.log(!![]); // arrays are inherently true, contents don't matter 

console.log(!!undeclaredVariable);  // ReferenceError! Gotcha! Don't reference nonexistant variables!

console.log(!!function(){}); // true

console.log(!!window);  // true bc window is an object


// // Let's put the principle of truth-falsey to some use. Let's say we have a politician who wants to run for president. If she's eligible she'll run, if not, she'll do something else:

if (politician is eligible) {
	run for president;
} else {
	do other stuff;
}

// The criteria to be eligible to run are complex. A candidate must:
 // - be at least 35 years old
 // - be American born 
 // - must have less than 2 scandals OR over 3 medals
 // - not be a felon
 // - be cool

// // Here is our politician:

var politician = {
	age: 33,
	scandals: ['that one time', 'that other time'],
	medals: ['red', 'yellow', 'rainbow'],
	nationality: 'American',
	isCool: true
};

// // The logic here is complex, so we're going to write a function 'isEligible' that returns whether or not our politician is eligible. This way we isolate the logic and our code is more readable. Knowing how to break up code into separate functions that perform independent tasks becomes an important skill as you start writing more complex programs. Our control flow looks like this:

if (isEligible(politician)) {
	console.log('Running for prez!');
} else {
	console.log('netflix && chill');
}


// Here is one possible solution for our isEligible function:
function isEligible(human) {
	if (!human) 
	return false; // a more elegant, shorthand way of writing "if" statements
	return (human.age >= 35 && // conditions required to be eligible to run for Prez
	(human.scandals.length < 2 || 
	human.medals.length > 3) &&
	human.nationality === "American" &&
	human.isCool &&
	!human.isFelon);
}

// Note that if we console.logged the boolean instead of returning it, our function would be useless. It would return undefined, and the expression would always evaluate to false.

// Write helper functions, stick them at the bottom, then when you call them at the top, they will work

console.log(a); 
var a = 3 // undefined 

// if you want to use var a = function (), you have to move it above the return/console.log, it's because JS hasn't seen/scanned the variable file yet 

// // Here's another possible solution. This one is actually a bit more performant, since we will likely get away with doing fewer checks if the politician is not eligible:

function isEligible(human) {
 if (!human) return false;
	if (!(human.age >= 35)) return false; // start with all the "falses" to eliminate. the goal of "if" statements is to pare down and eliminate options in the most efficient way possible. 
	
	if (!(human.scandals.length < 2 || 
	human.medals.length > 3)) return false;
	
	if (human.nationality !== "American") return false;
	if (!human.isCool) return false;
	if (human.isFelon) return false;
	return true;
}


// truthy-falsey is a very useful principal in JS that helps you write shorter, slicker, more readable code. Use it. 

// THE END
