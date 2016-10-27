// Bootcamp Prep - Introduction to Objects

var properties = {
				hello: 'World',
				arr: [],
				obj: {},
				bool: true 
			};

// Step 1:
//console.log(properties.hello);			

var methods = {
	hello: function(){
		return 'World';
	},
	arr: function(){
		return [];
	},
	obj: function(){
		return {};
	},
	bool: function(){
		return true;
	}
};

// Step 2:
// console.log(methods.hello); //doesn't work bc there is no parenthesis, you're just getting a reference to the function but you're not invoking it
// Step 3:
console.log(methods.bool());
