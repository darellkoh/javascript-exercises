/*
	DATE CONVERSION
	
	Create a function that takes an ISO-formatted date MM/DD/YYYY and a string representing the name of a given language. Your function should return a string of the input date translated into the input language
	
	ex)
		dateConvert('04/10/2015', 'French') => 'Avril 10 2015'

*/

// Strategy: 
// First, need to check if date is a string, if not, return "not a string"
// Then, cycle through objects to find if prop name exists for the language inputted
// If it does, convert string containing ISO-formatted date into the language specified. 
// Remove slashes, add spaces in between. No. of months will remain constant, this we know. 
// 04 === arr[3], slash is removed, 10 remains the same, slash is removed, 2015 remains the same 


var languageTable = {
	French : ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
	English : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	Spanish : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre'],
	German : ['Januar', 'Februar', 'Marz','April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

function convertMonth (month, language) {
	for(var prop in languageTable) {
		if(languageTable.hasOwnProperty(prop)) { 
			if(month === '01') return languageTable[language][0];
			if(month === '02') return languageTable[language][1];
			if(month === '03') return languageTable[language][2];
			if(month === '04') return languageTable[language][3];
			if(month === '05') return languageTable[language][4];
			if(month === '06') return languageTable[language][5];
			if(month === '07') return languageTable[language][6];
			if(month === '08') return languageTable[language][7];
			if(month === '09') return languageTable[language][8];
			if(month === '10') return languageTable[language][9];
			if(month === '11') return languageTable[language][10];
			if(month === '12') return languageTable[language][11];
		} 
	}
	
}
convertMonth('06', 'English'); // 'June'
convertMonth('12', 'German');  // 'Dezember' 

function dateConvert(date, str) {
	// If date and language are not in string format, return message saying so 
	if(typeof date !== 'string' || typeof str !== 'string') {
		return "Please input a date and language in string format."; 
	// If date and languge are in string format, proceed 
	} else {  
		// Call on convertMonth function and concatenate rest of date string
		if(languageTable.hasOwnProperty(str)) { 
			return convertMonth(date.slice(0, 2), str) + " " + date.slice(3, 5) + " " + date.slice(6);
		// If language str entered does not exist in object 
		} else { 
			return "This date does not exist in this language. Try again.";
		} 
	}
}


dateConvert('04/10/2015', 'French');  // 'Avril 10 2015'
dateConvert('03/24/2017', 'Spanish'); // 'Marzo 24 2017'
dateConvert('07/30/2004', 'German'); // 'Juli 30 2004'
dateConvert('12/01/2078', 'English'); // 'December 01 2078'
dateConvert(11/5/1988, 'Japanese'); // 'Please input a date and language in string format.'
dateConvert(11/5/1988, 8918391); // 'Please input a date and language in string format.'
dateConvert('12/01/2078', 'Japanese'); // 'This date does not exist in this language. Try again.'




