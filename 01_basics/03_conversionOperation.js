let score = 33
let character = "abc"
let value = null

// console.log(score)
// console.log(typeof score)
// console.log(typeof(score))

let valueInString = String(score)
let valueInNumber = Number(value)
// console.log(typeof(valueInString))
// console.log(valueInNumber)
let isLogged = false

let booleanIsLoggedIn = Number(isLogged)
// console.log(typeof booleanIsLoggedIn);

let emptyCharacter = ""
let convertAndCheck = Boolean(emptyCharacter)
console.log(convertAndCheck)//false
console.log(typeof convertAndCheck);// Boolean

let a = "adfjaslfj";
let check  = Boolean(a)
console.log(check);//true
console.log(typeof check);// Boolean




// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// 1 => in Boolean true and 0 => false
// "" => false
// "abc" => true