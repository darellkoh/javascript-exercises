function translate(string) {
	var leetCodex = {
		'A': '@', 
		'B': '8', 
		'C': '(}', 
		'D': '|)}', 
		'E': '3', 
		'F': 'ph', 
		'G': 'g', 
		'H': '#', 
		'I': 'l', 
		'J': '_|', 
		'K': '|<', 
		'L': '1', 
		'M': '|'|'|', 
		'N': '/|/', 
		'O': '0', 
		'P': '|D', 
		'Q': '(,)', 
		'R': '|2', 
		'S': '5', 
		'T': '+', 
		'U': '|_|', 
		'V': '|/', 
		'W': '|/|/', 
		'X': '><', 
		'Y': 'j', 
		'Z': '2', 
		' ': ' '
	}; 

	var newStr = '';
	var strCap = string.toUpperCase(); 
	for(var i = 0; i < strCap.length; i++) {
		var letterInStr = strCap[i]; 
		var letterInLeet = leetCodex[letterInStr];
		newStr += letterInLeet; 
		
	}
	return newStr;
}
translate('Isamu Noguchi');  //'l5@0|_| /|/0g|_|(}#l'
