/* Description

Create a function `greeting(name)` that accepts a name argument and returns a personalized greeting if a name is present.

The Function takes a name as its only argument and returns one of the following strings:

**Examples**

- INPUT: greeting("Charlotte");
- OUTPUT: "Hello, Charlotte!";

- INPUT: greeting();
- OUTPUT: "Hello!";

Write Code Below!
*/
function greeting(name){
	console.log(name)
	if(name){
		return "Hello " + name + "!"; 
	} else {
		return "Hello!";
	}
}
greeting("David Bowie"); //'Hello David Bowie!'
