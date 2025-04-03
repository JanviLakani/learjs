
// function myfunction() {  
//     console.log("hello");
    
// }

// function myfunctionn() {
//     console.log("hii");
    
// }
// function mouseout() {
//     console.log("mouseout");
    
// }
// function mousedoun() {
//     console.log("mousedoun");
    
// }

// function mouseup() {
//     console.log("mouseup");
    
// }

// function mousemove() {
//     console.log("mousemove");
    
// }

// function keydown(){
//     const janvi =document.getElementById("on").value;
//     console.log("janvi");
    
// }

// function keyup(){
//     const y = document.getElementById("on1").value;
//     console.log("y");
    
// }


// function focusfunction(element) {
//     document.getElementById("fname").style.background="red"

// }


// function focusfunction(element) {

//     element.style.background = "yellow";

// }
// function blurfuntion(element) {
//     element.style.background = " ";
// }


// When you enter the input field, a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which sets the background color to red.

// function focusfunction(inputId) {
//     document.getElementById(inputId).style.background = "yellow";
// }

// function blurfunction(secondInputId) {
//     document.getElementById(secondInputId).style.background = "pink";
// }


// function handlechange() {
    
//     const selectcountry = document.getElementById("Country").value;
//     document.getElementById("text1").textContent="selected country";+selectcountry;
// }

function onfocus1(){
    // console.log("focus");
    
    document.getElementById("focus").style.backgroundColor="red";
    document.getElementById("focus").style.color="pink";
    document.getElementById("focus").style.textTransform="uppercase";
    // document.getElementById("focus").style.textTransform="lowercase";


}

// function onblur2() {
//     const y =document.getElementById("focus").value;
//     console.log(y.toUpperCase());
//     document.getElementById("focus").value= " ";
    
    
// }



function onblur1(){
    document.getElementById("focus").style.backgroundColor="pink";

}

function handleonchange() {
    const uk =document.getElementById("Country").value;
    console.log(uk);
    
}

function handlesubmit(){
    event.preventDefault();
    const a =document.getElementById("focus").value;
    const b =document.getElementById("Country").value;
    console.log(a,b);
    
      
}

let mywindow;

function openwindow() {
    
    mywindow = window.open("http://www.google.com","","width=200px,height=200px,left=300px,top=200px");
}

function closewindow(){
    mywindow.close();
}


function resizewindow() {
    mywindow.resizeby("width=250px, height=250px")
}


// ************************************* 

function handlewindow() {
    console.log("onload event window");
    
}

window.onload=handlewindow();

function handleonunload(){
    console.log("unload");
    
}

window.onunload=handleonunload;



function handleonresize() {
    console.log(window.innerHeight,window.innerWidth);
    
}

window.onresize=handleonresize













