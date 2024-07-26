const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
so their was no concept of the global or functional variable, the variable got modified globally.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])