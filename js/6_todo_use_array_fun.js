let newtodo = [];

let update =null;

function handleonclick(i){

    console.log(i);
    
    newtodo.splice(i,1);

    
    
    display();
}

function handleedit(i) {

    

    console.log(i);
    
    console.log(i,newtodo[i])

    document.getElementById("name").value=newtodo[i];
    
}


function display(){
        


    let print = ``;

    newtodo.map((v, i) => {
      print += `<li>${v}<button onclick="handleonclick(${i})">d</button>
                        <button onclick="handleedit(${i})">xx</button>
      </li>`;
    });



    document.getElementById("disk").innerHTML = print;

    


}



function handleonsubmit() {
  event.preventDefault();

  let todoname = document.getElementById("name").value;

  console.log(todoname);

  if (todoname === "") {
    document.getElementById("nameerror").innerHTML = "please enter your todo";
  } else {
    let todolist = /^[a-zA-Z ]{2,30}$/;

    if (todolist.test(todoname)) {
      document.getElementById("nameerror").innerHTML = "";


    //   newtodo.push(todoname);

    //   console.log(newtodo);

    if (update === null) {
        newtodo.push(todoname);
    } else {
        newtodo(update);
        update=null
    }


 
    display();


    } else {
      document.getElementById("nameerror").innerHTML =
        "please enter valid todo";
    }


  }



       


}
