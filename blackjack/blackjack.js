// Part 1

// Create an array with all the cards in a deck (2-10, J, Q, K A)
// Don't explicitly just write out an array with 52 cards
// You can write out a smaller array and then generate the rest
// Output the array of cards
// Part 2

// Goal: To create a program that chooses two cards from the deck at random and outputs its value in blackjack.
// To calculate the value of a hand of cards:
// 2-10 have the value of their number
// All face cards have the value of 10
// Ace is 1
// Part 3

// Goal: To create a program that chooses 3 cards at random,
// Have it output the cards and their blackjack value or
// Also include whether that value is "bust".
// Loop this program until there are no cards left in the deck.

var cards = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , "J" , "Q" , "K" , "A"];
var suits = ["Diamond", "Clubs","Hearts","Spades"];
var deck = [];

//makes the deck array consisting of the other two arrays
	for (i=0 ; i < cards.length; i++){
		var s = 0;

		for (s=0 ; s < suits.length; s++){
			var x = (cards[i] + " " + suits[s]);
			deck.push(x);
		}
	}

//shuffle the cards
	function shuffle(){
		// "m" is a temporary variable
		// "x" and "y" are the indexes of the elements you will be switching
		var m = deck.length, x, y;
		//while there is an element in m to shuffle
		while (m) {
			//Pick the remaining element
			y = Math.floor(Math.random() * m--);

			//swap y with the current element
			x = deck[m];
			deck[m] = deck[y];
			deck[y] = x;
		}
		return deck;
	}

var randomDeck = shuffle(deck);
// console.log(randomDeck);

//Taking your Hand

	for (i = 0 ; i < randomDeck.length ; i++){
		var cardA = randomDeck.pop();
		var cardB = randomDeck.pop();
		var cardC = randomDeck.pop();

		// CardA
		if ((cardA[0] === "J") || (cardA[0] === "Q") || (cardA[0] === "K")) {
			cardValueA = parseInt(10);
		} else if (cardA[0] === "1"){
			cardValueA = parseInt(10);
		} else if (cardA[0] === "A") {
			cardValueA = parseInt(1);
		} else {
			cardValueA = parseInt(cardA[0]);
		}

		//CardB
		if ((cardB[0] === "J") || (cardB[0] === "Q") || (cardB[0] === "K")) {
			cardValueB = parseInt(10);
		} else if (cardB[0] === "1"){
			cardValueA = parseInt(10);
		} else if (cardB[0] === "A") {
			cardValueB = parseInt(1);
		} else {
			cardValueB = parseInt(cardB[0]);
		}
		
		//CardC
		if ((cardC[0] === "J") || (cardC[0] === "Q") || (cardC[0] === "K")) {
			cardValueC = parseInt(10);
		} else if (cardC[0] === "1"){
			cardValueC = parseInt(10);
		} else if (cardC[0] === "A") {
			cardValueC = parseInt(1);
		} else {
			cardValueC = parseInt(cardC[0]);
		}
	
	}

var handValue1 = (cardValueA + cardValueB);
var handValue2 = (cardValueA + cardValueB + cardValueC);

function maybehit(){
	if (handValue2 > 21) {
		console.log("HIT " + handValue1 +" " + cardA + " " + cardB);
		console.log("BUST " + handValue2 + " " + cardA + " " + cardB + " " + cardC);

	} else if (handValue2 === 21) {
		console.log("HIT " + handValue1 + " " + cardA + " " + cardB);
		console.log("21! " + cardA + " " + cardB + " " + cardC);

	} else if (handValue1 > 17) {
		console.log("STAY " + handValue1 + " " + cardA + " " + cardB);		
	}
}

maybehit();




// var cards = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , "J" , "Q" , "K" , "A"];
// var suits = ["Diamond", "Clubs","Hearts","Spades"];
// var deck = [];

// //makes the deck array consisting of the other two arrays
// 	for (i=0 ; i < cards.length; i++){
// 		var s = 0;

// 		for (s=0 ; s < suits.length; s++){
// 			var x = (cards[i] + " " + suits[s]);
// 			deck.push(x);
// 		}
// 	}

// //shuffle the cards
// 	function shuffle(){
// 		// "m" is a temporary variable
// 		// "x" and "y" are the indexes of the elements you will be switching
// 		var m = deck.length, x, y;
// 		//while there is an element in m to shuffle
// 		while (m) {
// 			//Pick the remaining element
// 			y = Math.floor(Math.random() * m--);

// 			//swap y with the current element
// 			x = deck[m];
// 			deck[m] = deck[y];
// 			deck[y] = x;
// 		}
// 		return deck;
// 	}

// var randomDeck = shuffle(deck);
// // console.log(randomDeck);

// //Taking your Hand
// // trying to loop through without repitition.
// 	for (i = 0 ; i < randomDeck.length ; i++){
// 		var cardA = randomDeck.pop();
// 		var cardB = randomDeck.pop();
// 		var cardC = randomDeck.pop();
// 		var hand = ["cardA", "cardB", "cardC"];

// 		for (e = 0; e < hand.length; e++){
// 			// CardA
// 			if (((hand[e].charAt(0)) === "J") || (((hand[e].charAt(0))) === "Q") || (((hand[e].charAt(0)) === "K"))) {
// 				console.log(this[hand.indexOf(hand[e])]);
// 				this[hand.indexOf(hand[e]) + "Value"] = parseInt(10);
// 			} else if (e[0] === "1"){
// 				this[hand[e] + "Value"] = parseInt(10);
// 			} else if (e[0] === "A") {
// 				this[hand[e] + "Value"] = parseInt(1);
// 			} else {
// 				this[hand.indexOf(hand[e])] = parseInt((hand[e].charAt(0)));
// 			}
// 	}

// var handValue1 = (cardAValue + cardBValue);
// var handValue2 = (cardAValue + cardBValue + cardCValue);

// function maybehit(){
// 	if (handValue2 > 21) {
// 		console.log("HIT " + handValue1 +" " + cardA + " " + cardB);
// 		console.log("BUST " + handValue2 + " " + cardA + " " + cardB + " " + cardC);

// 	} else if (handValue2 === 21) {
// 		console.log("21! " + cardA + " " + cardB + " " + cardC);

// 	} else if (handValue1 > 17) {
// 		console.log("STAY " + handValue1 + " " + cardA + " " + cardB);		
// 	}
// }
// }

// maybehit();