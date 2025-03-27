let income = parseInt (prompt ("please enter your income"));
console.log(income);

let tex;

if (income <= 100000 && income >= 0) {
    tex=0;
} else if ( income <= 600000 && income >= 300000) {
    tax=income*0.05;
} else if (income <= 900000 && income > 600000) {
    tex=income*0.1;
} else if (income <= 1200000 && income > 900000) {
    tex=income*0.15;
} else if (income <=1500000 && income > 1200000) {
    tex=income*0.2;
} else if (income < 1500000) {
    tex=income*0.3;
} else {
    console.log("no");
    
}

console.log("your tex is=",tex);



