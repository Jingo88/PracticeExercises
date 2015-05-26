var a = parseInt(process.argv[2]);

if ((a % 3 === 0) && (a % 5 === 0)) {
  console.log("FizzBuzz");
} else if ( a % 5 === 0) {
  console.log("Buzz");
} else if (a % 3 === 0) {
  console.log("Fizz");
} else if (isNaN(a) === true){
	console.log("you did not enter a integer");
} else {
	console.log("your integer " + a + " is not divisible by three or five");
  console.log("You Know Nothing Jon Snow");
}

