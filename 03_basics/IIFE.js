//Immedietly invoked function expression

// IIFE is normally used to immedietly execute function and also to save it from the global variable pollution

(function chai(){
    console.log(`DB CONNECTED`);
}) ();  //use ";" to break the IIFE

// ()() first parentheis holds the declaration and the other its execution.

((name) => {
    console.log(`DB connected two ${name}`);
}) ("sanjit");

