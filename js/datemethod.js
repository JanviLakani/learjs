///JavaScript Date Objects

//Using new Date()
// new Date() without arguments, creates a date object with the current date 
// and time:

// const date = new Date();
// document.getElementById("date").innerHTML = date;

// const date = new Date("2022-03-25");
// document.getElementById("date").innerHTML = date;


// (2)
// Creating Date Objects?

// JavaScript new Date() :--

// new Date() creates a date object with the current date and time:

// const d = new Date();
// document.getElementById("date").innerHTML = d;


// ans current date 


// (3)
// A date object can be created with a specified date and time:

// const d = new Date("May 7, 1998  11:13:00");
// document.getElementById("date").innerHTML = d;


// ans specific date 

// (4)
// A date object can be created with a specified date and time: 

// const d = new Date("june 08, 2000 12:15:00");
// document.getElementById("date").innerHTML = d;

// ********************************* 

// new Date(year, month, ...) 
    

// Using new Date(7 numbers), creates a new date object with the 
// specified date and time:

// 7 numbers specify year, month, day, hour, minute, second,
//  and millisecond (in that order):

// const d = new Date(1999, 6, 5, 10, 33, 30, 0);
// document.getElementById("date").innerHTML = d;


// const d = new Date();
// console.log(d);

// console.log(d.getDate());

// console.log(d.getMonth());

// console.log(d.getFullYear());

// console.log(d.getHours());

// console.log(d.getMinutes());

// console.log(d.getTimezoneOffset());

// console.log(d.getUTCDate());

// console.log(d.toLocaleDateString());

// console.log(d.toLocaleTimeString());


/////////////  set /////////////

// const d = new Date();

// d.setDate(20);
// d.setFullYear(2022);
// d.setHours(2);
// d.setMinutes(6);
// d.setMonth(5);

// console.log(d);


let x = 16.958;

console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));
console.log(Math.trunc(x));

console.log(Math.sign(-4));

console.log(Math.pow(3,5));

// 3*3*3*3*3

console.log(Math.random());


























