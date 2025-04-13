
// *********************************************************** 1 
// function myfunction() {  
//     console.log("hello");
    
// }

// <!-- **************************************************** 2 

// function myfunctionn() {
//     console.log("hii");
    
// }

// <!-- **************************************************** 2 


// function mouseout() {
//     console.log("mouseout");
    
// }

// <!-- **************************************************** 2 


// function mousedoun() {
//     console.log("mousedoun");
    
// }

// <!-- **************************************************** 2 

// function mouseup() {
//     console.log("mouseup");
    
// }


// <!-- **************************************************** 2 

// function mousemove() {
//     console.log("mousemove");
    
// }

// <!-- **********************   key   ****************************** 2 

// function keydown(){
//     const janvi =document.getElementById("on").value;
//     console.log("janvi");
    
// }

// <!-- **************************************************** 2 

// function keyup(){
//     const y = document.getElementById("on1").value;
//     console.log("hello world    ");
    
// }

// <!-- **************************************************** 2 


// function focusfunction(element) {
//     document.getElementById("fname").style.background="red"

// }

// <!-- **************************************************** 2 


// function focusfunction(element) {

//     element.style.background = "yellow";

// }

// <!-- **************************************************** 2 

// function blurfuntion(element) {
//     element.style.background = " ";
// }

// <!-- **************************************************** 2 


// When you enter the input field, a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which sets the background color to red.

// function focusfunction(inputId) {
//     document.getElementById(inputId).style.background = "yellow";
// }

// <!-- **************************************************** 2 

// function blurfunction(secondInputId) {
//     document.getElementById(secondInputId).style.background = "pink";
// }

// <!-- **************************************************** 2 


// function handlechange() {
    
//     const selectcountry = document.getElementById("Country").value;
//     document.getElementById("text1").textContent="selected country";+selectcountry;
// }

// <!-- **************************************************** 2 

// function onfocus1(){
//     console.log("focus");
    
//     document.getElementById("focus").style.backgroundColor="red";
//     document.getElementById("focus").style.color="pink";
//     document.getElementById("focus").style.textTransform="uppercase";
//     document.getElementById("focus").style.textTransform="lowercase";


// }

// <!-- **************************************************** 2 

// function onblur2() {
//     const y =document.getElementById("focus").value;
//     console.log(y.toUpperCase());
//     document.getElementById("focus").value= " ";
    
    
// }

// <!-- **************************************************** 2 



// function onblur1(){
//     document.getElementById("focus").style.backgroundColor="pink";

// }

// <!-- **************************************************** 2 

// function handleonchange() {
//     const uk =document.getElementById("Country").value;
//     console.log(uk);
    
// }


// <!-- **************************************************** 2 

function handlesubmit(){
    event.preventDefault();
    const a =document.getElementById("focus").value;
    const b =document.getElementById("Country").value;
    console.log(a,b);
    
      
}

// <!-- **************************************************** 2 

// let mywindow;

// function openwindow() {
    
//     mywindow = window.open("http://www.google.com","","width=200px,height=200px,left=300px,top=200px");
// }

// <!-- **************************************************** 2 

// function closewindow(){
//     mywindow.close();
// }

// <!-- **************************************************** 2 


// function resizewindow() {
//     mywindow.resizeby("width=250px, height=250px")
// }

// <!-- **************************************************** 2 


// // ************************************* 

// function handlewindow() {
//     console.log("onload event window");
    
// }



// window.onload=handlewindow();

// function handleonunload(){
//     console.log("unload");
    
// }

// window.onunload=handleonunload;



// function handleonresize() {
//     console.log(window.innerHeight,window.innerWidth);
    
// }

// window.onresize=handleonresize













