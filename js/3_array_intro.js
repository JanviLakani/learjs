
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

let arr = [1,2,3,4,5,6]
// delete
// const ans = arr.pop()                 //delete at last   // return removed element
// const ans = arr.shift()               //delete at start   //return removed element
// const ans = arr.splice(3,2)              //delete at specific index, return array of removed elements
const ans = arr.splice(2,3)  

// add
// const ans= arr.push(999);              // add at last    // return lenth of array
// const ans = arr.unshift(666);          // Add at start   // return lenth of array
// const ans = arr.splice(3,0,31,32,33)  // add at specific index  // return empty array
                                        

console.log(arr ,ans);               /// both mate chhe delete and add mate



////////////////////////////////////////////////////////////////////


// let arr = [5,10,15,20,25,30,35,40,55,60]

// search 

// const ans = arr.includes(35)    // return boolean
// const ans =arr.some((v) => v>55)   // return boolean   conditinally check
// const ans = arr.find((v) => v>50)     // return first occurence of element when match
                      
                       // ans 55  jo compare ma bov moti value hoi ne e arr na ho to return undefined karshe
// console.log(ans);

//////////////////////////////////////////////////////////////////////














