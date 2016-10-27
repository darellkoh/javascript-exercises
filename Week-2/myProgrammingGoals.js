//My Programming Goals

// Look up the documentation for Array.shift() here: 
// http://www.w3schools.com/jsref/jsref_shift.asp

//Using .shift() and the other array methods, change the goals array
// to reflect as accurate a list of your goals in learning programming, in priority order
// Feel free to remove any array items that do not fit your objectives = function () {


// use array methods .shift to remove the goals you don't want 
// push existing goals to new array 
// add new goals to the new array 

function myCodeDreams(objectives) { 
	var myGoals = [];
    var goalsArray = [
    	'Get rid of all the viruses on my computer',
        'Make my own website',
        'Get into a competitive bootcamp',
        'Impress my mother', // remove 
        'Get a better understanding of technology',
        'Make my own apps',
        'Impress my friends',
        'Earn some extra $$$',
        'Shake hands with Mark Zuckerberg', 
        'End global tyranny', // remove 
        'Participate in hackathons',
        'Learn the difference between Java and JavaScript', 
        'Become CEO of a Unicorn tech startup', 
        'Hack the NSA'
    ];	
    goalsArray.shift(); 
    goalsArray.splice(-3); 
    goalsArray.splice(0, 1); 
    goalsArray.splice(1, 1); 
    goalsArray.splice(5, 1); 
    goalsArray.splice(3, 1); 
    goalsArray.splice(8, 1);

    // console.log(goalsArray);
    myGoals.push(goalsArray); 
    myGoals.push('Get into Fullstack Academy and/or Grace Hopper Academy'); 
    return console.log("My Goals are: " + myGoals);
}

myCodeDreams(); 
