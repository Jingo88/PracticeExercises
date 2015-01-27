// Write objects that will contain the following info about the Ninja Turtles:
// name, color, weapons, namedAfter, likesPizza.

// For reference:
// Leonardo - blue, ninjato, Leonardo da Vinci, true
// Michelangelo - orange, nunchucks, Michelangelo Buonarroti, true
// Raphael - red, sai, Raffaello Sanzio da Urbino, true
// Donatello - purple, bo, Donato di Niccolo di Betto Bardi, true

// Store the objects in an array and print out the name for each turtle.
// Bonus: Print out the information for every turtle like this:

// Leonardo wears a blue bandana, his weapon is ninjato, he is named after Leonardo da Vinci, and he likes pizza.

// var leo = {
// 	"name" : "Leonardo",
// 	"color" : "blue",
// 	weapons : "ninjato",
// 	namedAfter : "Leonardo da Vinci",
// 	likesPizza : "true",
// 	pizzaEaten : "false",
// }

// var mic = {
// 	"name" : "Michelangelo",
// 	"color" : "orange",
// 	weapons : "nunchucks",
// 	namedAfter : "Michelangelo Buonarroti",
// 	likesPizza : "true",
// 	pizzaEaten : "false",
// }

// var raph = {
// 	"name" : "Raphael",
// 	"color" : "red",
// 	weapons : "sai",
// 	namedAfter : "Raffaello Sanzio da Urbino",
// 	likesPizza : "true",
// 	pizzaEaten : "false",
// }

// var don = {
// 	"name" : "Donatello",
// 	"color" : "purple",
// 	weapons : "bo",
// 	namedAfter : "Donato di Niccolo di Betto Bardi",
// 	likesPizza : "true",
// 	pizzaEaten : "false",
// }

// var tmnt = [leo, mic , raph , don];


// for (i=0; i < tmnt.length; i++){
// 	var turtle = tmnt[i];
// 	console.log(turtle["name"] + " wears a " + turtle["color"] + " bandana, his weapon is " + turtle["weapons"] + ", he is named after " + turtle["namedAfter"] + ", and he likes pizza");
// }


// Add a boolean property to Leonardo called pizzaEaten (initially set to false).
// Add a method to Leonardo called eatPizza() which does the following:
// 1. If pizzaEaten is true, print out "Leonardo has already eaten pizza." and set pizzaEaten to false. 
// 2. If pizzaEaten is false, print out "Leonardo is eating pizza." and set pizzaEaten to true.


// var leo = {
// 	"name" : "Leonardo",
// 	"color" : "blue",
// 	weapons : "ninjato",
// 	namedAfter : "Leonardo da Vinci",
// 	likesPizza : "true",
// 	pizzaEaten : "false",
// 	eatPizza: function(){

// 		if (this["pizzaEaten"] === "false") {
// 			console.log(this.name + " is eating pizza");
// 			this["pizzaEaten"] = true;
// 		} else {
// 			console.log(this.name+ " has already eaten");
// 			this["pizzaEaten"] = false;

// 		}
// 	}
// }

// leo.eatPizza();
// leo.eatPizza();


// Make a Turtle constructor that takes a name, a color, and a weapon.
// Also add a property called likesPizza that is set to true.
// Add the pizzaEaten property and eatPizza() method from the last exercise, but use the turtle's name instead of just Leonardo's.

// Create an array of turtles using the data from the first exercise.

// To verify everything works:
// 1. Change the name of one of the turtles to your own name.
// 2. Print out the weapon of that turtle.
// 3. Add a new turtle for the person sitting next to you.
// 4. Print out the contents of the turtles array.

var ninjaturtles = function(name, color, weapons, likesPizza, pizzaEaten) {
	this.name = name;
	this.color = color;
	this.weapons = weapons;
	this.likesPizza = true;
	this.pizzaEaten = false;
	this.eatPizza = function(){
		if (this["pizzaEaten"] === "false") {
			console.log(this.name + " is eating pizza");
			this["pizzaEaten"] = true;
		} else {
			console.log(this.name+ " has already eaten");
			this["pizzaEaten"] = false;
		}
	}
}

var leo = new ninjaturtles("Leonardo", "blue", "katana");
var raph = new ninjaturtles("Jason", "red", "sai");
var don = new ninjaturtles("Donatello", "purple", "bo");
var mic = new ninjaturtles("Michelangelo", "orange", "nunchucks");
var shosh = new ninjaturtles("Shoshana", "red", "knitting pokers");

console.log([leo, raph, don, mic, shosh]);
console.log(raph.weapons);
leo.eatPizza();
leo.eatPizza();




