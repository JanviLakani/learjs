///1
/// we can declare the same name variable.

// var x = 10;
// var x = 20;

// console.log(x);  // ans 20


///2

// var x;
// console.log(x);


// var x = 10;
// var x;
// console.log(x); // ans undefined



///3
///var does not have any block scope.

// var x = 10;

// {
//     var x = 20;
// }

// console.log(x); /// ans 20


////  ************************************************************************************* ////


/// let : -

///1 

//E56
/// we can not redeclare the same name variable.


// let x = 10;
// let x = 10;

// console.log(x); /// ans error



/// let have a block scope.

///2

// let x = 10;

// {
//     let x = 20;
// }


// console.log(x);

///1

// var x = 10;
// var x = 20;
// const x = 30;

// console.log(x);  ///ans error

///2

// var x = 10

// {
//     let x = 20;
// }

// console.log(x);  /// 10

///3

// {
//     let x = 10;
// }

// {
//     let x = 20;
// }

// console.log(x); /// error

///4

// let x = 10;    ////globlal variable
// {
//     let x = 20;
//     x = x+ 5;
// }

// x = x + 5;

// console.log(x);  /// 15


///5

// {
//     let x = 10;
// }

// {
//     let x = 10;
// }

// x = x+ 5;

// console.log(x);   /// error



///6

// let x = 10;

// {
//     let x = 20;
//     x = x + 5;
// }

// x = x + 5;

// console.log(x);     /// 15











