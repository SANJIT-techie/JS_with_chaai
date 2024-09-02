const user = {
    username: "sanjit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this); //this gives you the current context of the scope
        
    }
}
// Object.freeze(user)
// this keyword is used for refering to the current context.

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


console.log(this); //this gives an empty object, as in the node env.

// when we run the same over browser it gives windows, as the most used global object is windows.

//this cannot be used inside of a function

// here the return is used-------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// and here parenthesis "()" is used no need to write return keyword(used in react)


// implicit return in function

// const addTwo = (num1, num2) => ( num1 + num2 )


// returing an object in function
const addTwo = (num1, num2) => ({username: "sanjit"})
//pare

console.log(addTwo(3,4));
