// Say Hello to my Little Friend

// Print Say Hello to my Little Friend to the terminal 2 seconds from now.

// Say Hello again to my Little Friend

// Print Say Hello Again to my Little Friend to the terminal every 2 seconds.


// var sayGoodMorning = function(){
// 	console.log("Good Morning");
// }
// console.log("Hello");

// setTimeout(sayGoodMorning, 2000);

// console.log("Goodbye");

var counter = 0;

var sayHi = function(){
	console.log("Hi");
	counter++;
	if(counter === 5) {
		clearInterval(refreshIntervalID);
	};
}

var refreshIntervalID = setInterval(sayHi, 500);

