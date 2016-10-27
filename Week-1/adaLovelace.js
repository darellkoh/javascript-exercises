// Change the string 'ada lovelace' to 'Ada Lovelace'

function changeName(){
var myName = 'ada lovelace';

// Method #1: using .bracket notation 
var firstLetter = myName[0].toUpperCase();
var secondLetter = myName[4].toUpperCase();

// Method #1: using .charAt notation 
var firstLetter = myName.charAt(0).toUpperCase();
var secondLetter = myName.charAt(4).toUpperCase();

var firstName = firstLetter + myName.slice(1, 3); 
var lastName = secondLetter + myName.slice(5, 12); 

return firstName + " " + lastName;

} 
console.log(changeName()); // Ada Lovelace 
