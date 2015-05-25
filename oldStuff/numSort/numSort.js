// Write a command line application that takes two integers as arguments. 
// The application should generate a random number; if the random number is lower than both 
// arguments log "too cold", if the random number is higher than both arguments log "too hot", 
// and if the random number is between the two arguments log "Just right!"
// Also log all three numbers in numerical order.

var numOne = parseInt(process.argv[2]);
var numTwo = parseInt(process.argv[3]);
var numRan = Math.round(Math.random(100-1)+1);
var numArr = [];

if (numRan < numTwo && numRan < numOne){
	console.log('this shit is too cold');
} else if (numRan > numTwo && numRan > numOne){
	console.log('this shit is too hot');
} else if ((numRan > numOne && numRan < numTwo) || (numRan < numOne && numRan > numTwo)){
	console.log('beautiful');
}

numArr.push(numOne);
numArr.push(numTwo);
numArr.push(numRan);

console.log(numArr.sort())


