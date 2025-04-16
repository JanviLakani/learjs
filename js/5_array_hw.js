// 1.    Finding the maximum element in an array.

// let arr = [10,20,30,98,59,999,99,58];

// let ans=Math.max(10,20,30,98,59,999,99,58);

// console.log(arr,ans);

// **************************************************

// 2.    Finding the minimum element in an array.

// let arr = [10,20,30,98,59,999,99,58];

// let ans=Math.min(10,20,30,98,59,999,99,58);

// console.log(arr,ans);

// **********************************************************

// 3.    Sorting an array in ascending order.

// let arr =[10,20,30,98,59,999,99,58];

// let ans=arr.sort((a,b) => a-b);

// console.log(ans);

// *************************************************************

// 4.    Sorting an array in descending order.

// let arr = [10,20,30,98,59,999,99,58];

// let ans=arr.sort((a,b) => b-a);

// console.log(ans);

// *************************************************************

// 5.    Reversing an array.

// let arr =[9 ,99,999,9999,9999];

// let ans=arr.reverse();

// console.log(ans);

// **************************************************************

// 6.    Finding the sum of all elements in an array.

// let arr=[10,40,50,90];

// let ans=arr.reduce((acc,v,i) => v+i );

// let ans=arr.reduce((acc,v,i) => acc + v)

// console.log(ans);

// **************************************************************

// 7.    Finding the average of all elements in an array.

// let arr= [10,20,30,40,99];

// let ans=arr.reduce((acc,v,i) => acc+v)

// console.log(ans / 5);

// ************************************************************

// 8.    Checking if an array contains a specific element.

// let arr=[10,20,30];

// let ans=arr.includes(21);
// let ans=arr.some((v,i) => v === 20 ); // ans :- true/false
// let ans=arr.find((v,i) => v === 20);  // ans 20
// let ans=arr.filter((v,i) => v=== 20);  // in array [20]

// console.log(ans);

// ******************************************************

// 9. Removing duplicates from an array.

// let arr=[10,20,10,40,30,99,100,99 ,40];
// let addarr = [];
// let ans=arr.includes()
// console.log(ans);

// 10.    Merging two arrays into a new array.

// let arr=[10,20,30];
// let arr1=[40,50,60];

// let ans =arr1.concat(arr1);

// console.log(ans);

// *************************************************************

// 11.    Splitting an array into two arrays based on a condition.

// let arr=[10,20,30,40,50,60,70,80,90,100];

// let ans=arr.filter((v,i) => v>50);
// let ans1=arr.filter((v,i) => v<=50);

// console.log(ans , ans1);

// **************************************************************

// 12.    Rotating an array by a given number of positions.


// let n=parseInt(prompt("please enter lenth"))

// let arr=[5,10,15,20,25,30,35,40]

// let ans = arr.splice(arr.length-n,n); 

// console.log(ans)



// for (let i=ans.length-1; i>=0; i--) {
//     arr.unshift(ans[i])
// }

// console.log(arr);






// for(let i=0; i<0 i--) {

// }




// **************************************************************** 

// 13.    Finding the second largest element in an array. 

// let arr = [10, 5, 8, 20, 15]; // [20, 15, 10, 8, 5]

// let ans=arr.sort((a,b) => b-a );

// console.log(ans); 

// let seclargest = ans[ans.length - 2];
// console.log(seclargest);

// __________________________________________________________ 

// class 


// 13.    Finding the second largest element in an array. 


// let arr = [10, 5, 8, 20, 15]; // [20, 15, 10, 8, 5]

// let ans=arr.sort((a,b) => b-a );

// let n=parseInt(prompt("please add"))

// console.log(ans); 

// let x = ans[ans.length - n];
// console.log(x);

// _________________________________________________________________ 

// class 

// 14.    Finding the k-th smallest element in an array.


// let arr=[5,10,45,20,30,25,35,40,15,50]; // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// let ans=arr.sort((a,b) => a-b );

// let n=parseInt(prompt("please add..."))

// console.log(ans);

// let x=n;

// console.log(arr[x-n]);


// not done @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// *****************************************************************

