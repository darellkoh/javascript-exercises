/*

Do You Play The Theremin?

- Fullstack Academy - JavaScript JumpStart

Description:

Create the function doYouPlayTheTheremin. If your name starts with the letter "S" or "s", you are playing the Theremin!

Examples

- INPUT: doYouPlayTheTheremin("Griffin")
- OUTPUT: "Griffin does not play the Theremin!";


- INPUT: doYouPlayTheTheremin("Scott");
- OUTPUT: "Scott plays the Theremin!";


Write Code Below!
*/

function doYouPlayTheTheremin(name){
	if(name[0].toLowerCase() === "s"){
		return name + " plays the Theremin!";
	} else { 
		return name + " does not play the Theremin!";
	}
}
doYouPlayTheTheremin("Maya Lin"); // 'Maya Lin does not play the Theremin!'

// I would love to learn how to play the Theremin one day! 

// **** Test Cases ****

// console.log(doYouPlayTheTheremin('Griffin'));
// console.log(doYouPlayTheTheremin('Scott'));
