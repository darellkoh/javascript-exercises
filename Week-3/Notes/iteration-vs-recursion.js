// Iterative
function countdownIteratively(n) {
	for (var i = n; i > 0; i--) {
		console.log(i);
	}
	console.log('Done iterating!');
}

// Recursive
function countdownRecursively(n) {
	console.log(n);
	if (n > 0) {
		countdownRecursively(n-1);
	} else {
		console.log('Done recurring!');
	}
}

countdownRecursively(25);
//25
// 24
// 23
// 22
// 21
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done recurring!
