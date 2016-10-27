// Bootcamp Prep - Why "while" loops don't work with objects

var disneyMovies = {
	aladdin: {
		release: "11/25/1992"
	},
	lionKing: {
		release: "6/24/1994" 
	},
	toyStory : {
		release: "11/22/1995"
	},
};

var property = 0;

// Using a "while" loop will not work to iterate over an object as they do not have indexes, so we have to use a "for..in" loop 

// while(disneyMovies.length < property){  
// 	console.log(disneyMovies[property]);
// 	property++;
// }


for(var movie in disneyMovies) {  //declaring a var just like i, could be named anything. It doesn't matter  
	console.log(disneyMovies[movie].release); // need to access second layer to get property's value  
}
