//Log 'Hello World' to the console in as convoluted and zany a way as possible!
//See some heroic examples in various languages here: http://codegolf.stackexchange.com/questions/4838/most-complex-hello-world-program-you-can-justify

//Define the function here

// Using loops and if statements
var helloWorld = function() {
	
	var abc = 'abcdefghijklmnopqrstuvwxyz';
	var newStr0 = ""; 
	for (var i = 0; i < abc.length; i++) {
		if (i === "h" || "e" || "l" || "o" || "w" || "r" || "d") { 
			newStr1 = newStr0 + abc[7].toUpperCase() + abc[4] + abc[11] + abc[11] + abc[14];  
			newStr2 = newStr1 + " " + abc.charAt(22).toUpperCase() + abc.charAt(14) + abc.charAt(17) + abc.charAt(11) + abc.charAt(3); 
		}
	}
	return newStr2 + "!"; 
}

//Invoke it here
console.log(helloWorld()); // Hello World!

