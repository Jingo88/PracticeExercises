// Write a function that takes the width and height of a rectangle as parameters and returns 
//the area of the rectangle. The area of a rectangle is width * height.

// Call this function 3 times with different parameters and log the results to the console.

// Bonus1: Make another function to return the perimeter of the rectangle. 
//The perimeter is width + width + height + height

// Bonus2: Make another function to return the area of a circle. 
//The area of a circle is Math.PI * radius * radius

function area(x,y){
	var z = x*y;
	// return z;
	console.log(z);
}

area(2,3);
area(34,21);
area(32,78);

function perimeter(x,y){
	var per = (x*2) + (y*2);
	// return z;
	console.log(per);
}

perimeter(2,3);
perimeter(19,56);
perimeter(75,2);

function circle(x) {
	var acirc = x * x * Math.PI;
	console.log(acirc);
}

circle(3);
circle(6);
circle(10);






