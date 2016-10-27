/*
  Sniping Bond
  
  DO NOT RUN THE CODE YET
  
  Look at each of the Bond Villain IIFEs inside the badGuys function.
  For each villain, write a prediction about whether bond (007) will be passed into the functions scope. Finally run the functions, and consider why or why not your predictions matched.
  
  Reading: 
  IIFE : https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  Scope : http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
*/


var badGuys = function() {
	
	var bond = '007';
	
	(function oddJob() {
		
		var AgentinScope = (bond === '007');
		
		var prediction = 'because oddJob has access to parent function scope.';
		
		console.log("Bond in OddJob's scope", AgentinScope, "because " + prediction);
	})();
	
	(function goldFinger(bond) {
		
		var AgentinScope = (bond == '007')
		
		var prediction = 'because bond var in function scope has no value';
		
		console.log("Bond in Gold Finger's scope", AgentinScope, "because " + prediction);
	})();
	
	
	(function scaramanga(target) {

        var target = bond;
        
		var AgentinScope = (bond == '007')
		
		var prediction = 'because target var is set equal to bond value from parent scope.';
		
		console.log("Bond in Scaramanga's scope", AgentinScope, "because " + prediction);
	})();
	
	(function drNo() {
		var bond = 'Body Double';
		
		var AgentinScope = (bond === '007');
		
		var prediction = 'because the value of bond var is overwritten to "Body Double"';
		
		console.log("Bond in  Dr. No's scope", AgentinScope,  "because " + prediction);
	})();
	
	(function Jaws(agent) {
		var agent = bond;
		bond = 'Body Double';
		
		var AgentinScope = (agent === '007');
		
		var prediction = 'because agent will be set to original value of bond';
		
		console.log("Bond in Jaws' scope", AgentinScope,  "because " + prediction);
	})();
	
	
	(function elChiffre() {
		var agent = bond;
		bond = 'Body Double';
		
		var AgentinScope = (agent === '007');
		
		var prediction = 'bc value of bond, which agent references, is changed to "Body Double"'; // does not declare agent, only declares the variable within its scope
		
		console.log("Bond in El Chiffre's scope", AgentinScope,  "because " + prediction);
	})();
	
}

//Run the function
badGuys()
