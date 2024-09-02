// they can be declared as literal or constructor

// in case of literals NO singleton

const mySym = Symbol("key1") //the value key1 is used just as a description
console.log(mySym);

const jsUser = {
    name: "sanjit",
    "fullName" : "Mohapatra", //this can nvr be accessed using .fullName, hence the 2nd way can be used.
    [mySym]: "mykey1", //used here as an unique key
    age:23,
    location: "BBSR",
    email: "sanjit.s@bourntec.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// Object.freeze(jsUser) can be used ot freeze the changes.
jsUser.email = "bourntec.smohapatra"

console.log(jsUser.email); //accessing with "." notation or in some cases as below, [] is used
console.log(jsUser["fullName"]); //as in the backend it is storing it in the string format
console.log(jsUser[mySym]); //printed here the value using it as the key


//declaring a fucntion inside of the object
jsUser.greeting = function(){
    console.log("hello jsUser");
    
}

// trying to refer to a name value in the object
jsUser.greetingTwo = function(){
    console.log(`hello jsUser,${this.name}`); //string interpolation, this is used to refer to this particular object
    
}



console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser);
