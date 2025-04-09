function handlesubmit( ){
    event.preventDefault();
// console.log("ok");

// const processori=document.getElementsByName("processor").value
// console.log("processori");

// const ramgb=document.getElementsByName("ram").value;
// console.log("ramgb");








// let processorid=document.getElementsByName("processor")
// const pcram=document.getElementsByName("ram")
// const memorygb=document.getElementsByName("memory")
// const graphicscardys=document.getElementsByName("graphicscard")

// console.log(processorid);

// let processorpc = [];

// for (let i=0; i<processorid.length; i++) {
//     console.log(processorid[i].checked);

//     if (processorid[i].checked) {
//         processorpc.push(processorid[i].value)
//         console.log(processorpc);
        
//     }  
// }



// if (processorpc.length < 1) {
//     document.getElementById("pcerror").innerHTML="please select processors"
//     console.log("pcerror");
    
// } else {
//      document.getElementById("pcerror").innerHTML=""
// }


// let pcram=document.getElementsByName("ramerror")
// console.log(pcram);

// let processorram=[];

// for (let i=0; i<pcram.length; i++) {
//     console.log(pcram[i].checked);
    

//     if (pcram[i].checked) {
//         processorram.push(pcram[i].value)
//         console.log(processorram);
        
//     }
// }

// if (pcram.length < 1) {
//      document.getElementById("ramerror").innerHTML="please select processors"
// } else {
//      document.getElementById("ramerror").innerHTML=""
// }


// let pcmemory=document.getElementById("memoryerror")
// console.log(pcmemory);

// let processormemory=[];

// for (let i=0; i<pcmemory.length; i++) {
//     console.log(pcmemory[i].checked);

//     if(pcmemory[i].checked) {
//         processormemory.push(pcmemory[i].value)
//         console.log(processormemory);
         
//     }

//     if (pcmemory.length < 1) {
//          document.getElementById("memoryerror").innerHTML="please select processors";
//     } else {
//          document.getElementById("memoryerror").innerHTML="";
//     }
    
// }



// let pcram=document.getElementsByName("ram");

let errorbox=false;


// ************************************************************************ 1 
let pcprocessor=document.getElementsByName("processor");

let pcprocessorvalue=[];

for (let i=0; i<pcprocessor.length; i++) {
    if(pcprocessor[i].checked)
        pcprocessorvalue.push(pcprocessor[i].value);
        console.log(pcprocessorvalue);
    
}

// let blockerror=false;
if (pcprocessorvalue == "") {
    document.getElementById("pcerror").innerHTML="select processor";
    errorbox=true;
    // blockerror=true;
} else {
     document.getElementById("pcerror").innerHTML="";
}




// ************************************************************************ 2

let pcram=document.getElementsByName("ram");


let pcramvalue=[];

for (let i=0; i<pcram.length; i++) {
    if (pcram[i].checked)
        pcramvalue.push(pcram[i].value);
        console.log(pcramvalue);       
}

if (pcramvalue == "") {
    document.getElementById("ramerror").innerHTML="select pcram"
    errorbox=true;
} else {
    document.getElementById("ramerror").innerHTML=""
}





// ************************************************************************ 3
let pcmemory=document.getElementsByName("memory");


let pcmemoryvalue=[];

for (let i=0; i<pcmemory.length; i++) {
    if (pcmemory[i].checked)
        pcmemoryvalue.push(pcmemory[i].value)
        console.log(pcmemoryvalue);
        
}

if (pcmemoryvalue == "") {
    document.getElementById("memoryerror").innerHTML="select memory";
    errorbox=true;
} else {
     document.getElementById("memoryerror").innerHTML="";
    //  console.log(memoryerror);
     
}


// ************************************************************************ 4
let pcgraphicscard=document.getElementsByName("graphicscard");



let graphicscardvalue=[];

for (let i=0; i<pcgraphicscard.length; i++) {
    if (pcgraphicscard[i].checked) 
        graphicscardvalue.push(pcgraphicscard[i].value) 
        // console.log(graphicscardvalue);
        
}

if (graphicscardvalue == "") {
    document.getElementById("graphicscarderror").innerHTML="select graphics card";
    errorbox=true;
} else {
    document.getElementById("graphicscarderror").innerHTML="";
}

if ( ! errorbox) {
    // console.log("table print");
    let pctype;

    if (pcprocessorvalue<=10000) {
        pctype="student pc;"
    } else if (pcprocessorvalue >=15000 && pcprocessorvalue <=20000 ) { 
        if (pcramvalue >= 1000) {
            pctype="profectional pc"
        } else {
            pctype="stdent pc"
        }

    } else if (pcprocessorvalue >= 20000 && pcramvalue >= 2000 && pcmemoryvalue >= 5000 && graphicscardvalue >= 8000 ) {
        pctype="gaming pc"
    } else {
        pctype="profectional pc"
    }
    
} else{
    console.log("table not print ");
    
}












}