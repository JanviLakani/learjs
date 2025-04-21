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

// ***********************************************************  // v.seet[0]

// class

// let person = {
//     name : "pinal",
//     age : "22"
// }

// console.log(Object.keys(person));  // return array of keys

// console.log(Object.values(person)); // return array of value

// console.log(Object.entries(person)); // return array of property

// console.log(Object.fromEntries(Object.entries(person))); // return ofject from array of properties array

// console.log(person.hasOwnProperty("city")); 

// Object.freeze(person);  // freeze object

// person.city="vapi";

// console.log(person);


// ******************************************************************** 

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]


let vdate=institues.map((v,i)=> {
    return {
        name : v.name,
        seat : [Object.fromEntries(Object.entries(v.seat[0]).filter(([k , v]) => v > 0 ))]
        
    }

})


console.log(vdate);   

                                        // key hase e return karshe 0 > 

let vvdata=vdate.filter((v)=> Object.keys(v.seat[0]).length > 0 )

console.log(vvdata);











  
  

