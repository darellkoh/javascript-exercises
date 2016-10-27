var ghosts = {
    "ghost": "Casper",
    "ghost1": "Lincoln's Ghost",
    "ghost-2": "Bloody Mary",
    "ghost 3": "He stopped answering my texts",
    "ghost$": "The one in the machine",
    " ghost": "The Ghost of Xmas Future",
    "ghost()": "The Ghost of Tom Joad",
    "ghost[]": "The Hash-Slinging Slasher",
    "1000ghost": "The Babadook"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the ghosts. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `ghost1'.
console.log(ghosts.ghost1); // Lincoln's Ghost

// Try out each ghost and see if you can use dot or bracket notation to access it, change the answer to true!

// ghost
console.log(ghosts.ghost);
console.log(ghosts["ghost"]);
var dotNotation0 = true; 
var bracketNotation0 = true;

// ghost1
console.log(ghosts.ghost1);
console.log(ghosts["ghost1"]);
var dotNotation1 = true;
var bracketNotation1 = true;

// ghost-2
console.log(ghosts.ghost-2); 
console.log(ghosts["ghost-2"]);
var dotNotation2 = false; NaN
var bracketNotation2 = true;

// ghost 3
console.log(ghosts.ghost 3); 
console.log(ghosts["ghost 3"]); 
var dotNotation3 = false; // Syntax error, missing ) after argument list 
var bracketNotation3 = true;

// ghost$
console.log(ghosts.ghost$); 
console.log(ghosts["ghost$"]);
var dotNotation4 = true;
var bracketNotation4 = true;

//    ghost
console.log(ghosts. ghost); 
console.log(ghosts[" ghost"]);
var dotNotation5 = false; // returns "Casper" instead. Cannot have spaces 
var bracketNotation5 = true;

// ghost()
console.log(ghosts.ghost()); 
console.log(ghosts["ghost()"]);
var dotNotation6 = false; // TypeError, not a function
var bracketNotation6 = true;

// ghost[]
console.log(ghosts.ghost[]); 
console.log(ghosts["ghost[]"");
var dotNotation7 = false; // SyntaxError, unexpected token ] 
var bracketNotation7 = false; //SyntaxError, invalid or unexpected token 

// 8ghost
console.log(ghosts.8ghost); 
console.log(ghosts["8ghost");
var dotNotation8 = false; //SyntaxError
var bracketNotation8 = false; //SyntaxError 
