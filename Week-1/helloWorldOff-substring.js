//Log 'Hello World!' to the console in as convoluted and zany a way as possible!
//See some heroic examples in various languages here: http://codegolf.stackexchange.com/questions/4838/most-complex-hello-world-program-you-can-justify

//Define the function here

// Using the .substring method 
var helloWorld = function() {
	var abc = 'abcdefghijklmnopqrstuvwxyz';
	var sentence = abc.substring(7, 8).toUpperCase() + abc.substring(4, 5) + abc.substring(11, 12) + abc.substring(11, 12) + abc.substring(14, 15) + " " + abc.substring(22, 23).toUpperCase() + abc.substring(14, 15) + abc.substring(17, 18) + abc.substring(11, 12) + abc.substring(3, 4) + "!"; 
	return sentence; 
}


console.log(helloWorld()); // Hello World! 

