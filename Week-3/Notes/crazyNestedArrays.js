// Crazy nested arrays exercise 

var sampleArr = [
	["animals", [["dogs", "rats", "mice"], "cats", "pigs"], 234],
	["sopranos", [["Tony", "Adam", "Ming"], "Carmella", "AJ", "Meadow"], 234],
	["guitars", [["Stratocaster", "Fender", "Hagstrom"], "Telecaster", "Gibson Flying-V"], 234]
];

for(var i = 0; i < sampleArr.length; i++) {
	var newArr = sampleArr[i][1][0][2]; // we can access as many layers as we want
	console.log(newArr);
}
// mice
// Ming
// Hagstrom
