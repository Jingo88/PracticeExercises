//EXERCISE 1
// For this exercise, consider "Y" to be a consonant.

// Write a command line application that takes one word as an argument. 
//If the word has more than one vowel log "It checks out."

// If the word has more than one vowel AND no vowels are adjacent log "It checks out", otherwise log "nope".

// For example, "Eat" returns "nope", "Ate" returns "It checks out"

//instead of logging "It checks out", log the consonants in the word.

// var check = process.argv[2];

// var count = 0;
// var adjacent = 0;

// var arr = check.split('');

// var consonants = [];

// for (i=0 ; i < check.length; i++){
// 	var letter = check.charAt(i);
// 	var nextLetter = check.charAt(i+1);

// 	if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')){
// 		count++;
// 	};

// 	if (((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')) && ((nextLetter === 'a') || (nextLetter === 'e') || (nextLetter === 'i') || (nextLetter === 'o') || (nextLetter ==='u'))){
// 		adjacent++;
// 	};

// 	if ((arr[i] != 'a') && (arr[i] != 'e') && (arr[i] != 'i') && (arr[i] != 'o') && (arr[i] !='u')){
// 		consonants.push(arr[i]);
// 	}
// };

// if ((count > 1) && (adjacent < 1)){
// 	console.log('It checks out');
// } else if ((count > 1) && (adjacent >= 1)){
// 	console.log('nope');
// } else {
// 	console.log('the vowels you seek are not here');
// }

// console.log(consonants);





//EXERCISE 2
// Write a command line application that takes two integers as arguments. 
// The application should generate a random number; if the random number is lower than both 
// arguments log "too cold", if the random number is higher than both arguments log "too hot", 
// and if the random number is between the two arguments log "Just right!"
// Also log all three numbers in numerical order.

// var numOne = parseInt(process.argv[2]);
// var numTwo = parseInt(process.argv[3]);
// var numRan = Math.round(Math.random(100-1)+1);
// var numArr = [];

// if (numRan < numTwo && numRan < numOne){
// 	console.log('this shit is too cold');
// } else if (numRan > numTwo && numRan > numOne){
// 	console.log('this shit is too hot');
// } else if ((numRan > numOne && numRan < numTwo) || (numRan < numOne && numRan > numTwo)){
// 	console.log('beautiful');
// }

// numArr.push(numOne);
// numArr.push(numTwo);
// numArr.push(numRan);

// console.log(numArr.sort())





//ANSWERS FROM CRAWFORD

// EIEInope
//
// var arg = process.argv[2].toLowerCase()
// var vowelCount = 0
// for(var i = 0; i<arg.length; i++) {
//   if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
//     vowelCount ++;
//   }
// }
// console.log(vowelCount);

//
// BONUS 1
// var arg = process.argv[2].toLowerCase()
// var vowelcheck = 0
// var vowelspot = []
// var vowelCount = 0
// for(var i = 0; i<arg.length; i++) {
//   if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
//     vowelCount ++
//     vowelspot.push(i)
//		}
//     if (i === arg.length - 1 && vowelCount > 1){
//       for(var j = 0; j<vowelspot.length; j++) {
//         if (vowelspot[j] - vowelspot[j + 1] === -1 ) {
//           console.log("nope")
//           break
//         } else if (j === vowelspot.length - 1){
//           console.log("it checks out")
//         }
//       }
//   }
// }
//
// Bonus 2
// var arg = process.argv[2].toLowerCase()
// var consonant = []
// var vowelcheck = 0
// var vowelspot = []
// var vowelCount = 0
// for(var i = 0; i<arg.length; i++) {
//   if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
//     vowelCount ++
//     vowelspot.push(i)
//   } else {
//     consonant.push(arg[i])
//   }
//   if (i === arg.length - 1 && vowelCount > 1){
//     for(var j = 0; j<vowelspot.length; j++) {
//       if (vowelspot[j] - vowelspot[j + 1] === -1 ) {
//         console.log("nope")
//         break
//       } else if (j === vowelspot.length - 1){
//         console.log(consonant)
//       }
//     }
//   }
// }
//
//
// stuck in the middle with args
// var arg1 = parseInt(process.argv[2])
// var arg2 = parseInt(process.argv[3])
// var lower
// var upper
// if (arg1 > arg2) {
//   upper = arg1;
//   lower = arg2;
// } else {
//   upper = arg2;
//   lower = arg1;
// }
//
// var rando = Math.floor(Math.random()*10)
// if (lower > rando) {
//   console.log("too cold")
//   console.log(rando + " " + lower + " " + upper)
// } else if (upper < rando) {
//   console.log("too hot")
//   console.log(lower + " " + upper + " " + rando)
// } else {
//   console.log("just right")
//   console.log(lower + " " + rando + " " + upper)
// }
//
// even on a jet plane
// var stringArr = process.argv
// for (var i = 2; i<stringArr.length; i++) {
//   if (stringArr[i].length % 2 === 0) {
//     console.log(stringArr[i])
//   }
// }
//
// we want the func
// var num = process.argv[2]
// var string = process.argv[3]
// var evenator = function(num, string) {
//   if (num % 2 === 0) {
//     console.log(string)
//   } else {
//     console.log(string.split("").reverse().join(""))
//   }
// }
// evenator(num, string)
//
//
// gotta have the func
// var counter = 0
// var sayHi = function() {
//   console.log("BASS IN YER FACE");
//   counter++;
//   if(counter === 4){
//     clearInterval(refreshIntervalId);
//   };
// }
//
// var refreshIntervalId = setInterval(sayHi, 3000);
//
// foreman swears he learned his math
//
// var Dozer = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.backup = function() {
//     console.log("THE DOZER WILL NOT CLEAR A PATH")
//   }
// }
// var Bob = new Dozer("Rivers", "Blue")
// console.log(Bob.name)
// console.log(Bob.color)
// Bob.backup()
//
// it's a final countdown
// var body = document.querySelector("body")
// var p = document.createElement("p")
// body.appendChild(p)
// var counter = 10
// var countdown = function() {
//   p.innerText = counter;
//   counter --;
//   if(counter < 0){
//     p.innerText = 0;
//     body.setAttribute("style", "background-color: red; color: white")
//     clearInterval(refreshIntervalId);
//   }
// }
//
// var refreshIntervalId = setInterval(countdown, 1000);













