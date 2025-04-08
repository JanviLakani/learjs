function handlesubmit() {

event.preventDefault();

const food=parseInt(document.getElementById("food").value)

const food_quantity=parseInt(document.getElementById("food_quantity").value)


const fries=document.getElementById("fries").value

const fries_quantity=parseInt(document.getElementById("fries_quantity").value)


const colddrink=document.getElementById("colddrink").value

const colddrink_quantity=parseInt(document.getElementById("colddrink_quantity").value)

const drink_type=parseInt(document.getElementById("drink_type").value)


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



if ((food == 0 && food_quantity == 0) || (food > 0 && food_quantity > 0) ) {
    document.getElementById("fooderror").innerHTML="";
} else {
    document.getElementById("fooderror").innerHTML="please select food";
}


// ****************************************************** 2 


if ((fries == 0 || fries === "no" && fries_quantity === 0 ) || (fries === "yes" && fries_quantity > 0  )) {
    document.getElementById("frieserror").innerHTML="";
} else {
    document.getElementById("frieserror").innerHTML="select fries";
}



// ************************************************************* 3 


if ((colddrink == 0 && colddrink_quantity === 0 && drink_type === 0) || 
(colddrink == "yes" && colddrink_quantity > 0 && drink_type > 0) || 
(colddrink == "no" && colddrink_quantity === 0 && drink_type === 0 )) {
    document.getElementById("drinkerror").innerHTML="";

    // console.log("hghgh");
    
} else {
    document.getElementById("drinkerror").innerHTML="please select drink";

}

// const totalprice;



// let foodbox="";

// let print = `

// <table>
// <tr>
//     <th>foodname</th>
//     <th>quantity</th>
//     <th>price</th>
// </tr>
// </table>


// `; if (food != 0 && food_quantity != 0) {
//     if (food == 500) {
//         foodbox= "pizza"
//     } else if (food ==100 ) {
//         foodbox="burger"
//     } else if (food == 50) {
//         foodbox="bread batter"
//     }
//     print += `<tr>`
    
//     print += `<td>${food}</td>`
//     print += `<td>${quantity}</td>`
//     print += `<td>${food*food_quantity}</td>`
    
//     print +=  `</tr>`;

//     document.getElementById("boxid").innerHTML=print;


// }


// const totalprice=food*food_quantity + fries*fries_quantity + colddrink_quantity*drink_type




}