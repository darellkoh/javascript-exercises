
/*
	SEASONS OF LOVE
	
	Complete the function so it generates the numbers of minutes in a year and logs that number to the console.
*/

var seasonsOfLove = function(){
var daysInAYear = 365;
var numOfMinsInAnHour = 60;
var numOfMinsInADay = numOfMinsInAnHour * 24;
numOfMinsInAYear = numOfMinsInADay * daysInAYear; 
return(numOfMinsInAYear); 

}

seasonsOfLove(); // 525600
