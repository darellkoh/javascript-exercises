/*
	GENE SEQUENCE 
	
	DNA molecules consist of two strands of paired amino acids. 
	
	The four amino acids found in DNA are adenine, cytosine, guanine, and thymine. Each of these bases are often abbreviated a single letter: A (adenine), C (cytosine), G (guanine), T (thymine).
	
	Adenine pairs with Thymine, and Cytosine pairs with Guanine (and vice versa)
	
	So a pair of DNA strands may look like such:
	
		--A--G--C--T--
		--T--C--G--A--
		
		
	
	Create a funciton sequence() that consumes a single string representing an individual strand of DNA. This string will contain the characters A,G,C and T seperated by double dashes. Your function will log out the completed strand including the input strand and it's complement strand on the line below
	
	ex)
		sequence('--A--G--C--T--G--A--') ==>
		
			--A--G--C--T--G--A--
			--T--C--G--A--C--T--
*/ 

// Version 2: using objects 
function sequence(DNA) {
	var dictionary = {
		A: 'T',
		T: 'A',
		G: 'C',
		C: 'G'
	}; 
	
	var arr = []; 
	var newStrand = ''; 
	for(var i = 0; i < DNA.length; i++) {
		var indivChar = DNA[i]; 
		if(indivChar !== '-') {
			var pair = dictionary[indivChar]; 
			// console.log(pair); 
			arr.push(pair); 
			// console.log(arr); 
		}
	}
	newStrand = '--' + arr.join('--') + '--'; 
	console.log(DNA); 
	console.log(newStrand); 
	
}
sequence('--A--G--C--T--G--A--'); 
// --A--G--C--T--G--A--
// --T--C--G--A--C--T--


sequence('--G--T--T--A--C--A--'); 
// --G--T--T--A--C--A--
// --C--A--A--T--G--T--




	
