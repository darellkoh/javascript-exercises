// Return "YourName plays the banjo!" if your name begins with an "S" or "s". 
// Otherwise, return "YourName does not play the banjo!". 

function areYouPlayingBanjo(name) {
    if (name[0] === "s" || name[0] === "S") {
        return name + " plays banjo!"; 
    } else {
    	return name + " does not play banjo!"; 
    }
}

