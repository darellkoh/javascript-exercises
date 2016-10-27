// Write your own versions of two commonly used built-in string related functions, concat and toString.

// - INPUT: myConcat("ABC", "DEF")
// - OUTPUT: "ABCDEF"

// - INPUT: myToString(12345)
// - OUTPUT: "12345"
 
// 1. string.concat() substitution 
function myConcat(strA, strB){
	return strA + strB; 

}
console.log(myConcat("ABC", "DEF")); 

// 2. to.String() substitution 
// find a way to change number to string without using the string method 

function myToString(num) {
var myNum = num; 
var str = "";  // concatenating numbers to empty string will give you back a string 
	myNum = str + num; 
	return myNum; 
}

myToString(12345); 
