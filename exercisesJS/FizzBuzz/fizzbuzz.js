var a = parseInt(process.argv[2]);

if ((a % 3 === 0) && (a % 5 === 0)) {
  console.log("Fizzbuzz");
} else if ( a % 5 === 0) {
  console.log("Buzz");
} else if (a % 3 === 0) {
  console.log("Fizz");
} else {
  console.log("You Know Nothing Jon Snow");
}
