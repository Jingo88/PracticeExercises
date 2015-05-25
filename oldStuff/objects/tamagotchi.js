// Add the following methods to it:
// 1. bark() - prints out "ruff ruff
// 2. goOutside() - prints out "I own that tree now!"

// Make a variable named cat that is set to a new Tamagotchi. Add the following methods to it:
// 1. meow() - prints out "Meow!"
// 2. useLitterBox() - "Burried treasure!"

// Make a variable named fish that is set to a new Tamagotchi. Add the following method to it:
// 1. swim() - prints out "Just keep swimming..."

// Try the following:
// 1. Feed the dog twice.
// 2. Increase the dog's age twice.
// 3. Make the dog bark.
// 4. Make the dog go outside.
// 5. Make the cat meow.
// 6. Make the cat sleep.
// 7. Make the cat use the litter box.
// 8. Give the fish medicine twice.
// 9. Make the fish swim.

var tamagochi = function(hungry, sick, age){
	this.hungry = hungry;
	this.sick = sick;
	this.age = age;
	this.feed = function(){
		(this.hungry === true) ? console.log("That was yummy!") : console.log("No thanks, I'm full");
	};
	this.sleep = function(){
		console.log("zzzzzzzzz");
	};
	this.medicate = function(){
		(this.sick === true) ? console.log("I feel better now") : console.log("No thanks, I'm fine");
	};
	this.increaseAge = function(){
		this.age++;
		console.log("Happy Birthday to me!!!" + this.age);
	}
}

var dog = new tamagochi(false, false, 3);
var cat = new tamagochi(false, true, 5);
var fish = new tamagochi(true, false, 2);
	
dog.bark = function(){
	console.log("ruff ruff");
}

dog.goOutside = function(){
	console.log("I own that tree now");
}

cat.meow = function(){
	console.log("Meow!");
}

cat.useLitterBox = function(){
	console.log("Buried treasure");
}

fish.swim = function() {
	console.log("Just keep swimming...");
}


console.log(dog);
console.log(cat);
console.log(fish);
dog.feed();
dog.feed();
dog.increaseAge();
dog.increaseAge();
dog.bark();
dog.goOutside();
cat.meow();
cat.sleep();
cat.useLitterBox();
fish.medicate();
fish.swim();

