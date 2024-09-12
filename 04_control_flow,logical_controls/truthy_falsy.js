// // as at the end  all the conditional statements work over the value being true or false. hence we are learning this.

// // if (userEmail) {
// //     console.log("Got user email");
// // } else {
// //     console.log("Don't have user email");
// // }

// const userEmail = []

// if (userEmail && userEmail.length !== 0) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// // falsy values
// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //truthy values
// // "0", 'false', " ", [], {}, function(){}

// // for objects
// const emptobj = {}

// if(Object.keys(emptobj).length == 0){
//     console.log("object is empty");
// }

// fallback to handle the null or undefined values
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 154
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator (if else statement shortcut)
// condition ? true : false

const iceTeaPric =  100
iceTeaPric <= 80 ? console.log("less than 80") : console.log("more than 80");

 

