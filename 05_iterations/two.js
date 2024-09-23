const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IM', "India")


console.log(map);

for (const [key,value] of map){
    console.log(key,"of the value is",value);
    
}

// for (const [key,value] of map){
//     console.log(key ,"==>", value);
    
// }

// --------------------------------------------------

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const key of myObject) {
//     console.log(key)
// }

// --------------------------------------------------

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key); //it shows the keys if array which are actually the indexes, and are set by default
//     console.log(programming[key]);
    

// }