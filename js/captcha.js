
// **************************************************************************

// const n1=Math.floor(Math.random() * 10);
// // const n1=Math.floor(Math.random() * 10);

// // console.log(n1);

// const n2=Math.floor(Math.random() * 10);

// // console.log(n2);


// document.getElementById("num1").innerHTML=n1;
// document.getElementById("num2").innerHTML=n2;


// function handleonsubmit(){

//     const uservalue = parseInt(document.getElementById("ans").value)


//     ans = n1 + n2;

//     if (uservalue === ans) {
//         alert("correct ans");     
//     } else {
//         alert("incorrect ans");
//     }
// }
 
// ********************************************************************************


function handlechange() {
    document.getElementById("documentContainer").style.backgroundColor="yellow";

    // console.log("done");
    


    let c=document.getElementById("country").value;

    console.log("c");

    if (c === 'uk') {
        document.getElementById("documentContainer").style.backgroundColor="yellow";
    } else if (c === 'in') {
        document.getElementById("documentContainer").style.backgroundColor="red";
    } else if ( c === 'usa') {
        document.getElementById("documentContainer").style.backgroundColor="pink";
    } else if (c === 'ger') {
        document.getElementById("documentContainer").style.backgroundColor="black";
    } else if (c === 'it') { 
        document.getElementById("documentContainer").style.backgroundColor="green";
    } else {
        document.getElementById("documentContainer").style.backgroundColor="white";
    }
    
}







