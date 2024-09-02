// // function loginUserMessage(usernmae) {
// //     return `${usernmae} just logged in`
// // }

// // console.log(loginUserMessage("hitesh"));


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

// ------------------2nd part-----------------------------------

// ... is also called as the rest operator and also the spread operator
// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(100,200,300));



//---------------------- passing onbjects into the function--------------
const user = {
    username: "sanjit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

handleObject({
    username: "sanjit",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    console.log(getArray[1])
    // return getArray[1]
    
}

returnSecondValue(myNewArray);

