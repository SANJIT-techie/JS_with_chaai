// // for 

// // ctrl+d = duplicate key


// let myArray = ["flash","batman","suparman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
//     return element
// }

// // console.log(myArelemray);

// console.log(element);


function getAllValues(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(element);
    });
    return result;
}

let myArray = ["flash", "batman", "suparman"];
let allValues = getAllValues(myArray);
console.log(allValues); // Output: ["flash", "batman", "suparman"]