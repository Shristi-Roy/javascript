
const accountId = 12345;
let accountEmail = "Shristiroy@gmail.com";
var accountPassword = "1234567";
accountCity = "Banglore";
let accountName;

//console.log(accountEmail)
//console.table([accountId, accountEmail, accountPassword])

// const are not redeclaration

accountEmail = "aanya@gmail.com";
accountPassword = "09876";
accountCity = "hyderabad";

console.table([accountEmail,accountId,accountPassword,accountCity, accountName])

// perfer not to use var becoz of issue in functional scope or block scope

/* DIFFERENCE B/W VAR LET AND CONST

1.let and const are not global scope but var has.
2. var let and const has functional scope.
3. let and const have functional scope but var has not.
4.var and let can be reassigned but const has not.

*/