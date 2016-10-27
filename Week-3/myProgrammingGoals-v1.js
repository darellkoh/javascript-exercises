//My Programming Goals - Filter 

/*
	Create a function that consumes goalsArray, filters out any irrelevant goals, adds any 
	programming goals you may have that are unlisted and returns the new list in alphabetical order.
	
	You must use the Array.filter() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	
	Array.filter() takes a callback function as an argument. That's right, you are passing in an a function as an argument to another function! This callback function will tell you how you want to filter each entry in goalsArray
*/

// filter(); = arr.filter(callback, thisArg). 
// Callback function will test each element of the array, returns true to keep element, false otherwise. Thisarg is optional. Filter constructs a new array for all values which callback returns true. Elements processed by filter must be set before invocation. 
// Add the following goals: 'Become an expert in the urban/CRE tech space', 'Make lots of $$$!'
// Filter first, then add new goals, then sort. 

var goalsArray = [
    	'Get rid of all the viruses on my computer',
        'Make my own website', 
        'Get into a competitive bootcamp',
        'Impress my mother', // filter 
        'Get a better understanding of technology',
        'Make my own apps',
        'Impress my friends',
        'Earn some extra $$$',
        'Shake hands with Mark Zuckerberg', // filter 
        'End global tyranny',
        'Participate in hackathons',
        'Learn the difference between Java and JavaScript',
        'Become CEO of a Unicorn tech startup', //filter 
        'Hack the NSA'
    ];

function filtered(goal) {
	
	var goalIndex3 = goalsArray[3]; 
	var goalIndex8 = goalsArray[8]; 
	var goalIndex12 = goalsArray[12]; 
	return (goal !== goalIndex3 && goal !== goalIndex8 && goal !== goalIndex12);

}
function myFilter(goals) {
	var newArr = goalsArray.filter(filtered);
	newArr.push('Become an expert in the urban/CRE tech space!', "Make boatloads of $$$"); 
	//console.log(newArr); 
	return newArr.sort(); 
}

console.log(myFilter());

/*
[ 'Become an expert in the urban/CRE tech space!',
  'Earn some extra $$$',
  'End global tyranny',
  'Get a better understanding of technology',
  'Get into a competitive bootcamp',
  'Get rid of all the viruses on my computer',
  'Hack the NSA',
  'Impress my friends',
  'Learn the difference between Java and JavaScript',
  'Make boatloads of $$$',
  'Make my own apps',
  'Make my own website',
  'Participate in hackathons' ]
  */ 
