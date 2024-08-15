const accId = 123
let accountEmail = "piyushmittal1983@gmail.com"
var accountPassword = "piyush@123"
accountCity = "Ladnun"

// newId = 2; not allowed
accountEmail = "unknown@123"
accountPassword = "###"
accountCity = "Rajasthan"

/*
    Prefer not to use var because of issue of block scope and functional scope.
*/

console.log(accountEmail, accountPassword, accountCity)
console.table([accountEmail, accountPassword, accountCity])

