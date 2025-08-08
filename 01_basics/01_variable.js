const accountId = 1445534
let accountEmail = "azan@gmail.com"
var accountPassword = "1234323"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "dev@gmail.com"
accountPassword = "28484"
accountCity = "Istanbul"

console.log(accountId);

/*
Prefer not to usr var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


