/*

Ask Politely



- Fullstack Academy - JavaScript JumpStart

- Description

Create the function askPolitely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**

askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper."

Write Code Below
*/

// If last character of sentence is a "?", return sentence ending with the word "please". 
// If sentence does not have a "?" at the end of it, return original string.
// If last character of sentence is a "?" but also has a "please", return original string.



function askPolitely(sentence) {
	if (sentence.charAt(sentence.length-1) === "?") {
		if(sentence.slice(-7) === "please?") {
			return sentence; 
			} else {
				return sentence.slice(0, -1) + ", please?";
			}
	} else { 
		return sentence;
	}
}

console.log(askPolitely("May I borrow your pencil?")); // May I borrow your pencil, please?
console.log(askPolitely("May I ask a question please?")); // May I ask a question please?
console.log(askPolitely("My name is Grace Hopper.")); // My name is Grace Hopper.

