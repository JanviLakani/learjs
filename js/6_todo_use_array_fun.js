
function handleonsubmit() {


    event.preventDefault(); 
        
let todoname=document.getElementById("name").value;

console.log(todoname);



if (todoname === "") {
    document.getElementById("nameerror").innerHTML="please enter your todo";
} else {

    let todolist =/^[a-zA-Z ]{2,30}$/;

    if (todolist.test(todoname)) {
        document.getElementById("nameerror").innerHTML="";
    } else {
        document.getElementById("nameerror").innerHTML="please enter valid todo";
    }
}


}
