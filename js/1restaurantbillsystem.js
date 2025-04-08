function handlesubmit() {
  event.preventDefault();

  const food = parseInt(document.getElementById("food").value);

  const food_quantity = parseInt(
    document.getElementById("food_quantity").value
  );

  const fries = document.getElementById("fries").value;

  const fries_quantity = parseInt(
    document.getElementById("fries_quantity").value
  );

  const colddrink = document.getElementById("colddrink").value;

  const colddrink_quantity = parseInt(
    document.getElementById("colddrink_quantity").value
  );

  const drink_type = parseInt(document.getElementById("drink_type").value);

  // const store;

  // console.log(food,food_quantity,fries,fries_quantity);

  // ******************************************************** 1

  // if (food == 0|| food > 0) {
  //     document.getElementById("fooderror").innerHTML="";

  // } else {
  //     document.getElementById("fooderror").innerHTML="please select food";
  // }

  // if (food_quantity == 0 || food_quantity > 0     ) {
  //     document.getElementById("food_quantity_error").innerHTML="";
  // } else {
  //     document.getElementById("food_quantity_error").innerHTML="please select food_quantity";

  // }

  let tableprint = false;

  // if ((food == 0 && food_quantity == 0) || (food > 0 && food_quantity > 0)) {
  //     document.getElementById("fooderror").innerHTML="";
  // } else {
  //     document.getElementById("fooderror").innerHTML="please select food";
  //     tableprint=true;

  // }

  if (food > 0 && food_quantity > 0) {
    document.getElementById("fooderror").innerHTML = "";
  } else {
    document.getElementById("fooderror").innerHTML = "please select food";
    tableprint = true;
  }

  // ****************************************************** 2

  if (
    fries == 0 ||
    (fries === "no" && fries_quantity === 0) ||
    (fries === "yes" && fries_quantity > 0)
  ) {
    document.getElementById("frieserror").innerHTML = "";
  } else {
    document.getElementById("frieserror").innerHTML = "select fries";
    tableprint = true;
  }

  // ************************************************************* 3

  if (
    (colddrink == 0 && colddrink_quantity === 0 && drink_type === 0) ||
    (colddrink == "yes" && colddrink_quantity > 0 && drink_type > 0) ||
    (colddrink == "no" && colddrink_quantity === 0 && drink_type === 0)
  ) {
    document.getElementById("drinkerror").innerHTML = "";

    // console.log("hghgh");
  } else {
    document.getElementById("drinkerror").innerHTML = "please select drink";
    tableprint = true;
  }

  // if ( tableprint) {
  //     console.log("table print ");

  // } else {
  //  console.log("table not");

  // }

  let foodname;

  if (food == 500) {
    foodname = "pizza";
  } else if (food == 100) {
    foodname = "burger";
  } else if (food == 50) {
    foodname = "bread batter";
  }

  let food_quantityname;

  if (drink_type == 80) {
    food_quantityname ="coco"
  } else if (drink_type == 45) {
    food_quantityname= "mango"
  } else if (drink_type == 55) {
    food_quantityname = "pepsi"
  }

  

  if (!tableprint) {
    console.log("table print");

    print = "";

    print = `
  <table border>
      <tr>
          <th>food</th>
          <th>type</th>
          <th>quantity</th>
          <th>price</th>
          <th>total price</th>
      </tr>
  
  `;

    print += `<tr>`;

    print += `<td>food</td>`;
    print += `<td>${foodname}</td>`;
    print += `<td>${food_quantity}</td>`;
    print += `<td>${food}</td>`;
    print += `<td>${food * food_quantity}</td>`;
    print += `</tr>`;

    print += `<tr>`;

    print += `<td>fries</td>`;
    print += `<td>fries</td>`;
    print += `<td>${fries_quantity}</td>`;
    print += `<td>150</td>`;
    print += `<td>${fries_quantity * 150}</td>`;
    print += `</tr>`;


    print += `<tr>`;

    print += `<td>colddrink</td>`;
    print += `<td>${food_quantityname}</td>`;
    print += `<td>${colddrink_quantity}</td>`;
    print += `<td>${drink_type}</td>`;
    print += `<td>${ colddrink_quantity*drink_type}</td>`;
    print += `</tr>`;

    print += `</table>`;

    document.getElementById("boxid").innerHTML = print;
  } else {
    document.getElementById("boxid").innerHTML = "";
  }
}
