// Primitive

//7 types: String, Number, Boolean, Null, Defined, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const bigNumber = 34488383939393329n// BigInt
// console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Object, Functions

const items = ["apple", "banana", "Grapes",.123];
// Index start with 0
// Index = 0 => apple
// Index = 1 => banana
//Index = 2 => Grapes
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);
// console.log(typeof items);


const keyValue ={
    "id" : 123,
    "name": "Azan",
    "Email": {
        "1": "azan@gmail.com",
        "2": "mazan@gmail.com"
    }
}
console.log(typeof keyValue);
console.log(keyValue["id"]);
console.log(keyValue['Email']["2"]);
// Another way of getting the values.
console.log(keyValue.name);
// console.log(typeof keyValue);// object

const myFunction = function({ a = 1,b = 3}){
    console.log("Hello world");
    console.log(a + b);
    
}

console.log(typeof myFunction);// function
// display hello world below line
myFunction(a = 1, b = 1)

