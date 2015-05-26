var check = process.argv[2];

var count = 0;
var adjacent = 0;

var arr = check.split('');

var consonants = [];

for (i=0 ; i < check.length; i++){
	var letter = check.charAt(i);
	var nextLetter = check.charAt(i+1);

	switch(letter){
		case 'a':;
		case 'e':;
		case 'i':;
		case 'o':;
		case 'u': 
			count++;
			break;
		default: consonants.push(letter);
	};

	switch(true){
		case (letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u' )&& (nextLetter === 'a' || nextLetter==='e' || nextLetter==='i' || nextLetter==='o' || nextLetter==='u'):
			adjacent++;
			break;
	}
};

switch(true){
	case count > 1 && adjacent < 1: 
		console.log('It checks out');
		break;
	case count >1 && adjacent >= 1:
		console.log('nope');
		break;
	default: console.log('The vowels you seek are not here');
}
console.log('your consonants are ' + consonants);
