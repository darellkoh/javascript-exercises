// Instead of:

// var human1 = {name: 'Dan', age:5, sayHello: function(){return "Hello"}};
// var human2 = {name: 'Kristen', age:22, sayHello: function(){return "Hello"}};
// var human3 = {name: "Chris", age: 55, sayHello: function(){return "Hello"}};

// Create a constructor function that creates an object that looks like the objects above.

// CONSTRUCTOR FUNCTION
function Human(name, age){
	// "this" references the new object created
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		return "Hello";
	};
}


// INVOKE THE CONSTRUCTOR FUNCTION WITH THE NEW KEYWORD
var human1 = new Human('Dan', 5);
var human2 = new Human('Kristen', 22, "guitars");
var human3 = new Human('Chris');

console.log(human1); // { name: 'Dan', age: 5, sayHello: [Function] }
console.log(human2); // { name: 'Kristen', age: 22, sayHello: [Function] }
console.log(human3); // { name: 'Chris', age: undefined, sayHello: [Function] }

console.log(human1.sayHello()); // Hello
console.log(human2.sayHello()); // Hello
console.log(human3.sayHello()); // Hello


// If you give in more parameters than arguments, it doesn't log
// If you give less parameters than arguments, it logs undefined. 
