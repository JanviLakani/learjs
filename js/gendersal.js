const gender = prompt("please enter gender ");
const salary = parseInt(prompt("please enter your salary"));
let bonus,income;

console.log(gender,salary);


if (salary < 10000)  {
    if ( gender == 'm' || gender == 'M') {
        bonus=(salary*0.02)
    } else if (gender == 'f' || gender == 'F') {
        bonus=(salary*0.03);
    } else {
        bonus=0;
    }

    console.log(bonus);
    
    
} else {
    console.log("you are not aligible in bonus")
}


