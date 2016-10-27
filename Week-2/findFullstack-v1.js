// Use the various String methods we learned today to get the function to 
// print 'Fullstack Academy of Code' 

// 1. Version 1

var printFullstack = function() {
var newStr = ""; 
    var starterString = 'I made no lack of good code';
    var ofStr = starterString.slice(14, 17);  // of
    var codeStr = starterString.slice(22, 27); // code
    // console.log(codeStr);  // to test each step of the way 
    var fullStack = "Fullstack Academy"; 
    var blank = " "; 
 
    newStr = newStr.concat(fullStack, ofStr, blank, codeStr.charAt(1).toUpperCase(), codeStr.slice(2, codeStr.length+1)); 
    
    return newStr; 
 }

console.log(printFullstack()); // Fullstack Academy of Code 