// 14.    Finding the k-th smallest element in an array.

// let arr=[5,10,45,20,30,25,35,40,15,50]; // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// let ans=arr.sort((a,b) => a-b );

// console.log(ans);


// let k=3; //  3rd smallest element

// console.log(arr[k - 1]);







// *********************************************************************

// 15  Finding the median of an array.

// let arr = [5, 2, 9, 1, 6]; //odd number

// let ans=arr.slice(2,3);

// console.log(arr,ans);




// let arr = [4, 1, 7, 2]; //even number

// function Median(arr) {
//   let ans = arr.sort((a, b) => a - b);

//   console.log(ans);

//   let n = arr.length;

//   let mid = Math.floor(n / 2);

//   if (n % 2 == 0) {
//     return arr[mid];
//   } else {
//     return (arr[mid - 1] + arr[mid]) / 2;
//   }
// }



// ********************************************************************** 


// 15  Finding the median of an array.
 
// let n=parseInt(prompt("please enter element "))

// let arr=[10,60,40]

// let ans = arr.sort((a, b) => a - b);

// let = n;
// let index= Math.floor(n/2);


// console.log(index);


// *************************************************** 









// // 16.    Checking if two arrays are equal or not. 

// let arr=[10,20,30];

// let arr1=[10,20,30];

// let ans = arr.length === arr1.length && arr.every((value,index) => value === arr1[index])

// console.log(ans);


// ______________________________________________________ 

// for loop 

// let arr=[10,20,100];
// let arr1=[10,20,100];

// let ans=true;

// if (arr.length !== arr1.length) {
//   ans=false;
// } else {
//   for (let i=0; i< arr.length; i++) {
//     if (arr[i] !== arr1[i]) {
//       ans=false
//     }
//   }
// }



// console.log(ans);









// ____________________________________________________ 

// if(arr.length === arr1.length) {
//     return true;
// } else {
//     return false;
// }


// console.log(arr, arr1);

// function arrfunction(arr,arr1) {
//     if (arr.length !== arr1.length) {
//         return false;
//     } else {
//         for (let i=0; i<arr.length; i++) {
//             if (arr[i] !== arr1[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(arrfunction(arr, arr1));



// ************************************************ 

// 17 Finding the index of the first occurrence of an element in an array. 


// let arr=[1,10,100,1000,10000];

// let ans=arr.indexOf(1000);

// console.log(ans);


// ******************************************************** 


// 18 Finding the index of the last occurrence of an element in an array. 

// let arr=[50,100,150,200,250,150,300];

// let ans=arr.lastIndexOf(150);

// console.log(ans);


// ************************************************************* 

// 19 Removing all occurrences of an element from an array. 

// let arr=[10,20,25,30,25,25,40,35,25];

// let ans=arr.filter(v => v !== 25);

// console.log(ans);


// **************************************************************** 

// 20  Replacing all occurrences of an element in an array with a new element.

// let arr = [5,10,11,15,11,25,30,11];

// let ans=arr.map(v => v === 11 ? 99 : v); 

// console.log(ans);


// ****************************************************************** 


  //21 .Creating a new array with the elements of the original array
  //  in reverse order, without modifying the original array.

//   let arr=[5,10,15,20,25,30];

//   let ans=arr.slice().reverse();

//   console.log(arr,ans);

// ************************************************************************** 

//22.    Checking if an array is sorted in ascending order.

// let arr=[5,10,15,20,25,30];

// let ans=arr.every((value,index) => {
//     return index === 0 || arr[index- 1] <= value;
// })

// console.log(ans); 
    


// **************************************************************************** 

// 23.    Checking if an array is sorted in descending order.

// let arr=[100,95,90,85,80,75,70,65,60];

// let ans=arr.every((v,i) => {
//     return i === 0 || arr[i-1] >= v;

// })

// console.log(ans);

// ********************************************************************************* 

 //24. Finding the first three maximum number's sum an array.

//  let arr=[10,60,50,70,30,20];

//  let ans=arr.slice().sort((a,b) => b-a)

//  let sum=ans[0]+ans[1]+ans[2];

//  console.log(arr,ans,sum);
 












