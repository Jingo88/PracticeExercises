var a = parseInt(process.argv[2]);

switch(true){
	case a%3 === 0 && a%5 === 0: 
		console.log("FizzBuzz");
		break;
	case a%5 === 0:
		console.log("Buzz");
		break;
	case a%3 === 0:
		console.log("Fizz");
		break
	case isNaN(a) === true:
		console.log("You did not enter a number");
		break;
	default: 
		console.log("your integer " + a + " is not divisible by three or five");
  		console.log("You Know Nothing Jon Snow");
}
