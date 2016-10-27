// Bootcamp Prep - Adding Values to an Empty Object 

var emptyObject = {}; // squiggly brackets to indicate object 

// Dot Notation
emptyObject.flavor = [{flavor1: "vanilla"}, {flavor2: "chocolate"}, {flavor3: "vinegar"}];
// emptyObject["flavor4"] = "strawberry";
emptyObject.flavor4 = "strawberry";
console.log(emptyObject);


// // Bracket Notation - Need to use quotes within brackets aka insert property/key name ('hello' in this case) as a string 
emptyObject['hello'] = 'world';   
console.log(emptyObject); 


// // Re-Assignment - the same property can be reassigned a different value as well. 
// emptyObject.hello = false;
// console.log(emptyObject);

// emptyObject["country"] = "America"; 

// for(var country in emptyObject) {
// 	console.log(emptyObject[country]); 
// }
 

emptyObject.flavor1 = "vanilla"; 
emptyObject.flavor2 = "chocolate"
emptyObject; 

