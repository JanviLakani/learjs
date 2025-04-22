
let todoarray = [];

update=null;

// ***************************************************************  
// mix function for sort and search

const searchsorthandle = () => {

    let val=document.getElementById("search").value;
    let valuesort=document.getElementById("sort").value;  

    console.log(val,valuesort);

    let vval=todoarray.filter((v,i) => v.toLowerCase().includes(val.toLowerCase()))

    console.log(vval);
    

    if (valuesort === 'az') {
        vval=vval.sort();
    } else {
        vval=vval.sort().reverse();
    }

    console.log(vval);
    

    showdata(vval);

}

// ************************************************************ sort 

// const sorthandle = ()=> {

//   let valuesort=document.getElementById("sort").value;  //2

//   console.log(todoarray,valuesort);

// //   todoarray.sort();

//     let ssvalue=[];              //4
//   if (valuesort === 'az') {
//     ssvalue=todoarray.sort();
//   } else {
//     ssvalue=todoarray.sort().reverse();
//   }
  
//   showdata();

// }

// ********************************************************** search

    // const searchhandle = () => {
    //     let val=document.getElementById("search").value; //1
        
    //     console.log(todoarray,val);
        
        
   
    //     const vval=todoarray.filter((v,i) => v.toLowerCase().includes(val.toLowerCase())) //3

    //     console.log(vval);


    //     showdata(vval);

    // }


// ******************************************************* editbtn 

const editbtn = (editindex) => {

    // console.log(editindex, todoarray[todoarray]);
    
    document.getElementById("todo").value=todoarray[editindex];

    console.log("hello");
    
    update=editindex;
}

// ******************************************************** deletebtn 

const deletebtn = (deleteindex) => {
    todoarray.splice(deleteindex , 1);

    showdata();
    
}


// ******************************************************* display 
const showdata = (vval=[]) =>{

    if (vval.length === 0) {

        let print = ``;

        todoarray.map((v,i)=> {
            print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                            <button onclick="editbtn(${i})">edit</button>
            </li>`
           
        })
        document.getElementById("disk").innerHTML=print;


    } else {
        let print = ``;

        vval.map((v,i)=> {
            print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                            <button onclick="editbtn(${i})">edit</button>
            </li>`
        })
        
        document.getElementById("disk").innerHTML=print;

    }

    // let print = ``;

    // todoarray.map((v,i)=> {
    //     print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
    //                     <button onclick="editbtn(${i})">edit</button>
    //     </li>`
    // })

    // document.getElementById("disk").innerHTML=print;

}

// ******************************************************* mainfun 
const todosubmit = ()=>{
    event.preventDefault();
    let todovalue=document.getElementById("todo").value;

    // console.log(todovalue);
    
    document.getElementById("todoarror").innerHTML="";


    if (todovalue === "") {
        document.getElementById("todoarror").innerHTML="please enter todo";
    } else {
        document.getElementById("todoarror").innerHTML="";

        // todoarray.push(todovalue);

        console.log(todoarray);

        if (update === null) {
            todoarray.push(todovalue);
        } else {
            todoarray[update]=todovalue;
            update=null;
        }
        
    }

    showdata();

    document.getElementById("todo").value="";
}

