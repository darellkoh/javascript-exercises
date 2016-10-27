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

// Version 1: using helper functions 

// Strategy: 
// Find all edge cases
// Write helper function to swap genes 
// If statements to eliminate edge cases 
// Transpose original characters to new characters, add to new string
// Console.log out DNA itself and new string, one on top of the other 

function swap (initialGene) {
	if(initialGene === 'A') return 'T';
	if(initialGene === 'T') return 'A'; 
	if(initialGene === 'G') return 'C'; 
	if(initialGene === 'C') return 'G'; 
	if(initialGene === '-') return '-'; 
}
swap('A'); // T
swap('C'); // G 
swap('T'); // A
swap('G'); // C 

function sequence(DNA) {
var newStr = "";
	// if not a string 
	if(typeof DNA !== 'string') {
		return "This is not a string."; 
			
	// if it is a string, check if it contains letters from gene sequence 
	} else {
		// if it does not contain letters from gene sequence 
		for(var i = 0; i < DNA.length; i++) {
			if(DNA[i] !== 'A' && DNA[i] !== 'T' && DNA[i] !== 'G' && DNA[i] !== 'C' &&DNA[i] !== '-') {
				return "This string does not contain any gene sequences."; 
			// if it does contain letters from the gene sequence 
			} else {
				newStr += swap(DNA[i]); // call swap function, add to new string 
			}
		}
		console.log(DNA);  // original strand 
		console.log(newStr);  // new strand 
	}
}

sequence('--A--G--C--T--G--A--');  
// --A--G--C--T--G--A--
// --T--C--G--A--C--T--

sequence('--G--T--T--A--C--A--'); 
// --G--T--T--A--C--A--
// --C--A--A--T--G--T--

sequence('--B--M--C--H--I--K--'); // 'This string does not contain any gene sequences.' (edge case)

sequence(99189019); //'This is not a string ' (edge case)

// QED
