//A variable is a named location in memory that can be used to store a value

/*declaring a variable called height*/
var height;
console.log(height);

//var vs let, `var` came with JavaScript and
//`let` was introduced much letter but it is advisable to use `let`

//var
var height;
console.log(height);

//let
let height;
console.log(height);

/*
## Initializing variables

When we add value or assign a value to a variable we initialized such variable.
To assign values to Variables we use the equal sign operator; `=`
let’s initialize our height variable:
*/
let height = 180;
let anotherHeight = height; /*we also declared anotherHeight and initialized it*/
console.log(height);
console.log(anotherHeight);

/*
initializing can be done together or seperatly
and an indepentent command,
here’s how:
*/
let height = 180;
let anotherHeight1 = height; 
let weight;
console.log(height);
console.log(anotherHeight);
weight = 70;
console.log(weight);

/*
if you put the variable name inside a console, the interpreter will print its value,
but if you enquote the variable name the interpreter will treat it as a text. 
*/
let height = 100;
console.log("height");
/*Declaration and Strict Mood
* 'use srict'; makes the interpreter act like mordern day JA interpreter
*/
height = 180;
console.log(height); //this will output 180 on old JS

//but if we do this
"use strict";

height = 180;
console.log(height);//we get: Uncaught ReferenceError: height is not defined
//that’s because   “use strict”  forces the interpreter to behave like modern JavaScript 

//changing the value of variables
let steps = 100;
console.log(steps);
steps = 120;//change from 100 to 120
console.log(steps);
steps = steps + 200;
console.log(steps);

/*declaing and initializing s string variable*/
let greeting = "hello";
/*declaing and initializing s number type variable*/
let counter = 100;
console.log(greeting);
greeting = 1;
console.log(greeting);

//Constants
/*
The const keyword is used to declare containers similar to variables.
With constant, once we declare and initialize a value to a type, we can’t change them.
*/
const greeting1 = "Hello!"; //how to define a const, always initialize

const greeting2 = greeting1; //initializing greeting2 with greeting1

greeting = "Hello";

const greeting3 = undefined; //you can also make it undefine to define later on.