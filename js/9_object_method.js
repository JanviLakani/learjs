// *************************** Object.keys met   1
// let course= {
//     clangu : "2 month",
//     html : "1.5month",
//     css : "2month"
// }

// console.log(Object.keys(course));  // property name ko ek array me return karta hai ["2 month", "1.5month", "2month"]


// *************************** Object.value met   2


// let car ={
//     color : "black",
//     price : "8lac",
//     model : "2024",
//     company : "kia"
// }

// console.log(Object.values(car)); //  car object ke sabhi values ko return karta hai ek array mein.

// ****************************** Object.entries method 3

// let fruit = {
//     name: "Mango",
//     color: "Yellow",
//     taste: "Sweet",
    
//   }

//   console.log(Object.entries(fruit));   /// Ye array of arrays return karta hai e original array ko change nai karta 
                                           // . Har array ke andar ek key aur uski value hoti hai.

//  ******************************* Object.fromEntries() 4  

// let entries = [ ["name", "Mango"], ["color", "Yellow"] ];

// let result = Object.fromEntries(entries);

// console.log(result);


// ********************************** Object.hasownproperty  5
// let car ={
//     color : "black",
//     price : "8lac",
//     model : "2024",
//     company : "kia"
// }

// console.log(Object.hasOwn(car , "color"));  /// true false return kartai hai 




// ******************************** Object.freeze  6

// let student ={
//     name : "kartik",
//     age : 25,
//     class : "bca",
//     collage : "bmu",
// }

// // delete student.name;    

// console.log(Object.freeze(student));  // Us object ke kisi bhi property ko update, add, ya delete nahi kiya ja sakta.

// delete student.name;
                                        //Freeze hone ke baad object immutable ban jata hai.

// *********************************************************** 
  
  

