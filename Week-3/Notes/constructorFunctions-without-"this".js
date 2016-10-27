// Task: Create 3 "Human" objects that have a name, age, and sayHello property

// Do you notice any repeated code?
// Is it tedious to type and manually create objects?
// Say if we had a database of over 1000 objects, do you wish there was a better
// way to create these objects?

// Creating new objects the literal way is painful and time-consuming. Lots of typing!
// var human1 = {name: 'Dan', age:5, sayHello: function(){return "Hello"}};
// var human2 = {name: 'Kristen', age:22, sayHello: function(){return "Hello"}};
// var human3 = {name: "Chris", age: 55, sayHello: function(){return "Hello"}};

// Making new objects is a lot easier with a constructor function. We could do the following (but it is still less automated than a new object constructor that uses the "this" keyword):  

function peopleMaker(name, age) { // properties that vary, sayHello is not included as an argument bc it's the same throughout 
	var person = {}; 
	person.name = name;
	person.age = age;
	person.sayHello = function() {
		return 'Hello my name is ' + name + ' and I am ' + age + ' years old.';
	};
	return person;
}


var human1 = peopleMaker('Dan', 5);
var human2 = peopleMaker('Kristen', 22);
var human3 = peopleMaker('Chris', 55);

console.log(human1); // { name: 'Dan', age: 5, sayHello: [Function] }
console.log(human1.sayHello()); // Hello my name is Dan and I am 5 years old.

// Since we're just doing a constructor function, no need for the "new" keyword. "New" is for new objects 

