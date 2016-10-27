/*
	Final Project - Romance.js Poetry Generator 
	
	PART 1 : PARSE CORPUS 
	
	Create a function that parses a multiline string and returns an array of the words in the string, uniformly formatted with no numbers or punctuation.
	
	ex)
		"How Do I love thee?
		Let me count the ways" --> ['how', 'do', 'I', 'love', 'thee', 'let', 'me', 'count', 'the', 'ways']
*/


function parse(str) {
var newArr = []; 

	// check if it's a string 
	if(typeof str === 'string') {  
		
		// replace words like "you'll", "we'll", "I'll" with "you will", "we will", etc. 
		var will = str.replace(/'ll/g, ' will');  
		
		// contract words like "there's" to "theres"
		var abbrev = will.replace(/'/g, ''); 
		
		// remove punctuation and numbers (in string form/Unicode) from string 
		var strStripped = abbrev.replace(/[^A-Za-z]/g, " "); 
		
		// remove newlines, change all words to lowercase 
		var strNoNewLines = strStripped.replace(/\n/g, "").toLowerCase(); 
		
		// ensure that all standalone "i" characters are capitalized 
		var capI = strNoNewLines.replace(/ i /g, " I "); 
		
		// split string into arrays 
		var strArr = capI.split(' ');
			
			// filter out array elements that are just empty strings (" ") because empty strings are falsey  
			strArr = strArr.filter(Boolean);
			return strArr; 
	
	// if something other than a string is entered, return message saying so
	} else { 
		return "Please enter in a string."; 
	}
}

parse(	"How Do I love thee? \n Let me count the ways" ); 
// [ 'how', 'do', 'I', 'love', 'thee', 'let', 'me', 'count', 'the', 'ways' ]

parse("ThERE isn't ? three I don't I'll NEW YoRk. i \n i The ! CiTy \n acCePts won't 50505050 i it's ? size, turbulence i 50505 as inevitable.090 we'll you'll");   // Crazy edge case!

 /* [ 'there',
  'isnt',
  'three',
  'I',
  'dont',
  'I',
  'will',
  'new',
  'york',
  'I',
  'I',
  'the',
  'city',
  'accepts',
  'wont',
  'I',
  'its',
  'size',
  'turbulence',
  'I',
  'as',
  'inevitable',
  'we',
  'will',
  'you',
  'will' ] */ 


parse(99999999); // "Please enter in a string."

parse("There are roughly three New Yorks. \n There is, first, the New York of the man or woman who was born there, \n who takes the city for granted."); 

 /* [ 'there',
  'are',
  'roughly',
  'three',
  'new',
  'yorks',
  'there',
  'is',
  'first',
  'the',
  'new',
  'york',
  'of',
  'the',
  'man',
  'or',
  'woman',
  'who',
  'was',
  'born',
  'there',
  'who',
  'takes',
  'the',
  'city',
  'for',
  'granted' ] */ 
