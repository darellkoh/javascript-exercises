// Create a constructor function that creates an object that looks like the objects above.

// CONSTRUCTOR FUNCTION WITH NEW 

function Animal(name,species) {
	this.name = name;
	this.species = species;
	this.speak = function() {
		return 'Hi I am ' + this.name;
	}
}


function Human(name, age, gender, pet){
	// "this" references the object created
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.sayHello = function(){
		return "Hello my name is " + this.name;
	};
	this.pet = pet;
}




// INVOKE THE CONSTRUCTOR FUNCTION WITH THE NEW KEYWORD

var human1 = new Human('Dan', 5, 'Male', new Animal('Hugo', 'Plankton'));
var human2 = new Human('Kristen', 22);
var human3 = new Human('Chris', 55, 'Female');

console.log(human1);
/*
{ name: 'Dan',
  age: 5,
  gender: 'Male',
  sayHello: [Function],
  pet: { name: 'Hugo', species: 'Plankton', speak: [Function] } } */
  
console.log(human2);
// { name: 'Kristen', age: 22, gender: undefined, sayHello: [Function], pet: undefined } 

console.log(human3);
// { name: 'Chris', age: 55, gender: 'Female', sayHello: [Function], pet: undefined }

console.log(human1.sayHello()); // Hello my name is Dan
console.log(human2.sayHello()); // Hello my name is Kristen
console.log(human3.sayHello()); // Hello my name is Chris
