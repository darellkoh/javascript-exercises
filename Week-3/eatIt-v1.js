/*
	EAT IT!
	
	Create a function that will 'judge' the results of a competitive eating competition
	
	There are 3 foods:
	
		pizza: 2 points
		hotdog : 3 points
		cheeseburger : 5 points
	
	Your function will take an array of objects. Each object contains the competitor's name, and the number of each food item they've eaten. 
	
	You should return an array of objects, with each object containing the player's name and their total score
	
	eg:
		Input: [
				  {name: "Habanero Harry", pizza: 5 , hamburgers: 17, hotdogs: 11},
				  {name: "Big Bob" , pizza: 20, hamburgers: 4, hotdogs: 11}
				]
				
		Output: [
				  {score: 134, name: "Big Bob"},
				  {score: 98, name: "Habanero Harry"}
				]		
	
*/

// Function takes an array of objects
	// Objects should contain 1) competitor's name 2) number of food items they've eaten
	// Return an array of objects, with each object containing 1) total score (points) 2) competitor name


// Create object constructor function that takes in name, calculates score (no. of pizzas * points for each pizza) + ( no. of cheeseburgers * points for each cheeseburger) + (no. of hotdogs * points for each hotdog)
// Create a new object and a new array
// Push new object into the array 
	
	
var competitors = [
		{name: "Big Bernie" , pizza: 20, cheeseburger: 4, hotdog: 11},
		{name: "Habanero Hillary" , pizza: 2, cheeseburger: 14, hotdog: 3},
		{name: "Doughboy Donald" , pizza: 18, cheeseburger: 2, hotdog: 12},
		{name: "Creepy Cruz" , pizza: 1, cheeseburger: 1, hotdog: 0}
	]; 
	
function newPlayerObj(playerObject) { 
	this.score = (playerObject.pizza * 2) + (playerObject.cheeseburger * 5) + (playerObject.hotdog * 3);
	// console.log("this score: " + this.score); 
	this.name = playerObject.name; 
}


function judgeResults(arr) {
	var newArr = []; 
	for(var i = 0; i < arr.length; i++) {
		newArr.push(new newPlayerObj(arr[i])); // HAVE TO USE NEW KEYWORD!!!! Otherwise it's just referring to the empty newPlayerObj function 
		
	}
	return newArr; 
}
judgeResults(competitors);
	
/*
[ { score: 93, name: 'Big Bernie' },
  { score: 83, name: 'Habanero Hillary' },
  { score: 82, name: 'Doughboy Donald' },
  { score: 7, name: 'Creepy Cruz' } ]
  */
