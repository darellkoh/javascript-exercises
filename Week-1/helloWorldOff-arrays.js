//Log 'Hello World' to the console in as convoluted and zany a way as possible!
//See some heroic examples in various languages here: http://codegolf.stackexchange.com/questions/4838/most-complex-hello-world-program-you-can-justify

//Define the function here

// Using arrays, slice and substring
var helloWorld = function() {
	
	var abc = 'abcdefghijklmnopqrstuvwxyz';
	var abcArr = abc.split(""); 
	var word1 = abcArr[7].toUpperCase() + abcArr.slice(4, 5) + abc.substring(11, 12) + abc.slice(11, 12) + abcArr[14] + " "; 
	
	var arrWorld = []; 
		arrWorld.push(abcArr[22].toUpperCase()); 
		arrWorld.push(abcArr[14]);
		arrWorld.push(abcArr[17]); 
		arrWorld.push(abcArr[11]);
		arrWorld.push(abcArr[3]); 
		
	var arrWorld2 = arrWorld.join("");
	
	return word1 + arrWorld2 + "!";
}

//Invoke it here
console.log(helloWorld()); // Hello World!
