//Inny-Outty

//Check out the built-in functions below and read about what they do on w3 schools
// Try and write your own version of that function (Your functions will accept all arguments in the function's parenthesis)

// str1.concat(str2)  === myConcat(str1, str2)

//concat()
var myConcat = function(str1, str2) {
	var a = str1.toString();
	var b = str2.toString();
	return a + b;
}; 

console.log("ABC".concat("def") === myConcat("ABC" , "def"));
console.log("Hello".concat(43770) === myConcat("Hello" , 43770));
console.log("".concat("goodbye") === myConcat("" , "goodbye"));


//toString()
var myToString = function(var1) {
	return var1 + '';
};

var num = 123456;
var num2 = 0.45;
var num3 = "100";

console.log(num.toString() === myToString(num));
console.log(num2.toString() === myToString(num2));
console.log(num3.toString() === myToString(num3));

//Array.slice()
var mySlice = function(arr, begin, end) {
	var myArr = []; //return later
	if(begin && end) {
		for(var i = begin; i < end; i++) {
			//fill out later
			myArr.push(arr[i])
		}		
	} else if (end === null){
		//no end but begining
		for(var j = begin; j < arr.length; j++) {
			//fill out later
			myArr.push(arr[j])
		}	
		
	} else {
		myArr = arr;	
	}
	return myArr;
}

// //Write tests for mySlice
console.log(mySlice(['Apple', 'Banana', 'Mango', 'Kiwi'], 3))


Math.floor()
var myFloor = function(num) {
	var myString = num.toString();
	var myNum = '';
	for(var i = 0; i < myString.length; i++) {
		if(myString.charAt(i) !== '.') {
			myNum += myString.charAt(i);
		}
		else {
			return Number(myNum);
		}
	}
}


//Write tests for myFloor()
console.log(myFloor(12.3335) === Math.floor(12.3335));


//Math.round()
var myRound = function(num) {
	var myString = num.toString();
	var myNum = '';
	for(var i = 0; i < myString.length; i++) {
		if(myString.charAt(i) !== '.') {
			myNum += myString.charAt(i);
		}
		else {
			var myChar = Number(myString.charAt(i + 1));
			if(myChar >= 5) {
				return Number(myNum) + 1;
			} else {
				return Number(myNum);
			}
			
		}
	}
}

// //Write tests for myRound();
myRound(12.32325) === Math.round(12.32325)


