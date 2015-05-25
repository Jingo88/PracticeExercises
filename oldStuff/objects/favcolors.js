//Use the Object.keys method to grab all the keys from the
//hash and loop through them one by one. Using the loop only
//print the people from the hash that have a favorite color
//of pink or purple

var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}

// console.log(Object.keys(colors));

var people = Object.keys(colors);

for (i = 0; i < people.length ; i++) {
	var name = people[i];
	var favoritecolor = colors[name];
	// console.log(name);
	// console.log(favoritecolor);

		if ((favoritecolor === "purple") || (favoritecolor ==="pink")) {
			console.log(name);
		}
}

