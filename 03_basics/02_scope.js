// the block scopes are completely independent entity from those of the scopes which are global or outside of that block.

// value access in the scopping can be understood by the ice cream analogy, where the variable in local scope can access the value of the global variable if not declared explicitly, but the variable in the global scope cannot access the value of the local scope.

function one() {
    let username = "Sanjit"

    function two() {
        const website = "youtube"
        console.log(username = "pappu");
        console.log(username);
        
        
    }
    // console.log(website);

    
    two()
    
}

one()

// function and the functions declared inside a varible is termed as expression
// the variables in the js are very powerful

// ----------------------------2nd part----------------------------------
console.log(addone(5))

function addone(num){
    return num + 1
}

// Function expressions and arrow functions assigned to variables behave like regular variables and are not hoisted in their entirety; only the variable declaration is hoisted (if declared with var).

console.log(addTwo(5));
//hence the function is not working here
const addTwo = function(num){
    return num + 2
}

