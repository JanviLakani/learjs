let arr = [];

function handleonsubmit() {
  event.preventDefault();

  let dailyruti = document.getElementById("todolist").value;

  console.log(dailyruti);

  // document.getElementById("texterror").innerHTML="please enter your todo";

  // if (dailyruti === "") {
  //     document.getElementById("texterror").innerHTML="please enter your todo";
  // } else {
  //     document.getElementById("texterror").innerHTML="";
  // }

  let dailwork = false;

  if (dailyruti === "") {
    document.getElementById("texterror").innerHTML = "please enter your todo";
    dailwork = true;

    // console.log("texterror");
  } else {
    let dailytodo = /^[a-zA-Z ]{2,30}$/;
    if (dailytodo.test(dailyruti)) {
      document.getElementById("texterror").innerHTML = "";
    } else {
      document.getElementById("texterror").innerHTML = "pleas enter valid todo";
    }
  }



  let ans = arr.push(dailyruti);

  document.getElementById("").value;


  console.log(arr, ans);

  
}
