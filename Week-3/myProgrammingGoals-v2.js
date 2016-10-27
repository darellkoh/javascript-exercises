//My Programming Goals - Filter

/*
	Create a function that consumes goalsArray, filters out any irrelevant goals, adds any 
	programming goals you may have that are unlisted and returns the new list in alphabetical order.
	
	You must use the Array.filter() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	
	Array.filter() takes a callback function as an argument. That's right, you are passing in an a function as an argument to another function! This callback function will tell you how you want to filter each entry in goalsArray
*/ 

// Using a function that consumes goalsArray 

var goalsArray = [
    	'Get rid of all the viruses on my computer',
        'Make my own website',
        'Get into a competitive bootcamp',
        'Impress my mother', // F 
        'Get a better understanding of technology',
        'Make my own apps',
        'Impress my friends',
        'Earn some extra $$$',
        'Shake hands with Mark Zuckerberg', // F 
        'End global tyranny',
        'Participate in hackathons',
        'Learn the difference between Java and JavaScript',
        'Become CEO of a Unicorn tech startup', // F 
        'Hack the NSA'
    ];

function myFilter(goals) {
	var myGoals = [ 
		'Get rid of all the viruses on my computer',
        'Make my own website',
        'Get into a competitive bootcamp',
        'Get a better understanding of technology',
        'Make my own apps',
        'Impress my friends',
        'Earn some extra $$$',
        'End global tyranny',
        'Participate in hackathons',
        'Learn the difference between Java and JavaScript',
        'Hack the NSA',
        'Become an expert in the urban/CRE tech space',
        'Make lots of $$$'
		]; 
		
	goals = goals.filter(function(goal) {
		var matchIndex = myGoals.indexOf(goal); 
		if (matchIndex > -1) {
			myGoals.splice(matchIndex, 1); 
			return true; 			
		} else {
			return false; 
		}
	}); 
	
	goals = goals.concat(myGoals); 
	//console.log(goals); 
	goals.sort(); 
	console.log(goals); 
}

myFilter(goalsArray); 

/*
[ 'Become an expert in the urban/CRE tech space',
  'Earn some extra $$$',
  'End global tyranny',
  'Get a better understanding of technology',
  'Get into a competitive bootcamp',
  'Get rid of all the viruses on my computer',
  'Hack the NSA',
  'Impress my friends',
  'Learn the difference between Java and JavaScript',
  'Make lots of $$$',
  'Make my own apps',
  'Make my own website',
  'Participate in hackathons' ]
*/
	



