var userNum = process.argv[2];
var firstArr = [0,1];

if ((isNaN(userNum)) || (userNum > 500)) {

	console.log("enter a number between 1 and 500")

	} else {
	
		for (i=0 ; i < userNum ; i++) {

			var x = ((firstArr[i]) + (firstArr[i+1]));
			firstArr.push(x); 
	}
}

console.log(firstArr);

