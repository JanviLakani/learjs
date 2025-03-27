

// JavaScript Number Methods :---------------------------------


// (1) The toString() method converts a number to a string.

// let x = 123;
// document.getElementById("number").innerHTML=
// x.toString() + "<br>" +
// (123).toString()+ "<br>" +
// (100 + 23).toString();

/// ans 123


/// (2) toExponential()	Returns a number written in exponential notation

// let x = 9.656;
// document.getElementById("number").innerHTML =
// x.toExponential() + "<br>" +
// x.toExponential(2) + "<br>" +
// x.toExponential(4) + "<br>" +
// x.toExponential(6) + "<br>" +
// x.toExponential(8);

/// (3)  toFixed() method rounds a number to a given number of digits.

// let x = 9.656;
// document.getElementById("number").innerHTML =
// x.toFixed(0) + "<br>" +
// x.toFixed(2) + "<br>" +
// x.toFixed(4) + "<br>" +
// x.toFixed(6);

/// (4) toPrecision() method returns a string, with a number written with a 
//      specified length:

// let x = 9.656;
// document.getElementById("number").innerHTML = 
// x.toPrecision() + "<br>" +
// x.toPrecision(2) + "<br>" +
// x.toPrecision(4) + "<br>" +
// x.toPrecision(6);  


/// (5) valueOf() method returns a number as a number:

// let x = 123;
// document.getElementById("number").innerHTML = 
// x.valueOf() + "<br>" +
// (123).valueOf() + "<br>" +
// (100 + 23).valueOf();

///************************************************************** */

// Converting Variables to Numbers
///  There are 3 JavaScript methods that can be used to convert a variable to a number:

/// (1) Number()	Returns a number converted from its argument.

// document.getElementById("number").innerHTML =
// Number(true) + "<br>" +
// Number(false) + "<br>" +
// Number("10") + "<br>" +
// Number(" 10") + "<br>" +
// Number("10 ") + "<br>" +
// Number("10.33") + "<br>" +
// Number("10,33") + "<br>" +
// Number("10 33") + "<br>" +
// Number("janvi");


/// (2)

// toString()	Returns a number as a string

/// (*) JavaScript Global Functions :-
//The global JavaScript function parseInt() converts strings to numbers:

// (1) parseInt()	Parses its argument and returns a whole number :-

// document.getElementById("number").innerHTML=
// parseInt ("-10") + "<br>" +
// parseInt("-10.33") + "<br>" +
// parseInt ("30 6") + "<br>" +
// parseInt("20 year") + "<br>" +
// parseInt ("year 20");


/// (3)  parseFloat() method converts strings to numbers:

// document.getElementById("number").innerHTML = 
// parseFloat("10") + "<br>" +
// parseFloat("10.33") + "<br>" +
// parseFloat("10 6") + "<br>" +  
// parseFloat("30 years") + "<br>" +
// parseFloat("years 10");   


/// ****************************************************************** ///

// (1) Number.isInteger() method returns true if the argument is an integer. 
/// Returns true if the argument is an integer


// The Number.isInteger() Method


// document.getElementById("number").innerHTML =
// Number.isInteger(10) + "<br>" + Number.isInteger(10.5);

// ans true false

// (2) isSafeInteger() method returns true if the argument is a safe integer.
/// Returns true if the argument is a safe integer

// document.getElementById("number").innerHTML =
// Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567895);

// (3) parseFloat() converts strings to numbers:
/// Converts a string to a number


// document.getElementById("number").innerHTML = 
// Number.parseFloat("10") + "<br>" +
// Number.parseFloat("10.33") + "<br>" +
// Number.parseFloat("10 20 30") + "<br>" +
// Number.parseFloat("10 years") + "<br>" +
// Number.parseFloat("years 10");



// (4) parseInt() converts strings to whole numbers:
// Converts a string to a whole number

// document.getElementById("number").innerHTML = 
// Number.parseInt("-10") + "<br>" +
// Number.parseInt("-10.33") + "<br>" +
// Number.parseInt("10") + "<br>" +
// Number.parseInt("10.33") + "<br>" +
// Number.parseInt("10 6") + "<br>" +  
// Number.parseInt("10 years") + "<br>" +  
// Number.parseInt("years 10");  









