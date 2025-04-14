function handlesubmit() {

    event.preventDefault();

// let sport =document.getElementsByName("hobby")
// console.log(sport);

// let sportactivity = [];

// for (let i=0; i< sport.length; i++) {
//     console.log(sport[i].checked);

//     if (sport[i].checked) {
//         sportactivity.push(sport[i].value)
//         console.log(sportactivity);
        
//     }
    
// }

// if (sportactivity.length < 2) {
//     document.getElementById('checkerror').innerHTML="please select minimum 2 hobby";
// } else {
//     document.getElementById('checkerror').innerHTML="";
// }


let sport=document.getElementsByName("hobby")

console.log(sport);

let sportactivity =[];
for (i=0; i<sport.length; i++) {

    if(sport[i].checked) {
        sportactivity.push(sport[i].value)
        console.log(sportactivity);
        
    }
}

document.getElementById("checkerror").innerHTML=""

if (sportactivity.length < 2) {
    
document.getElementById("checkerror").innerHTML="select minimum 2 hobby";
} else {
    document.getElementById("checkerror").innerHTML="";
}




}