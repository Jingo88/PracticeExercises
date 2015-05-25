// EXERCISE ONE
// write a function that takes an array of numbers
// returns a new array of numbers that has even numbers removed
// var num = [ 3, 4, 5, 6, 20, 11];
// var b = removeEvens(num);

// function removeEvens(x) {
// 	var even = [];
// 	for (i=0 ; i< x.length; i++){
// 		if((x[i]%2 === 0) && (x[i] >=2 )) {
// 			even.push(x[i]);
// 		}
// 	}
// 	console.log(even);
// }
// removeEvens(num);


// EXERCISE TWO
// function merge string
// takes an array of names
// returns a string that is some greeting message containing all the names
// var stooges = ["Larry", "Curly", "Moe"];

// function mergeString(x){
// 	var phrase = "";
// 	for (i=0; i < x.length; i++){
// 		phrase = phrase + "Hello there " + x[i] + ". ";
// 	}
// 	console.log(phrase);
// }

// mergeString(stooges);



// EXERCISE THREE
// function merge array
// takes two arrays
// returns the combination of the two arrays
// BONUS combine the arrays in alternating syntax, like so:
// var fun = ["pretzels", "cheez-its", "m&ms"];
// var work = ["raisins", "dried apricots", "nuts"];
// var trailMix = mergeArray(fun, work);
// trailMix now equals ["pretzels","raisins", "cheez-its", "dried apricots", "m&ms", "nuts"];

// var gf = ["korean dramas", "youtube videos", "hip hop dancing", "green"];
// var me = ["video games", "muay thai", "eating", "red"];

// var date = mergeArray(gf, me);

// function mergeArray(x, y){
// 	var us = [];
// 	for (i=0; i < x.length; i++){
// 		us.push(x[i]);
// 		us.push(y[i]);
// 	}
// 	return us;
// }

// function mergeArray(x, y) {
// 	var us = [];
// 	for (i = 0; i < x.length; i++){
// 		us.push(x[i]);
// 	}
// 	for (j = 0; j< y.length; j++){
// 		us.push(y[j]);	
// 	}
// 	return us; //allows us to use the "us" variable outside of the function
// }
// var arr = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = mergeArray(arr, arr2);
// console.log(arr3);

//DO IT LIKE THIS
// would you use an if statement, to choose between the for loops, 
// maybe put an if statement in each of the for loops then use a return to stop the loop? 
//wrote a function to take the array with the greater length
// then put that in another function to develop a for loop
// in that for loop can print the a1[i] and a2[i] in the for loop
// push them through to a new array

// var a1 = [1,2,3,9];
// var a2 = [4,5];
// var a3 = mergeAlternating(a1,a2);
// a3 will be [1,4,2,5,3,9]

// function mergeAlternating(x, y) {
// 	var longer = "";
// 	if (a1.length > a2.length) {
// 		var longer = a1.length;
// 	} else if (a1.length < a2.length) {
// 		var longer = a2.length;
// 	} else {
// 		var longer = a1.length;
// 	}
// 	var combine = [];
// 	for (i=0; i < longer ; i++) {

// 		if ((a1.length > i) && (a2.length > i)) {
// 			combine.push(a1[i]);
// 			combine.push(a2[i]);
// 			console.log('hello');
// 		} else if (a2.length > a1.length) { 
// 			combine.push(a2[i]);
// 		} else if (a1.length > a2.length) {
// 			combine.push(a1[i]);
// 		}
// 	}
// 	return combine;
// }
// console.log(a3);




// EXERCISE FOUR
// function merge hashes
// takes two hashes
// returns the combination of two hashes
// Able to merge the two hashes, but not make them alternate. Solution given does not seem to work.

// var heroes = {
// 	"farmer" : "Luna",
// 	"ganker" : "Pudge",
// 	"solo off" : "Dark Seer",
// 	"support jungler" : "Sand King",
// 	"lane support" : "Lion",
// }

// var roles = {
// 	1 : "hard carry",
// 	2 : "semi - carry",
// 	3 : "carry and support",
// 	4 : "situational support",
// 	5 : "hard support",
// }


// // var keys = Object.keys(arr);

// function mergeHashes(x,y){
// 	//takes the keys of the two hashes
// 	var team = {};
// 	var xkeys = Object.keys(x);
// 	var ykeys = Object.keys(y);
// 	// var xvalue = [];
// 	// var yvalue = [];

