// *** THREE GENERAL POINTS ***


// 1) Use brackets instead of .charAt(). It's much easier to read when things get complex.

var str = "I <3 it when you bracket me";
// console.log(str[0]);  // Do it this way
// console.log(str.charAt(0));  // Ugh, so lame



// 2) KNOW YOUR TOOLS  Peruse the string and array methods, and get at least qualitatively familiar.

// String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
// Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype


// Slight aside, but turns out .slice() is useful even with no arguments (creates and returns a copy of an array or string). 
// Let's say we have an array of data. We want to sort it so we can do various analyses, but we don't want to alter the order of the original array since that matters too.
var arr = [3,2,1];
var newArr = arr.sort();
// console.log(newArr);  // Cool, we expected that
// console.log(arr);  // Crap! .sort changes/alters array it's called on

// If we slice the array before sorting, we don't change the original array. 
var arr = [3,2,1];
var newArr = arr.slice().sort();
// console.log(newArr);  // Cool, we expected that
// console.log(arr);  // Nice, integrety of original data is maintained!


// Here's another reason copies are useful:
var arr = [1,2,3];
var newArr = arr;
newArr.push(4);
// console.log(newArr);  // Expected
// console.log(arr); // same as newArr 
// What? original array has new element as well! This happens because a new array is not actually created; the variable newArr actually points to the same array. This is known as 'PASS-BY REFERENCE', and is how JavaScript works with non primitive data types. 

// However, if we set the new array equal to the .slice() of the original array, altering the new array does not affect the original since we make a true copy:
var arr = [1,2,3];
var newArr = arr.slice();  // Set new array to .slice() of the original
newArr.push(4);
// console.log(newArr);  // Expected
// console.log(arr);  // Integrety maintained :)

// This relates to a concept known as 'PASS-BY REFERENCE' vs. 'PASS-BY VALUE'. Don't worry too much about it for now as you'll learn about it in future, but be aware of it in case it bites you before then. 


// 3) OBJECT REVIEW

var obj = {
	key1: "val1",
	key2: "val3",
	key3: "val3"
};

// Bracket and dot notation both work in this simple case, but use dot notation unless you're a twit:
// console.log(obj.key1); // Always use dot notation!! 
// console.log(obj['key1']); // can be easily confused bc we use brackets for unknown properties 

// However, when you're using a variable for your key, you must use bracket notation:
var dynamicKey = 'key1';
// console.log(obj[dynamicKey]);  // correct
// console.log(obj.dynamicKey);  // undefined; looking for actual property 'dynamicKey'
// console.log(obj['key1']); // text editor will even tell you that dot notation is better!

// We use "for in" loops to loop through the object's keys, and use our iterator to access the values
for (var key in obj) {  // variable 'key' can be called anything you want
console.log(obj[key]); // val1 val2 val3 

}
