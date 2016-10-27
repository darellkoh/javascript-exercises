// Create a function that returns the number of vowels in a string. 

function vowelCount(str) {
var lowerStr = str.toLowerCase(); 
//var vowels = ['a', 'e', 'i', 'o', 'u']; // we can also use arrays 
var vowels = "aeiou"; 
var count = 0;
	for(var i = 0; i < lowerStr.length; i++) {
		for(var j = 0; j < vowels.length; j++) { 
			if (vowels[j] === lowerStr[i]) {
				count += 1; 
				
			}
		}
	} 
	return count; 
}

vowelCount('Good Job'); 
