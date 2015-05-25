// EXERCISE 1 DONE
// Write a function that takes in two parameters and returns true when there is one positive and one negative
// Using a simple if/else statment

// function posNeg(x,y){
// 	if ((x < 0) && (y > 0)) {
// 		console.log(x, y, " This is true");
// 	} else if ((x > 0) && (y < 0)) {
// 		console.log(x, y, " This is true");
// 	} else {
// 		console.log(x, y, " This is False");
// 	}
// }

// Using a ternary operator
// function posNeg(x,y) {
// 	(((x < 0) && (y > 0)) || ((x > 0) && (y < 0))) ? console.log("true") : console.log("false");
// }

//exercise 1 enhanced: return true if the third parameter is true and the first two are both negative.
// function posNeg(x,y, z) {
// 	(((x < 0)&&(y > 0)) || ((x > 0) && (y < 0)) || ((x < 0)&&(y<0) && (z === true))) ? console.log("true") : console.log("false");
// }
// posNeg(2, -4);
// posNeg(-5, 1);
// posNeg(-3, -18, true);
// posNeg(1, 2, true);



// EXERCISE 2 DONE
// Count the amount of "x's" in a given string.
// var userString = process.argv[2];
// var xxcount = 0;

// for (i=0; i<userString.length ; i++){
// 	if ((userString[i] === "x") && (userString[i+1] === "x")){
// 		xxcount++
// 	} 
// }
// 	console.log("There are " + xxcount + " double xx's in this string");



// EXERCISE 3 DONE
// Write a function that takes two parameters. If their sum is 10, or if one of the parameters is 10, return true
// function sumten(x,y){
// 	((x === 10) || (y === 10) || ((x + y) === 10)) ? console.log("There is a 10 here") : console.log("NO TEN");
// }
// sumten(12, 13);
// sumten(10, 1);
// sumten(3, 7);



// EXERCISE 4
// Return a string argument without the first and last character. The string must be at least two chars long
// var userPhrase = process.argv[2];
// // Uses the substring method.
// function cutoff(){
// 	var newPhrase = userPhrase.substr(1, userPhrase.length-2);
// 	console.log(newPhrase);
// }

// // Try to solve Exercise 4 without a provided method.

// cutoff();



// EXERCISE 5
// Build a full html tag with a phrase inside. 
// makeTags('i', 'yay') === <i> yay </i>
// function divmake(x, y){
// 	var userHeader = "< +x+ >" + y + " </ +x+ >";
// 	// document.getElementbyID(bodyclass).append(userHeader);
// 	console.log(userHeader)
// }

// divmake(div, hello);



// EXERCISE 6 DONE
// Write a command line program that takes two numbers and prints every number in between
// var userNum1 = parseInt(process.argv[2]);
// var userNum2 = parseInt(process.argv[3]);

// for (i = userNum1+1 ; i < userNum2 ; i++) {
// 	console.log(i);
// }



// EXERCISE 7 DONE
// given an array of words and an integer i return the array of words that are longer than i.
// var limit = parseInt(process.argv[2]);
// var words = ["this", "is", "an", "array", "for", "the", "sexy", "people"];
// var realwords = [];

// for (i=0; i<words.length; i++){

// 	if (words[i].length < limit) {
// 		realwords.push(words[i]);
// 	}
// }
// 	console.log(realwords);



// EXERCISE 8 DONE
// Given a person's name return their initials
// It should work with or without a middle name
// var name = process.argv[2];
// var nameArray = name.split(" ");

// for (i = 0 ; i < nameArray.length ; i++) {
// 	var initials = nameArray[i].charAt(0)
// 	console.log(initials)
// }


// EXERCISE 9 DONE
// Write a command line app (not a function) that returns a name randomly chosen from the cast of friends
// var friends = ["Jennifer Aniston", "Matthew Perry", "Matt Le'Blanc", "Courteney Cox", "Lisa Kudrow", "David Schwimmer"];
// var random = Math.floor(Math.random()*(friends.length-1)+1);
// console.log(random);
// console.log(friends[random]);



// EXERCISE 10
// Write code that performs the following actions. Refer to the firstnamelist array given below.

// Retrieve "Bumblebee" from the firstname list
// Add "Peter" to the firstnamelist
// Remove "Muffinmitts" from the firstnamelist
// Find out the index of "Scratchnsniff" in lastnamelist
// Combine 1 randomly selected name from firstnamelist and 1 randomly selected name from lastnamelist to form a name.

firstnamelist = ["Bumblebee", "Banderscoop", "Broccoli", "Rinkydink", "Bombadil", "Boilerduck", "Bandicoot", "Fragglerock", "Muffinmitts", "Crumplesack", "Congleton", "Blubberbrains", "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk", "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur", "Cogglesnatch", "Liverswort", "Bodybuild", "Johnnycash", "Burgerking", "Bonaparte", "Bunsenburner", "Billiardball", "Baseballmitt", "Blubberbett", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink", "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Anglerfish", "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Bentobox", "Pallettown", "Wimbledon", "Hairyhog", "Buttercup", "Blasphemy", "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp", "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery", "Bentobox", "Brandybuck"];

lastnamelist = ["Coddleswort", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell", "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush", "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage","Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn", "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff", "Snugglesnatch", "Charizard", "Carrotstick", "Cumbertoot", "Crackerknack", "Crucifix", "Cuckatoo", "Crackletot", "Collywog", "Gigglesnort", "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside","Coggleswort", "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese", "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash", "Camelhump", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese", "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot", "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips", "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite"];

var bee = firstnamelist.indexOf("Bumblebee");
console.log(firstnamelist[bee]);

var peter = firstnamelist.push("Peter");
// console.log(firstnamelist);

var mitts = firstnamelist.indexOf("Muffinmitts");
var remitts = firstnamelist.splice(mitts,1);
console.log(firstnamelist);

var sniff = lastnamelist.indexOf("Scratchnsniff");
console.log(sniff);

var random1 = Math.floor(Math.random() * (firstnamelist.length -1) + 1);
var random2 = Math.floor(Math.random() * (lastnamelist.length -1) + 1);
console.log(firstnamelist[random1] + " " + lastnamelist[random2]);



