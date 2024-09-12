// in the call back functions there is no name of the function mentioned

// for each doesnt return you values

// map tranfomrs the value and returns a new array simillarly the filter filters the value and then return the filtered value

// so the main usage of the filter or map function is that you dont have to explicitely use push


// const newNums = myNums.filter( (num) => (num > 4) )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return(num > 4) 
// }
// )
    


// when you use the scope "{}" you need to explicitely return the value.

// console.log(newNums);


// ----------------filter method-----------

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// //using the callbcak function (map and filter)
//   const userbooks = books.filter((bk) => bk.genre === "History")

//   console.log(userbooks);

//   it is casesensitive
  
// ------------chaining-----------------

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) 
                .map( (num) => num + 1) //here the map runs over the latest value of the newNums modified after the 1st map
                .filter( (num) => num >= 40)

console.log(newNums);

