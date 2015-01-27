//a callback is a function that is passed to another function

//Sequence this runs in
// 1 - event added to button
// 2 - function fired when button is clicked (happens later)
//event listeners usually don't take any parameters and don't return anything
// the method of event listener will happen immediately BUT the function inside will run later

//the top listener is best practice, bottom explains why.
var button = document.querySelector("button");
var x = 0;
//cannot put var x inside the function, it will negate "x++"
button.addeventlistener('click', function(){
	alert(x);
	x++;
});
//the function inside is called an anonymous function. 

//blah.addeventlistener('click')
//is the same thing as 
//blah.onclick

var x = 0;
var f = function(){
	alert(x);
	x++;
};
// this is the same as the event listener up top
button.addeventlistener('click', f);

//the second part VIOLATES encapsulation
//anonymous function is considered better practice because for a person 
//to understand what is happening with the function the event listener helps
//imagine seeing the function by itself without click, or var x. you wouldn't know what the fuck it's used for. 
//this one button has this one function. why break it up into two parts? it would just confuse people


//with a return
button.addeventlistener('click', function(){
	alert(x);
	x++;
	return x;
});
//return does nothing here. the x++ can still increment the variable, however 


var ret = button.addeventlistener('click', function(){
	alert(x);
	x++;
	return x;
});



//CALCULATOR HOMEWORK
//functions that take functions assume stuff about the function it is taking in
//

var f = function(x,y,z){
	return x+y+z;
}

var add = function(x,y){
	return x+y;
}

var calc = function(func, x, y){
	return func(x,y);
}

var answer = calc(add);
console.log(answer);

//this will not change the value of z
//X is the parameter and you are passing in the value of Z, not Z itself
var z = 0
var f = function(x){
	alert(x);
	x++
}
f(z);











