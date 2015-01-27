// For this exercise, consider "Y" to be a consonant.

// Write a command line application that takes one word as an argument. 
// If the word has more than one vowel log "It checks out."

// If the word has more than one vowel AND no vowels are adjacent log "It checks out", otherwise log "nope".

// For example, "Eat" returns "nope", "Ate" returns "It checks out"

// instead of logging "It checks out", log the consonants in the word.

var check = process.argv[2];

var count = 0;
var adjacent = 0;

var arr = check.split('');

var consonants = [];

for (i=0 ; i < check.length; i++){
	var letter = check.charAt(i);
	var nextLetter = check.charAt(i+1);

	if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')){
		count++;
	};

	if (((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')) && ((nextLetter === 'a') || (nextLetter === 'e') || (nextLetter === 'i') || (nextLetter === 'o') || (nextLetter ==='u'))){
		adjacent++;
	};

	if ((arr[i] != 'a') && (arr[i] != 'e') && (arr[i] != 'i') && (arr[i] != 'o') && (arr[i] !='u')){
		consonants.push(arr[i]);
	}
};

if ((count > 1) && (adjacent < 1)){
	console.log('It checks out');
} else if ((count > 1) && (adjacent >= 1)){
	console.log('nope');
} else {
	console.log('the vowels you seek are not here');
}

console.log(consonants);
