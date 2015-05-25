// Write a function that takes in two parameters and returns true when there is one positive and one negative
// Using a simple if/else statment

function posNeg(x,y){
	if ((x < 0) && (y > 0)) {
		console.log(x, y, " This is true");
	} else if ((x > 0) && (y < 0)) {
		console.log(x, y, " This is true");
	} else {
		console.log(x, y, " This is False");
	}
}

// Using a ternary operator

function posNeg(x,y) {
	(((x < 0) && (y > 0)) || ((x > 0) && (y < 0))) ? console.log("true") : console.log("false");
}

//return true if the third parameter is true and the first two are both negative.

function posNeg(x,y, z) {
	(((x < 0)&&(y > 0)) || ((x > 0) && (y < 0)) || ((x < 0)&&(y<0) && (z === true))) ? console.log("true") : console.log("false");
}
posNeg(2, -4);
posNeg(-5, 1);
posNeg(-3, -18, true);
posNeg(1, 2, true);