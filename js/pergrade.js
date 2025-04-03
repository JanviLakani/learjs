const per = parseInt(prompt("please enter your per"));

let garde;

if (per >= 91 && per <= 100) {
    grade='A';
} else if (per >= 81  && per < 91) {
    grade='B';
} else if (per >= 71 && per < 81 ) {
    grade='C';
}

console.log(per);
// console.log(grade);



document.getElementById("grade").innerHTML=grade