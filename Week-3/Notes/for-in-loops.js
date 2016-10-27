// For-In Loops with the Window object

function looper(obj) {
	for (var key in obj) {
		console.log('The value of ' + key + ' is' + obj[key]); 
	}
}

looper(window)
