
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// //1  NORMAL FUNCTION
// function greeting(v) {
//     console.log("hello janvi",v);
    
// }

// greeting(99);


// 2 arrow function (ES6)
// const greeting = (v) => {
//     console.log("hello" ,v);
    
// }

// greeting(60);

//////////////////////////////////////////////////


//array

// let arr =[10,20,30,40,50,60] // 1 opti
// let arr = new Array (10,20,30,40,50,99,999)

// console.log(arr, arr.length);

// for loop 1

// for (let i=0; i<arr.length; i++) {
//     console.log(i, arr[i]);
    
// }

//2
// arr.forEach(function(v ,i){
//     console.log(i,v);
    
// })

//3
// arr.forEach((v,i) =>{
//     console.log(i,v);
    
// })

//4
// arr.map((v,i)=> {
//     console.log(v,i);
    
// })

//5
// let arr =[10,20,30]
// arr.map((v,i) => console.log(v,i));


///////////////////////////////////////////////////////


// update array 
// let arr = [77,88,99,111]
// arr[2] = 999;
// console.log(arr);


//////////////////////////////////////////////////////



// let arr =[10,20,30,40,50,60]    /// both mate chhe delete and add mate

// let arr = [1,2,3,4,5,6]
// delete
// const ans = arr.pop()                 //delete at last   // return removed element
// const ans = arr.shift()               //delete at start   //return removed element
// const ans = arr.splice(3,2)              //delete at specific index, return array of removed elements
// const ans = arr.splice(2,2)  

// add
// const ans= arr.push(999);              // add at last    // return lenth of array
// const ans = arr.unshift(666);          // Add at start   // return lenth of array
// const ans = arr.splice(3,0,31,32,33)  // add at specific index  // return empty array
                                        

// console.log(arr ,ans);               /// both mate chhe delete and add mate












////////////////////////////////////////////////////////////////////


// let arr = [5,10,15,20,25,30,35,40,55,60]

// search 

// const ans = arr.includes(35)    // return boolean
// const ans =arr.some((v) => v>55)   // return boolean   conditinally check
// const ans = arr.find((v) => v>50)     // return first occurence of element when match
                      
                       // ans 55  jo compare ma bov moti value hoi ne e arr na ho to return undefined karshe
// console.log(ans);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  

//////////////////////////////////////////////////////////////////////

/// H.W  11-04-2025 ///

///////////////////////////////////////////////////////////

// 1 slice()  

// let arr= ["janvi" ,"nijal","bansi" ,"pinal" ,"radhi"]
// const ans = arr.slice(2 ,4);     //return :- je value tme removed karavi chhe te bija variable ma add thai jashe 
// const ans = arr.slice(-3);

// console.log(arr ,ans);   


///////////////////////////////////////////////////////////////


// map()

// let arr =[ 5,10,15,20,25,30,35]
// let ans=arr.map(test);
// function test(x){
//     return x+10;
// }

// console.log(ans);  	//The results of a function for each array element. new array ma value je tme mut ke karavi e kari aape
                        // return ma 10 plus karavi ya chhe te aad thai ne all value malshe 



////////////////////////////////////////////////////////////////


// filter()

// let ages = [10 ,2,30,40,50]
// const ans =ages.filter((v) => v>18)
// console.log(ans);     // ans filter ni condition ma je pass thashe te badhi value ne new add ma add karavi deshe mean return karshe


////////////////////////////////////////////////////////////////


// reduce()

// let add=[1,3,4,5,6];
// let adds=add.reduce((j1,j2) => {
//     return j1+j2
// })

// console.log(add,adds);    // je return ma work karavyu hoi e na add,mul,
                           //A value to be passed to the function as the initial value.



///////////////////////////////////////////////////////////////


//indexOf()

// let fruit = ["mango" , "chiku" , "apple" , "chiku" , "peru"] 
// const ans =fruit.indexOf("chiku" ,2);
// console.log(ans);             // return first occurence index


///////////////////////////////////////////////////////////////////

//lastindexOf()

// let cloth = [ "dres" , "kurta" ,"plaza", "anarkali" ,"shrara" ,"top" ];
// const ans =cloth.lastIndexOf("plaza")
// console.log(ans);
                             //// return last occurence index


//////////////////////////////////////////////////////////////////

// every()

// let sub = [80,90,89,85,99,89]
// const ans =sub.every((v) => v >=80);
// console.log(ans);   // all value jya suthi condition ma pas nai thai tya sudi false return karshe 


///////////////////////////////////////////////////////////////////

// findindex()

// let arr = [5,10,15,20,25,30,35,40,55,60]
// const ans = arr.findIndex((v) => v>50)  //ans return first occurence of elementindex when match
// console.log(ans);



////////////////////////////////////////////////////////////////


// fill()

// let fruit= ["mango" , "peru" ,"apple "];
// fruit.fill("banana");
// console.log(fruit);  //je name ke number ne fill karavyu te all value ne replace kari aape chhe 

////////////////////////////////////////////////////////////////

// sort()

// let nam = [ "zara" , "viya" , "siya" , "kavya" ,"janvi" , "bansi", "sanvi"]
// const ans =nam.sort()
// console.log(ans);     // a to z pramane reurn karshe


////////////////////////////////////////////////////////////////

// reverse()

