/*
	OPEN SESAME
	
	Our gate function is not very secure. Choose a password from the passwords array (or write your own and add it to the array). Then, uncomment and complete the if statement and for loop so the gate only logs an entry message when the designated password is selected by the loop
	
*/


var passwords = [
	'Password123',
	'DavidYangsMiddleName',
	'qwert',
	'S3cur3P455WORD',
	'OpenSesame',
	'DeadChildhoodPetsName'
];

function gate() { 
	// choose a password. I choose "OpenSesame". 
	for (var i = 0; i < passwords.length; i++) {
		console.log(passwords[i]); 
		// always console.log() to check each step of the way before writing new code. 
		// log an entry message when loop selects "OpenSesame"
		if(passwords[i] === "OpenSesame") {
			console.log("You're In!");
			return; 
		}
	}
}

gate(); 