// 	//console logs the values for each key in the "x" hash
// 	for (i=0; i< xkeys.length; i++){
// 		// xvalue.push(x[xkeys[i]]);
// 		team[xkeys[i]] = x[xkeys[i]];
// 	}
// 	//console logs the values for each key in the "y" hash
// 	for (j=0; j< ykeys.length; j++){
// 		// yvalue.push(y[ykeys[j]]);
// 		team[ykeys[j]] = y[ykeys[j]];
// 	}

// 	//trying to make the values enter in an alternating fashion
// 	// for (k=0; k < (xkeys.length); k++){
// 	// 	// if (k === xkeys.length){
// 	// 	// 	k = 0	
// 	// 	// } else {

// 	// 		for (g=0; g< xkeys.length; g++){
// 	// 			z[ykeys[g]] = yvalue[g];		
// 	// 			z[xkeys[g]] = xvalue[g];
// 	// 		}
// 	// 	// }	

// 	// console.log(xvalue);
// 	console.log(xkeys);
// 	// console.log(yvalue);
// 	console.log(ykeys);
// 	return(team);
// 	}

// console.log(mergeHashes(heroes, roles));

//given solution
// var mergeHashes = function(x,y) {
// 	var team = {}

// 	var xkeys = Object.keys(x);
// 	var ykeys = Object.keys(y);	

// 	for (i=0; i<xkeys.length; i++){
// 		var key1 = xkeys[i];
// 		team[key1] = x[key1];
// 	}

// 	for (i=0; i<ykeys.length; y++){
// 		var key2 = ykeys[i];
// 		team[key2] = y[key2];
// 	}
// 	return team
// }

// console.log(mergeHashes(heroes, roles));




// EXERCISE 5
// build a sheep constructor
// takes no parameters - returns an object with the following properties
// a name of "sheep"
// a species of "O. aries"
// a genus of "Ovis"
// a phylum of "Chordata"
// a kingdom of "Animalia"

// var sheep = function(){
// 	this.name = "sheep";
// 	this.species = "O. aries";
// 	this.genus = "Ovis";
// 	this.phylum = "Chordata";
// 	this.kingdom = "Animalia";
// }



// EXERCISE SIX
// takes a paseball player name and team, returns an object with that name and team as properties

// var baseballPlayer = function(name, team){
// 	this.name = name;
// 	this.team = team;
// }

// var james = new baseballPlayer("James Shields" , "Kansis City Royals");

// console.log(james);



// EXERCISE SEVEN
// constructor car. takes a car brand, model, and color
// returns an object with the following
// brand
// model
// color
// gear (initially "parked")
// stopped (initially true)
// and has the following methods
// drive
// changes gear to "drive" and stopped to false.
// prints out something like "Ford focus is in drive."
// accelerate
// if gear is set to "park", print out a message telling the user to switch to "drive' first.
// Otherwise, print something like "Ford focus is accelerating."
// stop
// print out someting like "Ford focus has stopped."
// change stopped to true.
// park
// if stopped is set to false, print a message telling the user to stop the car first.
// Otherwise, print something like "Ford focus is parked", and set the gear to "park".

// var car = function(brand, model, color){
// 	this.brand = brand;
// 	this.model = model;
// 	this.color = color;
// 	this.gear = "parked";
// 	this.stopped = true;
// 	this.drive = function(){
// 		this.gear = "drive";
// 		this.stopped = false;
// 		console.log('Veyron is in drive');		
// 	};
// 	this.accelerate = function(){
// 		if (this["gear"] = "parked"){
// 			console.log("switch gear to drive");
// 		} else {
// 			console.log("you're speed racer");
// 		}	
// 	}
// 	this.stop = function(){
// 		console.log("your expensive car has stopped");
// 		this.stopped = true;
// 	}
// 	this.park = function(){
// 		if (stopped = false) {
// 			console.log("you have to stop the car first");
// 		} else {
// 			console.log("You have parked the car");
// 		}
// 	}
// }

// var bugatti = new car("bugatti", "veyron", "red");
// bugatti.drive();
// bugatti.accelerate();
// bugatti.stop();
// bugatti.park();



// EXERCISE EIGHT
// constructor square
// take the following parameters
// takes the following parameters: x, y, width, height, color
// and returns an object with those parameters
// and the method draw which draws the square directly to the screen

// var square = function(x, y, width, height, color){
// 	this.x = x;
// 	this.y = y;
// 	this.width = width;
// 	this.height = height;
// 	this.color = color;
// }

// var mySquare = new square( 50, 50, 20, 20, "red");

// function draw(){
// 	ctx.fillStyle = this.color;
// 	ctx.fillRect = (this.x, this.y, this.width, this.height);
// }















