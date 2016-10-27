// The characteristics of the "this" keyword

/* Notes from MDN:

(!) When a function is used as a constructor (with the new keyword), its "this" is bound to the new object being constructed.

Note: while the default for a constructor is to return the object referenced by "this", it can instead return some other object. If the return value isn't an object, then the this object is returned.

 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38


In the last example (C2), because an object was returned during construction, the new object that this was bound to simply gets discarded. (This essentially makes the statement "this.a = 37;" dead code. It's not exactly dead, because it gets executed, but it can be eliminated with no outside effects.) 

*/ 


function Human(name, age){
	// "this" references the object created
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		return "Hello";
	};
}


var dan = new Human('Dan', 5);

// Where is the new keyword, is it needed?
// What does "this" reference inside of the function (this.name?);


dan.returnName = function(){  // only dan is going to have access to this method 
	var lastName = 'static';
	this.lastName;  
	return {lastName: 'static'}; // always refers to the closest prop (dan)
};

console.log(dan.name); // Dan
console.log(dan.lastName); // undefined
dan.returnName(); // { lastName: 'static' }

