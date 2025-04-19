const todoarray = [];

let update = null;

// ******************************************* edit btn

const editbtn = (editindex) => {
  // console.log(editindex ,todoarray[editindex]);

  document.getElementById("todo").value = todoarray[editindex];

  update = editindex;
};

// ******************************************* delete btn

const deletebtn = (delindex) => {
  todoarray.splice(delindex, 1);

  showtodo();
};

// ****************************************** showtodo

const showtodo = () => {
  let print = ``;

  todoarray.map((v, i) => {
    print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                        <button onclick="editbtn(${i})">edit</button>
                </li>`;
  });
  document.getElementById("show").innerHTML = print;
};

// ******************************************* main

const submittodo = () => {
  event.preventDefault();

  let valueget = document.getElementById("todo").value;

  // console.log(valueget);

  if (valueget === "") {
    document.getElementById("todoerror").innerHTML = "please enter your todo";
  } else {
    document.getElementById("todoerror").innerHTML = "";

    // todoarray.push(valueget);

    // console.log(todoarray);

    if (update === null) {
      //1
      todoarray.push(valueget);
    } else {
      todoarray[update] = valueget;
      update = null;
    }
  }
  showtodo();

  document.getElementById("todo").value = ""; // 2
};
