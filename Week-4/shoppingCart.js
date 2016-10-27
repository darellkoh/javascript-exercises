
//Complete sumCart so that it will take the cart array and return the total cost for all the line items in the cart.

var cart = [
	["tofu", {"quantity" : 3,"price" : 4.5} ],
	["sriracha", {"quantity" : 1,"price" : 5} ],
	["toilet paper", {"quantity" : 12,"price" : 1.75} ],
	["Drano", {"quantity" : 1,"price" : 13} ],
	["orichette", {"quantity" : 2,"price" : 7.5} ],
	["hummus", {"quantity" : 2,"price" : 5.99} ],
	["bison meat", {"quantity" : 3,"price" : 20.99} ], 
	["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

// Take return the total cost for all line items in the cart 
// For each item inside of the child array, take quantity * price, then add each item up 
// Loop over master array first 
// Create counter, multiply items and add things to counter 

function sumCart(cart) {
	var counter = 0;
	// loop over parent array 
	for(var i = 0; i < cart.length; i++) {
		// console.log(cart[i][1][key]);
		counter += cart[i][1]["quantity"] * cart[i][1]["price"];
	}
	return counter; 
}
sumCart(cart); // 217.42
