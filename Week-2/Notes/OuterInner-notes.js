function outer(name) {  // this cannot look into the function 
	return function inner(age) {
		return name + ' is ' + age + ' years old.';  
		// anything that is in the inner function can look out (and out) to the outer function.
	};
}

var outerResult = outer('Sandra', 16);

outerResult(16); // 'Sandra is 16 years old.'

