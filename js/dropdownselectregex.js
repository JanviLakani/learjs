function handlesubmit() {
    event.preventDefault();

    let selectcountry =document.getElementById("selector").value;

        console.log(selectcountry);
        
    // document.getElementById("error").innerHTML;

 
    // if (selectcountry === "") {
 
    //     document.getElementById("error").innerHTML;


    // } else {
    //     let sel =/^(!?--\s*[Ss]elect\s*--)$/;

    //     if (let.test(selector)) {
    //         document.getElementById("error").innerHTML="";

    //     } else {
    //         document.getElementById("error").innerHTML="please enter ";
    //     }
    // }

    if (selectcountry === "") {
        document.getElementById("error").innerHTML="please enter ";
    } else {
        
    }



}