// Write a command line application in javascript.
// The application should have a function called zeroFront that returns an array that 
// contains the exact same numbers as the given array, but rearranged so that all the zeros are 
// grouped at the start of the array.
// The order of the non-zero numbers does not matter. -So [1, 0, 0, 1] becomes [0 ,0, 1, 1]. 
// You may modify and return the given array or make a new array. For example:

var zeroArr = [];
var otherArr = [];

function zeroFront(given){

	for (i=0; i<given.length; i++){
		if (given[i] === 0){
			zeroArr.push(given[i]);
		} else if (given[i] != 0){
			otherArr.push(given[i]);
		}
	}

	if (zeroArr.length > 0 && otherArr.length > 0){
		return zeroArr.concat(otherArr)
	}
}

console.log(zeroFront([1, 2, 6, 0, 0, 2, 0, 6, 0, 9]))