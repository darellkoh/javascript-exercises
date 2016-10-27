/*
	ATTENDENCE CHECK
	
	Create a function that takes a weekday String as an argument. It then iterates over the classRoom array and returns an array of all the students present for class on that weekday
*/


// function that takes in a string (weekday)
// iterates over classroom arr 
// returns arr of all students present in class on that day  

function classCheck(day) {
	var classRoom = [
	{
		"Marnie" : [
				{"Monday" : true},
				{"Tuesday" : true},
				{"Wednesday" : true},
				{"Thursday" : true},
				{"Friday" : true}
			]
	},
	{
		"Lena" : [
				{"Monday" : false},
				{"Tuesday" : false},
				{"Wednesday" : true},
				{"Thursday" : false},
				{"Friday" : true}
			]
	},
	{
		"Shoshanna" : [
				{"Monday" : true},
				{"Tuesday" : true},
				{"Wednesday" : false},
				{"Thursday" : true},
				{"Friday" : false}
			]
	},
	{
		"Jessa" : [
				{"Monday" : false},
				{"Tuesday" : false},
				{"Wednesday" : false},
				{"Thursday" : false},
				{"Friday" : true}
			]
	},
	{
		"Ray" : [
				{"Monday" : true},
				{"Tuesday" : true},
				{"Wednesday" : false},
				{"Thursday" : false},
				{"Friday" : true}
			]
	},
	{
		"Adam" : [
				{"Monday" : false},
				{"Tuesday" : true},
				{"Wednesday" : true},
				{"Thursday" : false},
				{"Friday" : false}
			]
	},
];

	var attendance = []; 
	for(var i = 0; i < classRoom.length; i++) {
		for(var name in classRoom[i]) {
			var attendanceArr = classRoom[i][name]; 
			for(var j = 0; j < 5; j++) {
				if(attendanceArr[j].hasOwnProperty(day) && attendanceArr[j][day] === true) {
					attendance.push(name); 
				}
			}
		}
	}
	return attendance;
}
console.log(classCheck("Monday")); // [ 'Marnie', 'Shoshanna', 'Ray' ]
console.log(classCheck("Thursday")); // [ 'Marnie', 'Shoshanna' ]
console.log(classCheck("Sunday")); // []
