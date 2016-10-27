// Array Filter Function

// Example 1 
function isBigEnough(value) {
  return value >= 10;
}

var myArr = [12, 5, 8, 130, 44]; 

var filteredArr = myArr.filter(isBigEnough); 
filteredArr; // [ 12, 130, 44 ]

//Example 2 
var myArr = [1,2,'cat','dog',3];

function isNumber(item) {
    return typeof item === 'number';
    }

var newArr = myArr.filter(isNumber); //returns [1,2,3]
newArr; //returns [1,2,3]

