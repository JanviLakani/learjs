function handletretment() {
  event.preventDefault();

  let clean = document.getElementById("tre").value;
  // console.log(clean);

  let tretment1, seating, costing;

  // console.log(tretment1);

  if (clean === "tc") {
    tretment1 = "teethcleaning";
    seating = 1;
    costing = 500;
  } else if (clean === "fl") {
    tretment1 = "fillings";
    seating = 2;
    costing = 1500;
  } else if (clean === "rct") {
    tretment1 = "root canal tretment";
    seating = 4;
    costing = 2500;
  } else if (clean === "rcc") {
    tretment1 = "ret+cover";
    seating = 6;
    costing = 12000;
  } else if (clean === "bi") {
    tretment1 = "braces/invisalign";
    seating = 12;
    costing = 35000;
  }

  console.log(tretment1, seating);
  console.log(costing);

  let print = ``;

  if (clean !== "st") {
    print = `
    
<table border>
   <tr>
       <th>treatment</th>
       <th>seating</th>
       <th>costing</th>
   </tr> 

`;
    print += `<tr>`;
    print += `<td>${tretment1}</td>`;
    print += `<td>${seating}</td>`;
    print += `<td>${costing}</td>`;
    print += `</tr>`;
  }



//   console.log(print);

  document.getElementById("add").innerHTML = print;



// ***************************************************** 














}
