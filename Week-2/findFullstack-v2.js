// Use the various String methods we learned today to get the function to 
// print 'Fullstack Academy of Code' 

// 1. Version 2

// Transpose "I made no lack of good code" ==> "Fullstack Academy of Code"
// Identify whole words that already exist in original string: "of", "code" 
// Identify letters that already exist in original string: "l", "a", "c", "k", "f", d", "e", "m"
// Identify letters that need to be added:  "u", "s", "t", "y" 
// Identify letters that need to be in uppercase: first letter of every word except "of"
// Check spacing between words 

var printFullstack = function() {
var newStr = ""; 

// Slicing individual characters 
    var starterString = 'I made no lack of good code';
    var letterL = starterString.slice(10, 11); // l 
    var letterA = starterString.slice(11, 12); // a
    var letterC = starterString.slice(12, 13); // c
    var letterK = starterString.slice(13, 14); // k
    var letterF = starterString.slice(16, 17); // f
    var letterD = starterString.slice(4, 5); // d
    var letterE = starterString.slice(5, 6); // e
    var letterM = starterString.slice(2, 3); // m
    
    //console.log(ofStr);  // to test for each step of the way 

// Slicing whole words 
    var of = starterString.slice(14, 17);  // of
    var code = starterString.slice(23, 27); // code

// Characters to add 
    var letterU = "u"; 
    var letterS = "s"; 
    var letterT = "t"; 
    var letterY = "y"; 
    var blank = " "; 
    
    newStr = newStr.concat(letterF.toUpperCase(), letterU, letterL, letterL, letterS, letterT, letterA, letterC, letterK, blank, letterA.toUpperCase(), letterC, letterA, letterD, letterE, letterM, letterY, of, blank, code.charAt(0).toUpperCase(), code.slice(1, code.length+1)); 
   
    return newStr; 
 }

console.log(printFullstack()); // Fullstack Academy of Code 

