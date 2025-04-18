// let obj = new Object()
// console.log(obj);

// ********************************

// let obj={
//     fname : "janvi",
//     lname : "lakani",
//     gmail : "janvilakani9999@gmail.com"
// }

// delete obj.lname;
// console.log(obj);

// ********************************

// const car={
//     type : "i20",
//     model :'2024',
//     color : "black"
// }

// console.log(car);

// *****************************

// object creat

// using Object literal
// ES6
// CONTRUCTOR FUNCTION

// let obj=Object.create=({
//     fname: "pinal",
//     lname:"lathiya",
//     number: "9876543210"

// })

// delete obj.lname;
// // delete obj.number;

// console.log(obj.lname);

// console.log(obj);

// ***********************************

// CONTRUCTOR FUNCTION

// function User() {

// }

// ******************************************************* add

// var fees = {
//     rahul : 100,
//     rahil : 200,
//     ritul : 300
// }

// // document.writeln(fees.rahul + " " fees.rahil)

// fees.rani=1000
// fees.mahi=999

// console.log(fees);

//  ***********************************************************

//  class

// let arr = [10,20,30];  // array

// let obj = {
//     id : 10,
//     age : 20,
//     per : 30,
//     city : "palitana"
// }

// console.log(obj);

// get

// for ( let k in obj) {        // all key get karva mate for in k use karvu
//     console.log(k, obj[k]);

// }

// add

// obj.city = "surat";

// obj["city2"]="vapi";

// console.log(city2);

// get

// console.log(obj.age, obj["age"]);

// // update

// obj.age=99;

// delete obj.per;

// console.log(obj);

// ******************************* 1

// object assignment

// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(person.name, person.Age);

// ****** 2

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v,i) =>{
//     console.log(v,v.name, v.age);
//     // console.log(v);

//     // console.log(v, person.v);

// })

// ********** 3

// const person = [
//     {
//         name: "Amit",
//        age: 25,

//        course: [
//            "c",
//            "html"
//        ]
//     },

//     {
//         name: "Ami",
//        age: 22,
//        course: [
//            "c++",
//            "java"
//        ]
//     }
// ]

// person.map((v,i) => {
//     console.log(v.name, v.age,);
//     v.course.map((v1,i1) => {
//         console.log(v1);

//     })
// })

// ************************************ 4

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for (let k in myObj) {

//     // console.log(k, myObj[k]);

//     if (k === "cars") {
//         console.log(k, myObj[k]);

//         for (let p in myObj[k]) {
//             console.log(p,myObj[k][p]);

//         }

//     } else {
//         console.log(k, myObj[k]);
//     }

// }

// console.log(myObj);

// ***************************************** 5

// const person = [
//   {
//     name: "amit",
//     age: 19,
//     course: {
//       c1: "c",
//       c2: "html",
//     },
//   },
//   {
//     name: "mayur",
//     age: 20,
//     course: {
//       c1: "c",
//       c2: "html",
//     },
//   },
// ];

// person.map((v, i) => {
//   console.log(v.name, v.age, v.course);
// //   v.course.map((v1, i1) => {
// //     console.log(v1);
// //   });

// for (j in v.course) {
//     console.log(j,v.course);
    
// }


// });

// ************************************ 6 


// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// for (let k in data) {
//     console.log( data[k]);

//     if (k === "personal_info") {
//         console.log(data[k].name ,data[k].age ,data[k].city);   
//     } else if ( k === "courses") {
//         data[k].map((v,i)=>{
//             console.log(v.);
            
//         })
//     }
    
// }
