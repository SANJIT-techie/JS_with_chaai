const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and the currval is ${currval}`);
//     return acc + currval
// }, 0)


// -------- arrow function-------------

// const myTotal = myNums.reduce((acc,currval) => acc+currval,0)

// console.log(myTotal);

// -----------------example------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const subTotal = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(subTotal);