// let nam = [ "zara" , "viya" , "siya" , "kavya" ,"janvi" , "bansi", "sanvi"]
// const ans =nam.reverse()
// console.log(ans);       // je valulu hal ma teni all reverse value return karshe 



///////////////////////////////////////////////////////////////













// let arr = [2,5,10,15,20];
// const ans = arr.push(25);
// console.log(arr ,ans);


// let arr =[ "janvi" , "mansi" , "bhumi"];
// const ans= arr.unshift("amisha")
// console.log(arr ,ans);


// let arr =["kavya" ,"pari" ,"nensi" ,"sanvi"];
// const ans= arr.splice(2,0,"parini")
// console.log(arr ,ans);


// let arr = [10,20,30,40,50,60]
// const ans =arr.pop();
// console.log(arr ,ans);


// let arr =[5,100,200,300,400,500];
// const ans=arr.shift();
// console.log(arr ,ans);


// let arr = ['rohan' , "sharik" ,"mayank" ,"mihir"];
// const ans =arr.splice(1,2);
// console.log(arr ,ans);




//slice

// let arr =[10,20,30,40,50,60,70];
// const ans=arr.slice(3,6);
// console.log(arr ,ans);



// map

// let arr = [5,10,15,20,25,60,80];


// arr.map((v,i) => {
//     console.log(v,i);
    
// })


//filter 

// let arr=[10,20,30,40,50,60]
// const ans=arr.filter((age) => {
//     console.log(age>20);
    
// })


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ class 11-04-2025

//////////////////////////////////////////////////////////////

// slice

// return part of the array minus index -1 start form last element

// let arr = [10,30,40,70,60,70];

// const ans =arr.slice(2,4)

// console.log(arr ,ans);


//////////////////////////////////////////////////////////////

// map 

// Iteration (visit each element) , return new array after any updation

// let arr = [10,20,30,40,50,50,70];

// const ans= arr.map((v,i) => v+5 )
// const ans =arr.map((v,i) => {})     /// return undefined

// console.log(arr ,ans);

/////////////////////////////////////////////////////////////////

// filter 

// return array of element who passed condition  ,
//  give empty array when condition is not true for all element

// let arr = [10,20,30,60,89,999]

// const ans =arr.filter((v,i) => v>5000 && v>100)

// console.log(arr,ans);


////////////////////////////////////////////////////////////////


// reduce 

// return accmator value after doing oparations
// three parameter ni need apdshe reduse ma 

// let arr = [10,20,30,60,89,999]
// const ans=arr.reduce((acc ,v ,i) => i%2 === 0 ? acc+v : acc+0 , 0)  // ans 129 and index even index
// const ans =arr.reduce((acc,v,i) => acc+v) // ans 1208 value no total

// console.log(arr,ans);  


//////////////////////////////////////////////////////////////



// indexOf();

// return index of first occurence of element 


// let arr = [10,30,40,70,60,40,70];

// const ans =arr.indexOf(40,3);

// console.log(arr,ans);

//////////////////////////////////////////////////////////////

// lastindexOf()

// return index of last occurence of element 


// let arr = [10,30,40,70,60,70,40,70];

// const ans=arr.lastIndexOf(40)

// console.log(arr ,ans);


////////////////////////////////////////////////////////////

// every 

// return boolen and give true if given condition true of all element 

// let arr = [10,20,30,60,89,999]

// const ans=arr.every((v,i) => v>99)

// console.log(arr,ans);

///////////////////////////////////////////////////////////////

// findindex 

// return index of first correct condition of element's index

// let arr = [10,20,30,60,89,999];
// const ans =arr.findIndex((v ,i) =>  v>55)

// console.log(ans);


//////////////////////////////////////////////////////////////


// fill

// return array with filled element  
// jm ke me fill ma 99 mukyu to all element 99 retuirn karshe 


// let arr = [10,20,30,60,89,999];

// const ans =arr.fill(9999 ,3);

// console.log(ans);


////////////////////////////////////////////////////////////////

// sort  in string like name 

 /// most use in 

 // sort string array property

//  let arr =["janvi" ,"mansi" ,"bhumi "]

//  const ans =arr.sort();

//  console.log(ans);

// ************************************

// sort use in number array 

//  but jo number hoi to number na first letter thi jova nu shru karshe so 

//   let arr = [10,20,30,60,89,999];
  
//   const ans=arr.sort((a,b) => a+b);
//   const ans=arr.sort((a,b) => a-b);

// sort na use ma jyare number valo array hoi tyare ganatari 
// kari ne samajvu k kai rite ans aaviyo 

//   console.log(ans);


// /////////////////////////////////////////////////////

// reverse 

// return reverse aaray 


// let arr =[50,89,80,70];

// const ans =arr.reverse()

// console.log(ans);


////////////////////////////////////////////////////////



// concat

// return array of combine tro or more array 

// let arr = [10,20,30];
// let arr1 = ["janvi" ,"bansi" ,"nijal"]

// const ans=arr.concat(arr1);

// console.log(ans);


/////////////////////////////////////////////////////////


// isArray

// return boolean  , check passed value is array or not

// let arr= [10,20];
// let arr= 100;

// const ans=Array.isArray(arr)
// console.log(ans);


///////////////////////////////////////////////////////////


// tostring 

// return string 

// let arr = [10,20,30,40,50];

// const ans =arr.toString();

// console.log(ans);

//////////////////////////////////////////////////////







  
 

 

 

























