// // const tinderUser = new Object() //singleton object as it is constructor
// const tinderUser = {} //non singleton object, and this is literal

// tinderUser.id = "123abc" 
// tinderUser.name = "sanjit"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// //nested objects
// const regularUser = {
//     email: "sanjit.smohaptra",
//     fullname: {
//         // userFullName: {
//         //     firstName: "sanjit",
//         //     lastName: "mohapatra"
//         // }

//     }
// }

// console.log(regularUser.fullname?.userFullName?.lastName);

// // we also have optional chaining where there is a ? to check wheather the value exists or not.

// // this retures undefined instead of the typeerror in js

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}

// // const obj3 = {obj1,obj2} //just like array it simply puts it the object format inside the object.

// const obj3 = Object.assign(obj1,obj2) //in case of this the obj1 is acting as the target and changes are being done over it

// //thats why we use {} which creates a new object
// // const obj3 = Object.assign(obj1,obj2)

// //or we can use the spread syntax which is normally used.
// // const obj3 = {...obj1,...obj2}
// console.log(obj1);
// console.log(obj3);

// // objects inside the array

// users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[1].id);
 
// const keys = (Object.keys(tinderUser));
// console.log(keys);
// console.log(typeof users);

// //the data type shows array becasuse all arrays are technically objects
// //to check wheather it is array or not use:

// console.log(Array.isArray(users));

// console.log(tinderUser.hasOwnProperty("isLogged"));
// // console.log(tinderUser?.isLoggedIn);



const course = {
    coursename : "jshindi",
    price: "999",
    courseInstructor: "sanjit"
}


// console.log(course.courseInstructor); 
// instead of this we can use the below "object destructuring"
 
const {courseInstructor:instructor} = course

console.log(instructor);
