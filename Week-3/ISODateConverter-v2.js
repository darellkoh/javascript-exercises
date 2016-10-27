/*
	DATE CONVERSION
	
	Create a function that takes an ISO-formatted date MM/DD/YYYY and a string representing the name of a given language. Your function should return a string of the input date translated into the input language
	
	ex)
		dateConvert('04/10/2015', 'French') => 'Avril 10 2015'

*/

// Fullstack's version: using date new object and get function 

var languageTable = {
	French : ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
	English : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	Spanish : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre'],
	German : ['Januar', 'Februar', 'Marz','April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

function convertMonth (date, str) {
	date = new Date(date); 
	return languageTable[str][date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear(); 
	
}	
convertMonth('04/10/2015', 'Spanish'); // 'Abril 10 2015'
// convertMonth(990188, 'Japanese'); // error, did not check for edge cases!
