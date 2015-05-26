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

	// if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')){
	// 	count++;
	// };

	// if (((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')) && ((nextLetter === 'a') || (nextLetter === 'e') || (nextLetter === 'i') || (nextLetter === 'o') || (nextLetter ==='u'))){
	// 	adjacent++;
	// };

	// if ((arr[i] != 'a') && (arr[i] != 'e') && (arr[i] != 'i') && (arr[i] != 'o') && (arr[i] !='u')){
	// 	consonants.push(arr[i]);
	// }
};

if ((count > 1) && (adjacent < 1)){
	console.log('It checks out');
} else if ((count > 1) && (adjacent >= 1)){
	console.log('nope');
} else {
	console.log('the vowels you seek are not here');
}
console.log('your consonants are ' + consonants);
